import React from 'react';
import * as Style from './styles';
import Textarea from '../../../shared/Textarea/textarea.component';

const Description = ({
  handleChange,
  handleBlur,
  description,
  errors,
  touched,
}) => {
  return (
    <Style.Description>
      <span className="title">About the Job</span>
      <div className="text">
        <Textarea
          placeholder={'description'}
          name="description"
          onChange={handleChange}
          onBlur={handleBlur}
          value={description}
          errors={errors}
          touched={touched}
        />
      </div>
    </Style.Description>
  );
};

export default Description;
