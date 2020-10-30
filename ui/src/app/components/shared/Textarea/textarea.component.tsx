import React from 'react';
import withTheme from '../../../../HOC/withTheme';
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
        borderRadius={props.style && props.style.borderRadius}
        lineHeight={props.style && props.style.lineHeight}
        theme={props.theme}
      />
      <Styled.Error>{errors?.[name]}</Styled.Error>
    </Styled.TextWrapper>
  );
};
export default withTheme(Textarea);
