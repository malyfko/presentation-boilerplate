import React, { Component } from 'react';
import PropTypes from 'prop-types';

const KEYS = {
  arrowLeft: 37,
  arrowRight: 39,
};

export class FullPage extends Component {
  constructor(props) {
    super(props);
    this.page = React.createRef();
    this.state = {
      activeSlide: 0,
    };
  }

  componentDidMount() {
    document.addEventListener('keydown', e => this.setNext(e), false);
    document.addEventListener('keydown', e => this.setPrevious(e), false);
  }

  setNext(e) {
    if (e.keyCode === KEYS.arrowRight) {
      const { children } = this.props;
      const lastSlide = React.Children.toArray(children).length - 1;
      this.setState(({ activeSlide }) => ({ activeSlide: Math.min(activeSlide + 1, lastSlide) }));
    }
  }

  setPrevious(e) {
    if (e.keyCode === KEYS.arrowLeft) {
      this.setState(({ activeSlide }) => ({ activeSlide: Math.max(activeSlide - 1, 0) }));
    }
  }

  render() {
    const { activeSlide } = this.state;
    const { children } = this.props;

    return (
      <div>{children[activeSlide]}</div>
    );
  }
}

FullPage.propTypes = {
  children: PropTypes.node.isRequired,
};
