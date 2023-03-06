import React from 'react';
import logo from './logo.svg';
import './App.css';

export default function Home() {
  return (
    <div id="home">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Coming soon!
        </p>

        Built with
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          React
        </a>
      </header>
    </div>
  );
}
