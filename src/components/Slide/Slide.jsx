import React from 'react';
import PropTypes from 'prop-types';

import styles from './Slide.scss';

export const Slide = ({ children }) => (
  <div className="slide">{ children }</div>
);

Slide.propTypes = {
  children: PropTypes.node.isRequired,
};
