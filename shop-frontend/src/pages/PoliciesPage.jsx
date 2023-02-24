import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';
import Policies from '../components/Policies';

const PoliciesPage = () => {
  return (
    <div>
        <Navbar/>
        <Policies />
        <Newsletter/>
        <Footer/>
    </div>
  );
};

export default PoliciesPage;
