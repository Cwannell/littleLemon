import React from 'react';
import './App.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Main from './components/Main';
import Menu from './components/menu';


function App() {
  return (

      <div className='app'>
   <React.Fragment >
    <Nav />
    <Main />
    <Menu />
    <Footer />
   </React.Fragment>
   </div>
  );
}

export default App;
