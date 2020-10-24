import React from 'react';
import Footer from '../Components/Footer/Footer';
import Header from '../Components/Header/Header';
import MainPart from '../Components/MainPart/MainPart';
import NavbarPart from '../Components/NavbarPart/NavbarPart';


const Home = () => {
  return (
    <>
      <NavbarPart></NavbarPart>
      <Header></Header>
      <MainPart></MainPart>
      <Footer></Footer>
    </>
  );
};

export default Home;