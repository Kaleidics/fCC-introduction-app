import React from 'react';
import './sass/main.scss';
import Header from './components/Header';
import Introductions from './components/Introductions';

function App() {
  return (
      <div className="App">
          <Header />
          <Introductions />
      </div>
  );
}

export default App;
