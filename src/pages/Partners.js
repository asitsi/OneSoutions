import React from 'react';
import Navbar from '../components/navbar';
import PartnerHomeScreen from '../components/Partners/partnerHomeScreen';
import PartnersStats from '../components/Partners/partnersStats';
import PartnersFooter from '../components/Partners/partnersFooter';

const Partners = () => {
  return (
    <div>
      <Navbar />
      <PartnerHomeScreen />
      <PartnersStats />
      <PartnersFooter />
    </div>
  )
}

export default Partners;