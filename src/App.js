// import ThemeContextProvider from './contexts/ThemeContext';
// import AuthContextProvider from './contexts/AuthContext';
// import ThemeToggle from './components/ThemeToggle';
// import BookList from './components/BookList';
// import Navbar from './components/Navbar';

import SongList from './components/SongList';

import React from 'react';

function App() {
  return (
    <div className="App">
      {/* <AuthContextProvider>
        <ThemeContextProvider>
          <Navbar />
          <BookList />
          <ThemeToggle />
        </ThemeContextProvider>
      </AuthContextProvider> */}
      <SongList />
    </div>
  );
}

export default App;
