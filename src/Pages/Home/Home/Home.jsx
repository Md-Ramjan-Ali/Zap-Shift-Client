import React from 'react';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import ClientLogoSlider from '../ClientLogoSlider/ClientLogoSlider';
import SupportSection from '../SupportSection/SupportSection';
import MarchantSection from '../MarchantSection/MarchantSection';
import CustomerReviews from '../CustomerReviews/CustomerReviews';
import Accourding from '../Accourding/Accourding';

const Home = () => {
  return (
    <div className='space-y-5'>
     <Banner></Banner>
     <Services></Services>
     <ClientLogoSlider></ClientLogoSlider>
     <SupportSection></SupportSection>
     <MarchantSection></MarchantSection>
     <CustomerReviews></CustomerReviews>
     <Accourding></Accourding>
    </div>
  );
};

export default Home;