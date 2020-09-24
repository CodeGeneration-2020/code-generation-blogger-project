import React from 'react';
import * as Styled from './button.styles';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const BlueButton = ({ children, onClick, link, type, style }) => {
  return (
    <Link to={link}>
      <Styled.Button
        type={type}
        onClick={onClick}
        width={style.width}
        height={style.height}
      >
        {children}
      </Styled.Button>
    </Link>
  );
};

BlueButton.propTypes = {
  link: PropTypes.string,
  type: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.any,
  onClick: PropTypes.func,
};

BlueButton.defaultProps = {
  link: '#',
  type: 'button',
  style: {},
  onClick: () => {},
};

export default BlueButton;
