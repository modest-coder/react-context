import { ThemeContext } from '../contexts/ThemeContext';
import React, { Component } from 'react';

class ThemeToggle extends Component {
  render() {
    return (
      <ThemeContext.Consumer>{(context) => {
        return (
          <button onClick={context.toggleTheme}> Toggle the theme </button>
        );
      }}</ThemeContext.Consumer>
    );
  }
}

export default ThemeToggle;