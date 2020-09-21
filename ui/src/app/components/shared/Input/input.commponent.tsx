import React from 'react';
import * as Styled from './input.styles';

const Input = ({ errors, name, ...props }) => {
  return (
    <Styled.InputWrapper>
      <Styled.Input
        placeholder={props.placeholder}
        type={props.type}
        name={name}
        onChange={props.onChange}
        value={props.value}
        // onBlur={props.onBlur}
        // error={props.errors}
        // touched={props.touched}
      />
      <Styled.Error>{errors?.[name]}</Styled.Error>
    </Styled.InputWrapper>
  );
};

export default Input;
