import React from 'react';
import { Formik } from 'formik';
import { commentFormSchema } from '../../../../helpers/validation';
import { initComment } from '../../../../../consts/initData';
import DrawStars from '../../../shared/draw-stars';
import withTheme from '../../../../../HOC/withTheme';
import Button from '../../../shared/BlueButton/button.component';
import Input from '../../../shared/Input/input.commponent';
import TextArea from '../../../shared/Textarea/textarea.component';
import * as Style from './styles';

const AddComment = ({ ...props }) => {
  return (
    <Formik
      validationSchema={commentFormSchema}
      initialValues={initComment()}
      onSubmit={(values, { resetForm }) => {
        props.addComment(values);
        resetForm({});
      }}
    >
      {({ values, errors, touched, handleBlur, setValues, handleSubmit }) => {
        return (
          <Style.AddComment theme={props.theme}>
            <div className="input-data">
              <div className="comment">
                <TextArea
                  placeholder={'Write the comment'}
                  name="comment"
                  value={values.comment}
                  errors={errors}
                  style={{ borderRadius: '8px' }}
                  onChange={e => {
                    setValues({ ...values, comment: e.target.value });
                  }}
                  onBlur={handleBlur}
                  touched={touched}
                />
              </div>
              <div className="score">
                <div className="stars">
                  <DrawStars
                    count={5}
                    className={'star'}
                    score={values.score}
                    setScore={score => {
                      setValues({ ...values, score });
                    }}
                  />
                  <span className="prompt">{errors['score']}</span>
                </div>
                <div className="input-subs">
                  <Input
                    value={values.subsCame}
                    name="subsCame"
                    errors={errors}
                    style={{ height: '35px' }}
                    onChange={e => {
                      !isNaN(e.target.value) &&
                        setValues({
                          ...values,
                          subsCame: e.target.value.trim(),
                        });
                    }}
                  />
                </div>
                <div className="text">
                  <div className="first">subs</div>
                  <div className="second">came</div>
                </div>
              </div>
            </div>
            <div className="add-comment">
              <Button
                style={{ width: '100%', height: '100%', hover: false }}
                onClick={handleSubmit}
              >
                <span className="text">Add comment</span>
              </Button>
            </div>
          </Style.AddComment>
        );
      }}
    </Formik>
  );
};

export default withTheme(AddComment);
