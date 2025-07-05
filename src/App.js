import React from 'react';
import './App.css';
import Nav from './Nav';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';


function App() {
  return (

      <div className='app'>
   <React.Fragment >
    <Header/>
    <Nav />
    <Main />
    <Footer />
   </React.Fragment>
   </div>
  );
}

export default App;
