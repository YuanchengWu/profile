import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Blinking = styled.span`
  animation: blink 1s cubic-bezier(0, -0.82, 0.43, 0.6) infinite;

  @keyframes blink {
  to {
    color: transparent;
    text-shadow: none;
  }
`;

export default class Typer extends Component {
  state = {
    text: ''
  };

  componentDidMount() {
    this.handleTyping();
  }

  componentDidUpdate(prevProps) {
    if (this.props.fullText !== prevProps.fullText) {
      this.setState({ text: '' });
    }
  }

  handleTyping = () => {
    const text = this.state.text;
    const { fullText, typingSpeed } = this.props;
    if (text !== fullText) {
      this.setState({ text: fullText.substring(0, text.length + 1) });
    }
    setTimeout(this.handleTyping, typingSpeed);
  };

  render() {
    return (
      <>
        <span>{this.state.text}</span>
        <Blinking>{this.props.cursor}</Blinking>
      </>
    );
  }
}

Typer.propTypes = {
  fullText: PropTypes.string.isRequired,
  typingSpeed: PropTypes.number.isRequired,
  cursor: PropTypes.string
};