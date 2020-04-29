import ThemeContextProvider from './contexts/ThemeContext';
import BookList from './components/BookList';
import Navbar from './components/Navbar';
import React from 'react';

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <Navbar />
        <BookList />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
