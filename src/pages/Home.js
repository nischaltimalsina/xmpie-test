import React from 'react';
import { Header } from '../components/common/Header';
import { Footer } from '../components/common/Footer';
import { Contact } from '../components/Contact';

const Home = () => {
    return (
        <div className="bg-[#F9F9F9]  antialiased w-full h-full min-h-screen text-[19px] font-normal leading-[25px]">
            <div id="wrapper">
                <Header />
                <Contact />
                <Footer />
            </div>
        </div>
    );
};

export default Home;
