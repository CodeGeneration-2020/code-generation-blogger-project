import React, { useEffect, useState } from 'react';
import * as Style from './styles';
import CustomerInfoView from '../../components/customer-profile/view';
import CusromerInfoEdit from '../../components/customer-profile/edit';
import { connect } from 'react-redux';
import { ActionCreators as CustomerAC } from '../../../store/customer/actions';
import { ActionCreators as SharedAC } from '../../../store/sharedData/actions';
import { PAGINATION } from '../../../consts/lists';
import withTheme from '../../../HOC/withTheme';
import { FormikValues } from 'formik';

const CustomerProfileContainer = props => {
  const [editMode, setEditMode] = useState<boolean>(false);
  const formRef = React.useRef<FormikValues>() as React.MutableRefObject<
    FormikValues | undefined
  >;

  const toggleEditMode = () => {
    if (!editMode) setEditMode(true);
    if (editMode && formRef.current && formRef.current.isValid) {
      formRef.current.handleSubmit();
      setEditMode(false);
    }
  };

  const getCitiesByCountryId = id => {
    props.clearCities();
    props.getCitiesByCountryId(id);
  };

  const selectCountry = c => {
    if (formRef.current) {
      formRef.current.setValues({
        ...formRef.current.values,
        country: { value: c.value, label: c.label },
        city: '',
      });
      getCitiesByCountryId(c.value);
    }
  };

  useEffect(() => {
    const customerId = props.match.params.id;
    props.getCustomer(customerId);
    props.getComments({ customerId, skip: 0, limit: PAGINATION.limit });
    // eslint-disable-next-line
  }, []);

  return (
    <Style.ProfileContainer>
      {!editMode
        ? props.customerInfo && (
            <CustomerInfoView customerInfo={props.customerInfo} />
          )
        : props.customerInfo && (
            <CusromerInfoEdit
              innerRef={formRef}
              customerInfo={props.customerInfo}
              countries={props.countries}
              cities={props.cities}
              selectCountry={selectCountry}
              getCitiesByCountryId={getCitiesByCountryId}
              editCustomerInfo={props.editCustomerInfo}
            />
          )}
      <Style.Edit theme={props.theme} onClick={toggleEditMode}>
        <span className="text">{editMode ? 'Save' : 'Edit'}</span>
      </Style.Edit>
    </Style.ProfileContainer>
  );
};

export default connect(
  (state: any) => {
    const { CUSTOMER_REDUCER, SHARED_DATA_REDUCER } = state;
    return {
      customerInfo: CUSTOMER_REDUCER.customer,
      cities: SHARED_DATA_REDUCER.cities,
      countries: SHARED_DATA_REDUCER.countries,
    };
  },
  {
    getCustomer: CustomerAC.getCustomerById,
    getComments: CustomerAC.getCustomerComments,
    editCustomerInfo: CustomerAC.editCustomerById,
    getCitiesByCountryId: SharedAC.getCity,
    clearCities: SharedAC.clearCities,
  },
)(withTheme(CustomerProfileContainer));
