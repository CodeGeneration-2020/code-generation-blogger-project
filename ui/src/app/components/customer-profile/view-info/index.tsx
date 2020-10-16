import React from 'react';
import * as Style from './styles';
import Ava from '../../../../img/ava.svg';
import { contactsIcons } from '../../../../img';
import withTheme from '../../../../HOC/withTheme';

const CustomerProfile = props => {
  return (
    <Style.ProfileInfoContainer>
      <Style.CustomerInfo theme={props.theme}>
        <div className="ava">
          <img src={Ava} alt="ava" />
        </div>
        <div className="info">
          <div className="fullname">
            <span className="name">{props.customerInfo.name}</span>
            <span className="surname">{props.customerInfo.surname}</span>
          </div>
          <div className="location">
            <span className="country">
              {props.customerInfo.location.country.label},
            </span>
            <span className="city">
              {props.customerInfo.location.city.label}
            </span>
          </div>
        </div>
      </Style.CustomerInfo>
      <Style.ContactInfo theme={props.theme}>
        <span className="title">Contact info</span>
        <div className="contacts">
          <div className="item">
            <img
              src={contactsIcons.mail}
              width={42}
              height={36}
              alt="mail"
              className="icon"
            />
            <span className="content">{props.customerInfo.contact.mail}</span>
          </div>
          <div className="item">
            <img
              src={contactsIcons.phone}
              width={39}
              height={39}
              alt="phone"
              className="icon"
            />
            <span className="content">{props.customerInfo.contact.phone}</span>
          </div>
          <div className="item">
            <img
              src={contactsIcons.link}
              width={36}
              height={36}
              alt="link"
              className="icon"
            />
            <span className="content">{props.customerInfo.contact.link}</span>
          </div>
        </div>
      </Style.ContactInfo>
    </Style.ProfileInfoContainer>
  );
};

export default withTheme(CustomerProfile);
