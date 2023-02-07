import AppForAdmin from '../../components/AppForAdmin';
import AppForBusiness from '../../components/AppForBusiness';
import AppForUser from '../../components/AppForUser';
import Contact from '../../components/Contact';
import FeatureForUser from '../../components/FeatureForUser';
import FeedbackToBusiness from '../../components/FeedbackToBusiness';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Intro from '../../components/Intro';
import NavbarResponsive from '../../components/NavbarResponsive';
import React from 'react';
import SliderService from '../../components/ReService';
import Sliders from '../../components/Sliders/Sliders';
import TopBusiness from '../../components/TopBusiness';
import WCAService from '../../components/WCAService';

const Home = () => {
    return (
        <>
            <Header />
            <NavbarResponsive />
            <Sliders />
            <Intro />
            <AppForUser />
            <FeatureForUser />
            <AppForBusiness />
            <AppForAdmin />
            <SliderService />
            <WCAService />
            <TopBusiness />
            <FeedbackToBusiness />
            <Contact />
            <Footer />
        </>
    );
};

export default Home;
