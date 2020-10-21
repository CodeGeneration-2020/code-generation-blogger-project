import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import * as Style from './styles';
import CustomerInfoView from '../../components/customer-profile/view-info';
import CustomerInfoEdit from '../../components/customer-profile/edit-info';
import ListOwnJobs from '../../components/customer-profile/listOwnJobs';
import { connect } from 'react-redux';
import { ActionCreators as CustomerAC } from '../../../store/customer/actions';
import { ActionCreators as JobAC } from '../../../store/job/actions';
import { ActionCreators as FiltersAC } from '../../../store/filters/actions';
import { ActionCreators as SharedAC } from '../../../store/sharedData/actions';
import { PAGINATION } from '../../../consts/lists';
import withTheme from '../../../HOC/withTheme';
import { FormikValues } from 'formik';
import { TABS } from '../../../consts/lists';
import Comments from '../../components/customer-comments';
import BlueButton from '../../components/shared/BlueButton/button.component';
import Loader from '../../../loader/component/loader.component';

const CustomerProfileContainer = props => {
  const [editMode, setEditMode] = useState<boolean>(false);
  const [activeTab, setTab] = useState(TABS.feedbacks);
  const formRef = React.useRef<FormikValues>() as React.MutableRefObject<
    FormikValues | undefined
  >;
  const history = useHistory();
  const setActiveTab = tab => {
    setTab(tab);
  };

  const toggleEditMode = () => {
    if (!editMode) setEditMode(true);
    if (editMode && formRef.current && formRef.current.isValid) {
      formRef.current.handleSubmit();
      setEditMode(false);
    }
  };

  const getCities = id => {
    props.clearCities();
    props.getCitiesByCountryId(id);
  };

  const setCountry = c => {
    if (formRef.current) {
      formRef.current.setValues({
        ...formRef.current.values,
        country: { value: c.value, label: c.label },
        city: '',
      });
      getCities(c.value);
    }
  };

  const getJobsByCustomerId = customerId => {
    props.getJobsByCustomerId({
      customerId,
      skip: props.skipCustomerJobs,
      limit: PAGINATION.limit,
    });
    props.setSkip({
      key: 'currentCustomerJobs',
      skip: props.skipCustomerJobs + PAGINATION.limit,
    });
  };

  const getComments = customerId => {
    props.getComments({
      customerId,
      skip: props.skipCustomerComments,
      limit: PAGINATION.limit,
    });
    props.setSkip({
      key: 'customerComments',
      skip: props.skipCustomerComments + PAGINATION.limit,
    });
  };

  const resetSkip = () => {
    props.resetSkip({ key: 'currentCustomerJobs' });
    props.resetSkip({ key: 'customerComments' });
  };

  useEffect(() => {
    const customerId = props.match.params.id;
    props.getCustomer(customerId);
    props.clearCurrentCustomerJobs();
    props.clearComments();
    props.clearCities();
    getJobsByCustomerId(customerId);
    getComments(customerId);
    // eslint-disable-next-line
  }, []);

  return (
    <>
      {!props.customerInfo ? (
        <Loader />
      ) : (
        <Style.ProfileContainer>
          {!editMode
            ? props.customerInfo && (
                <CustomerInfoView customerInfo={props.customerInfo} />
              )
            : props.customerInfo && (
                <CustomerInfoEdit
                  innerRef={formRef}
                  customerInfo={props.customerInfo}
                  countries={props.countries}
                  cities={props.cities}
                  selectCountry={setCountry}
                  getCitiesByCountryId={getCities}
                  editCustomerInfo={props.editCustomerInfo}
                />
              )}
          <Style.Edit theme={props.theme} onClick={toggleEditMode}>
            <span className="text">{editMode ? 'Save' : 'Edit'}</span>
          </Style.Edit>
          <Style.Tabs>
            <Style.LeftTab
              active={activeTab === TABS.feedbacks}
              theme={props.theme}
              onClick={() => setActiveTab(TABS.feedbacks)}
            >
              Feedbacks
            </Style.LeftTab>
            <Style.RightTab
              active={activeTab === TABS.jobs}
              theme={props.theme}
              onClick={() => setActiveTab(TABS.jobs)}
            >
              Jobs
            </Style.RightTab>
          </Style.Tabs>
          {activeTab === TABS.feedbacks ? (
            <Style.Feedbacks theme={props.theme}>
              <Comments
                comments={props.comments}
                isBlogger={false}
                getComments={() => getComments(props.customerInfo._id)}
              />
            </Style.Feedbacks>
          ) : (
            <Style.ListJobs>
              <BlueButton
                onClick={() => {
                  history.push('/addJob');
                  resetSkip();
                }}
                className="new-job"
                style={{ width: '87px', hover: false }}
              >
                <span className="text">New Job</span>
              </BlueButton>
              <ListOwnJobs
                resetSkip={() => resetSkip()}
                jobs={props.jobs}
                loading={props.jobsLoading}
                getJobsPagination={() =>
                  getJobsByCustomerId(props.customerInfo._id)
                }
              />
            </Style.ListJobs>
          )}
        </Style.ProfileContainer>
      )}
    </>
  );
};

export default connect(
  (state: any) => {
    const {
      CUSTOMER_REDUCER,
      JOB_REDUCER,
      FILTERS_REDUCER,
      SHARED_DATA_REDUCER,
    } = state;
    return {
      customerInfo: CUSTOMER_REDUCER.customer,
      comments: CUSTOMER_REDUCER.customerComments,
      jobs: JOB_REDUCER.currentCustomerJobs,
      jobsLoading: JOB_REDUCER.loading,
      cities: SHARED_DATA_REDUCER.cities,
      countries: SHARED_DATA_REDUCER.countries,
      skipCustomerJobs: FILTERS_REDUCER.pagination.currentCustomerJobs.skip,
      skipCustomerComments: FILTERS_REDUCER.pagination.customerComments.skip,
    };
  },
  {
    getCustomer: CustomerAC.getCustomerById,
    getJobsByCustomerId: JobAC.getJobsByCustomerId,
    clearCurrentCustomerJobs: JobAC.clearCurrentCustomerJobs,
    getComments: CustomerAC.getCustomerComments,
    editCustomerInfo: CustomerAC.editCustomerById,
    getCitiesByCountryId: SharedAC.getCitiesByCountryId,
    clearCities: SharedAC.clearCities,
    clearComments: CustomerAC.clearComments,
    setSkip: FiltersAC.setSkip,
    resetSkip: FiltersAC.resetSkip,
  },
)(withTheme(CustomerProfileContainer));
