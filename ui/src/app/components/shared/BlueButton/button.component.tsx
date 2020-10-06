import React from 'react';
import * as Styled from './button.styles';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const BlueButton = ({ children, onClick, link, type, style, theme }) => {
  return (
    <Link to={link}>
      <Styled.Button
        theme={theme}
        type={type}
        onClick={onClick}
        width={style.width}
        height={style.height}
        boxShadow={style.boxShadow}
        borderRadius={style.borderRadius || '8px'}
      >
        {children}
      </Styled.Button>
    </Link>
  );
};

BlueButton.propTypes = {
  theme: PropTypes.object,
  link: PropTypes.string,
  type: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.any,
  onClick: PropTypes.func,
};

BlueButton.defaultProps = {
  theme: {},
  link: '#',
  type: 'button',
  style: {},
  onClick: () => {},
};

export default BlueButton;
