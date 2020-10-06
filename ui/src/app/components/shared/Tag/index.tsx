import React from 'react';
import * as Styled from './styles';
import PropTypes from 'prop-types';

const Tag = ({ title, className }) => {
  return (
    <Styled.TagContainer className={className}>
      <span className="title">{title}</span>
    </Styled.TagContainer>
  );
};

Tag.propTypes = {
  title: PropTypes.string,
  className: PropTypes.string,
};

Tag.defaultProps = {
  title: '',
  className: '',
};

export default Tag;
