import { ThemeContext } from '../contexts/ThemeContext';
import React, { useContext } from 'react';

const BookList = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;
  return (
    <div className='book-list' style={{ background: theme.bg, color: theme.syntax }}>
      <ul>
        <li style={{ background: theme.ui }}>The way of kings</li>
        <li style={{ background: theme.ui }}>The name of the wind</li>
        <li style={{ background: theme.ui }}>The final empire</li>
      </ul>
    </div>
  );
}

export default BookList;

// class BookList extends Component {
//   static contextType = ThemeContext;
//   render() {
//     const { isLightTheme, light, dark } = this.context;
//     const theme = isLightTheme ? light : dark;
//     return (
//       <div className='book-list' style={{ background: theme.bg, color: theme.syntax }}>
//         <ul>
//           <li style={{ background: theme.ui }}>The way of kings</li>
//           <li style={{ background: theme.ui }}>The name of the wind</li>
//           <li style={{ background: theme.ui }}>The final empire</li>
//         </ul>
//       </div>
//     );
//   }
// }