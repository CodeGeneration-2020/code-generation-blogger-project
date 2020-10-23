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
  className?: string;
}> = ({
  children,
  onClick = () => {},
  link = '#',
  type = 'button',
  style = {},
  theme,
  className = 'shared-button',
}) => {
  return (
    <Link to={link} className={className}>
      <Styled.Button
        theme={theme}
        type={type}
        onClick={onClick}
        width={style.width || ''}
        hover={style.hover}
        background={style.background}
        height={style.height || ''}
        boxShadow={style.boxShadow || ''}
        border={style.border}
        filter={style.filter}
        borderRadius={style.borderRadius || '8px'}
      >
        {children}
      </Styled.Button>
    </Link>
  );
};

export default withTheme(BlueButton);
