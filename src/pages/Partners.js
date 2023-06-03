import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import Container from '../components/container';
import Stripe from '../components/Partners/stripe';

const Partners = () => {
  return (
    <div>
      <Navbar />
      <Container/>
      <Stripe />
      <Footer/>
    </div>
  )
}

export default Partners;