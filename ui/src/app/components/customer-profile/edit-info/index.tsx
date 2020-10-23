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
import CropImg from '../../shared/crop-image';
import { verifyImage } from '../../../helpers/verification';

const CustomerProfileEdit = props => {
  const [prevAva, setAva] = React.useState<any>(undefined);
  const [cropAvaMode, toggleCropMode] = React.useState<boolean>(false);
  const [file, setFile] = React.useState<any>(undefined);

  React.useEffect(() => {
    props.getCitiesByCountryId(props.customerInfo.location.country.value);
    // eslint-disable-next-line
  },[]);

  const prevSaveAva = async file => {
    const verifyImg = await verifyImage(file, 536, 274, 4000, 4000);
    if (verifyImg) {
      setFile(URL.createObjectURL(file));
      toggleCropMode(true);
    }
  };

  const onCropImgage = ava => {
    if (ava) {
      setAva(ava);
    }
    setFile(undefined);
    toggleCropMode(false);
  };

  return cropAvaMode ? (
    <CropImg
      widthCrop={160}
      heightCrop={160}
      previewWidth={536}
      previewHeight={274}
      imgFile={file}
      onCropImage={onCropImgage}
    />
  ) : (
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
                    src={prevAva ? prevAva : Ava}
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
