import { ThemeContext } from '../contexts/ThemeContext';
import React, { useContext } from 'react';

const ThemeToggle = () => {
  const { toggleTheme } = useContext(ThemeContext);
  return (
    <button onClick={toggleTheme}> Toggle the theme </button>
  );
}

export default ThemeToggle;

// class ThemeToggle extends Component {
//   render() {
//     return (
//       <ThemeContext.Consumer>{(context) => {
//         return (
//           <button onClick={context.toggleTheme}> Toggle the theme </button>
//         );
//       }}</ThemeContext.Consumer>
//     );
//   }
// }