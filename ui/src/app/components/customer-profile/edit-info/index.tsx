import React from 'react';
import * as Style from './styles';
import Ava from '../../../../img/ava.svg';
import { contactsIcons } from '../../../../img';
import withTheme from '../../../../HOC/withTheme';
import { Formik } from 'formik';
import { customerInfoFormSchema } from '../../../helpers/validation';
import Input from '../../shared/Input/input.commponent';
import Select from '../../shared/TagsSelect/select.component';
import uploadAva from '../../../../img/arrowUploadAva.svg';
import { initCustomerInfo } from '../../../../consts/initData';
import FileLoader from '../../shared/file-loader';
import { AVATYPES } from '../../../../consts/lists';

const CustomerProfileEdit = props => {
  const [prevAva, setAva] = React.useState<any>();
  React.useEffect(() => {
    props.getCitiesByCountryId(props.customerInfo.location.country.value);
    // eslint-disable-next-line
  },[])

  const prevSaveAva = file => {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = async (e: any) => {
      setAva({ ava: e.target.result, file });
    };
  };

  return (
    <Formik
      innerRef={props.innerRef as any}
      validationSchema={customerInfoFormSchema}
      initialValues={initCustomerInfo(props.customerInfo)}
      onSubmit={({
        name,
        surname,
        country,
        city,
        mail,
        phone,
        link,
        profile_picture,
      }) => {
        props.editCustomerInfo({
          customerId: props.customerInfo._id,
          name,
          surname,
          location: { country, city },
          contact: { mail, phone, link },
          profile_picture,
        });
      }}
    >
      {({ values, errors, touched, handleChange, setValues, handleBlur }) => {
        return (
          <Style.ProfileContainer>
            <Style.CustomerInfo theme={props.theme}>
              <div className="ava">
                <FileLoader
                  id={'upload-ava'}
                  handleSaveFile={ava => prevSaveAva(ava)}
                  allowedFormats={Object.values(AVATYPES)}
                />
                <label className="images" htmlFor={'upload-ava'}>
                  <img
                    src={prevAva ? prevAva.ava : Ava}
                    alt="ava"
                    className="ava"
                  />
                  <img className="upload-background" alt="" />
                  <img src={uploadAva} alt="ava" className="uploadAva" />
                </label>
              </div>
              <div className="info">
                <div className="item">
                  <Input
                    placeholder={''}
                    type="text"
                    name="name"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}
                    errors={errors}
                    touched={touched}
                  />
                </div>
                <div className="item">
                  <Input
                    placeholder={''}
                    type="text"
                    name="surname"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.surname}
                    errors={errors}
                    touched={touched}
                  />
                </div>
                <div className="item">
                  <Select
                    changeHandler={c => {
                      props.selectCountry(c);
                    }}
                    selected={[values.country]}
                    options={props.countries}
                    placeholder={values.country.label}
                  />
                </div>
                <div className="item">
                  <Select
                    changeHandler={c => {
                      setValues({ ...values, city: c });
                    }}
                    selected={[values.city]}
                    options={props.cities}
                    name={'city'}
                    errors={errors}
                    placeholder={values.city.label}
                  />
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
                  <span className="content">
                    {props.customerInfo.contact.mail}
                  </span>
                </div>
                <div className="item">
                  <img
                    src={contactsIcons.phone}
                    width={39}
                    height={39}
                    alt="phone"
                    className="icon"
                  />
                  <span className="content">
                    <Input
                      placeholder={''}
                      type="text"
                      name="phone"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.phone}
                      errors={errors}
                      touched={touched}
                      style={{
                        height: '52px',
                        fontSize: '20px',
                        lineHeight: '29px',
                        padding: '8px 15px 7px',
                      }}
                    />
                  </span>
                </div>
                <div className="item">
                  <img
                    src={contactsIcons.link}
                    width={36}
                    height={36}
                    alt="link"
                    className="icon"
                  />
                  <span className="content">
                    <Input
                      placeholder={''}
                      type="text"
                      name="link"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.link}
                      errors={errors}
                      touched={touched}
                      style={{
                        height: '52px',
                        fontSize: '20px',
                        lineHeight: '29px',
                        padding: '8px 15px 7px',
                      }}
                    />
                  </span>
                </div>
              </div>
            </Style.ContactInfo>
          </Style.ProfileContainer>
        );
      }}
    </Formik>
  );
};

export default withTheme(CustomerProfileEdit);
