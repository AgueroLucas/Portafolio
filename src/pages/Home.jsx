import React from 'react';
import Footer from '../components/public/Footer';
import Main from '../components/public/Main';
import Navbar from '../components/public/NavBar';


function Home() {
  return (
    <div style={{ background: 'linear-gradient(#f6e282, #fefbef)' }}>
      <Navbar />
      <Main />
      <Footer />
    </div>
  );
}



export default Home;