import React from 'react';
import './App.scss';
import './styles/header.scss'
import './styles/navbar.scss'
// import "antd/dist/antd.css";
import '@csstools/normalize.css';
import Header from './components/Header'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <p>hello jopa</p>
    </div>
  );
}

export default App;
