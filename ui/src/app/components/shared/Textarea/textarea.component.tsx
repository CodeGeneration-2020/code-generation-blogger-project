import React from 'react';
import * as Styled from './textarea.styles';

const Textarea = ({
  placeholder,
  name,
  onChange,
  value,
  onBlur,
  errors,
  touched,
}) => {
  return (
    <Styled.TextWrapper>
      <Styled.Text
        placeholder={placeholder}
        name={name}
        onChange={onChange}
        value={value}
        // onBlur={onBlur}
        // errors={props.errors}
        // touched={touched}
      />
      <Styled.Error>{errors?.[name]}</Styled.Error>
    </Styled.TextWrapper>
  );
};
export default Textarea;
