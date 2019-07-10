import React from 'react';
import './sass/main.scss';
import Header from './components/Header';
import Introductions from './components/Introductions';
import Signup from './components/Signup';

export default class App extends React.Component() {

  render() {
    return (
        <div className="App">
            <Header />
            <Introductions />
            <Signup />
        </div>
    );
  }
}

