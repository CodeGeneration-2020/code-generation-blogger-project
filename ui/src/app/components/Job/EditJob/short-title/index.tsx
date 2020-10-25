import React from 'react';
import * as Style from './styles';
import Textarea from '../../../shared/Textarea/textarea.component';

const ShortTitle = ({ handleChange, handleBlur, title, errors, touched }) => {
  return (
    <Style.Title>
      <Textarea
        placeholder={'short title about the job'}
        name="title"
        onChange={handleChange}
        onBlur={handleBlur}
        value={title}
        errors={errors}
        touched={touched}
        style={{ fontSize: '20px', lineHeight: '29px' }}
      />
    </Style.Title>
  );
};

export default ShortTitle;
