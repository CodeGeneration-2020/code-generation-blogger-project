import React from 'react';
import { Formik } from 'formik';
import { priceFormSchema } from '../../helpers/validation';
import { initPriceList } from '../../../consts/initData';
import * as Style from './styles';
import { priceList } from '../../../img';
import Input from '../shared/Input/input.commponent';
import BlueButton from '../../components/shared/BlueButton/button.component';

const NewBlogger = () => {
  return (
    <Formik
      validationSchema={priceFormSchema}
      initialValues={initPriceList()}
      onSubmit={values => {}}
    >
      {({ values, errors, touched, handleBlur, setValues, handleSubmit }) => {
        return (
          <Style.NewBloggerContainer>
            <Style.Title>
              Set the price for advertising on your blog
            </Style.Title>
            <Style.PriceList>
              <span className="prompt">You can change it at any time.</span>
              <div className="list">
                <div className="item">
                  <div className="input-price">
                    <span className="title">Post</span>
                    <div className="input">
                      <Input
                        placeholder={'price'}
                        type="text"
                        name="post"
                        onChange={e =>
                          !isNaN(e.target.value) &&
                          setValues({ ...values, post: e.target.value.trim() })
                        }
                        onBlur={handleBlur}
                        value={values.post}
                        errors={errors}
                        touched={touched}
                        style={{ width: '164px', height: '32px' }}
                      />
                      <img
                        src={priceList.dollar}
                        alt="icon-$"
                        className="icon"
                      />
                    </div>
                  </div>
                  <div className="price-icon">
                    <img
                      src={priceList.post}
                      width={41}
                      height={50}
                      alt="post"
                    />
                  </div>
                </div>

                <div className="item">
                  <div className="input-price">
                    <span className="title">Story</span>
                    <div className="input">
                      <Input
                        placeholder={'price'}
                        type="text"
                        name="story"
                        onChange={e =>
                          !isNaN(e.target.value) &&
                          setValues({ ...values, story: e.target.value.trim() })
                        }
                        onBlur={handleBlur}
                        value={values.story}
                        errors={errors}
                        touched={touched}
                        style={{ width: '164px', height: '32px' }}
                      />
                      <img
                        src={priceList.dollar}
                        alt="icon-$"
                        className="icon"
                      />
                    </div>
                  </div>
                  <div className="price-icon">
                    <img
                      src={priceList.story}
                      width={41}
                      height={65}
                      alt="post"
                    />
                  </div>
                </div>

                <div className="item">
                  <div className="input-price">
                    <span className="title">Post + Story</span>
                    <div className="input">
                      <Input
                        placeholder={'price'}
                        type="text"
                        name="postStory"
                        onChange={e =>
                          !isNaN(e.target.value) &&
                          setValues({
                            ...values,
                            postStory: e.target.value.trim(),
                          })
                        }
                        onBlur={handleBlur}
                        value={values.postStory}
                        errors={errors}
                        touched={touched}
                        style={{ width: '164px', height: '32px' }}
                      />
                      <img
                        src={priceList.dollar}
                        alt="icon-$"
                        className="icon"
                      />
                    </div>
                  </div>
                  <div className="price-icon">
                    <img
                      src={priceList.postStory}
                      width={115}
                      height={65}
                      alt="post"
                    />
                  </div>
                </div>
              </div>
              <BlueButton
                onClick={handleSubmit}
                className="btn-next"
                style={{
                  width: '99px',
                  height: '52px',
                  border: '1px solid #414D55',
                  borderRadius: '16px',
                  background: 'none',
                  filter: 'drop-shadow(0px 1px 8px rgba(110, 110, 110, 0.1))',
                  hover: false,
                }}
              >
                <span className="btn-text">Next</span>
              </BlueButton>
            </Style.PriceList>
          </Style.NewBloggerContainer>
        );
      }}
    </Formik>
  );
};

export default NewBlogger;
