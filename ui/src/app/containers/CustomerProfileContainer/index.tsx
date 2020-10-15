import React, { useEffect } from 'react';
import * as Style from './styles';
import CustomerInfoView from '../../components/customer-profile/view';
import { connect } from 'react-redux';
import { ActionCreators as CustomerAC } from '../../../store/customer/actions';
import { PAGINATION } from '../../../consts/lists';
import withTheme from '../../../HOC/withTheme';

const CustomerProfileContainer = props => {
  useEffect(() => {
    const customerId = props.match.params.id;
    props.getCustomer(customerId);
    props.getComments({ customerId, skip: 0, limit: PAGINATION.limit });
    // eslint-disable-next-line
  }, []);

  return (
    <Style.ProfileContainer>
      {props.customerInfo && (
        <CustomerInfoView customerInfo={props.customerInfo} />
      )}
      <Style.Edit theme={props.theme}>
        <span className="text">Edit</span>
      </Style.Edit>
    </Style.ProfileContainer>
  );
};

export default connect(
  (state: any) => {
    const { CUSTOMER_REDUCER } = state;
    return {
      customerInfo: CUSTOMER_REDUCER.customer,
    };
  },
  {
    getCustomer: CustomerAC.getCustomerById,
    getComments: CustomerAC.getCustomerComments,
  },
)(withTheme(CustomerProfileContainer));
