import React from 'react';
import './App.css';
import Nav from './Nav';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';


function App() {
  return (

   <React.Fragment>
    <Header/>
    <Nav />
    <Main />
    <Footer />
   </React.Fragment>
  );
}

export default App;
