import React from 'react';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import ClientLogoSlider from '../ClientLogoSlider/ClientLogoSlider';
import SupportSection from '../SupportSection/SupportSection';

const Home = () => {
  return (
    <div className='space-y-5'>
     <Banner></Banner>
     <Services></Services>
     <ClientLogoSlider></ClientLogoSlider>
     <SupportSection></SupportSection>
    </div>
  );
};

export default Home;