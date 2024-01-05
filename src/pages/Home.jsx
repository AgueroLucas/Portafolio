import React from 'react';
import Footer from '../components/public/Footer';
import Main from '../components/public/Main';
import Navbar from '../components/public/NavBar';


function Home() {
  return (
    <div style={{ background: 'linear-gradient(#D8D6DB, #F9F8FC)' }}>
      <Navbar />
      <Main />
      <Footer />
    </div>
  );
}



export default Home;