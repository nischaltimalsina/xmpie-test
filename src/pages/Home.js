import React from 'react';
import { Header } from '../components/common/Header';
import { Footer } from '../components/common/Footer';
import { Contact } from '../components/Contact';

const Home = () => {
    return (
        <div className="bg-gray-100 antialiased w-full h-full min-h-screen font-sans text-[16px] leading-6">
            <div id="wrapper">
                <Header />
                <Contact />
                <Footer />
            </div>
        </div>
    );
};

export default Home;
