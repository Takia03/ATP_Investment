import HomePage from "./HomePage";
import React from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";

function layout(){
    return (
        <>
        <Header />
            <HomePage />
            <Footer />
        </>
            
      
    );
};
  

export default layout;