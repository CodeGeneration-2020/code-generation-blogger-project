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
  ...props
}) => {
  return (
    <Styled.TextWrapper>
      <Styled.Text
        placeholder={placeholder}
        name={name}
        onChange={onChange}
        value={value}
        fontSize={props.style && props.style.fontSize}
        lineHeight={props.style && props.style.lineHeight}
      />
      <Styled.Error>{errors?.[name]}</Styled.Error>
    </Styled.TextWrapper>
  );
};
export default Textarea;
