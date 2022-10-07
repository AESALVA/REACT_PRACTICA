import React from "react";
import { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Landing from "../components/Landing";
import Container from 'react-bootstrap/Container';


const Home = () => {
  

  return (
    <Container fluid className='d-flex flex-column min-vh-100 px-0'>
      <Header />
      <Landing />

      <Footer />
    </Container>
  );
};

export default Home;
