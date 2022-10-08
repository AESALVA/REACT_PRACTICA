import { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Landing from "../components/Landing";
import Container from "react-bootstrap/Container";
import { Routes,Route, Link } from "react-router-dom";
import Product from "../components/Product";


const Home = () => {
  return (
    <Container fluid className="d-flex flex-column min-vh-100 px-0">
      <Header />
      <Routes>
        <Route element={<Landing />} path="/" />
        <Route element={<Product />} path="/product/"/>
      </Routes>
      <Footer />
    </Container>
  );
};

export default Home;
