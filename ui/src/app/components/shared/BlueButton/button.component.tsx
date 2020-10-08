import React from 'react';
import * as Styled from './button.styles';
import { Link } from 'react-router-dom';
import withTheme from '../../../../HOC/withTheme';
import { ITheme, IButtonStyle } from '../../../../types';

const BlueButton: React.FC<{
  children?;
  onClick?;
  link?: string;
  type?;
  style?: IButtonStyle;
  theme?: ITheme;
}> = ({
  children,
  onClick = () => {},
  link = '#',
  type = 'button',
  style = {},
  theme,
}) => {
  return (
    <Link to={link}>
      <Styled.Button
        theme={theme}
        type={type}
        onClick={onClick}
        width={style.width || ''}
        height={style.height || ''}
        boxShadow={style.boxShadow || ''}
        borderRadius={style.borderRadius || '8px'}
      >
        {children}
      </Styled.Button>
    </Link>
  );
};

export default withTheme(BlueButton);
