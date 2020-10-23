import React from 'react';
import * as Style from './styles';
import Input from '../../../shared/Input/input.commponent';
import { contactsIcons } from '../../../../../img';
import withTheme from '../../../../../HOC/withTheme';

const Contacts = ({
  handleChange,
  handleBlur,
  additional_contacts,
  errors,
  touched,
  ...props
}) => {
  return (
    <Style.Contacts theme={props.theme}>
      <span className="title">How to contact</span>
      <div className="profile-contacts">
        <div className="item">
          <img
            src={contactsIcons.phone}
            width={23}
            height={23}
            alt="phone"
            className="icon"
          />
          <span className="content">+3809754333</span>
        </div>
        <div className="item">
          <img
            src={contactsIcons.mail}
            alt="mail"
            width={25}
            height={21}
            className="icon"
          />
          <span className="content">vincent@gmail.com</span>
        </div>
      </div>
      <div className="additional-contact">
        <img
          src={contactsIcons.globe}
          width={23}
          height={23}
          alt="additional"
          className="icon"
        />
        <div className="input-contact">
          <Input
            placeholder={'any additional contacts'}
            type="text"
            name="additional_contacts"
            onChange={handleChange}
            onBlur={handleBlur}
            value={additional_contacts}
            errors={errors}
            touched={touched}
            style={{ width: '100%', height: '40px', fontSize: '14px' }}
          />
        </div>
      </div>
    </Style.Contacts>
  );
};

export default withTheme(Contacts);
