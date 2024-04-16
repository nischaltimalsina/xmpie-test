import React from 'react';
import { XmplContext, useAdors, useTrigger } from 'xmpl-react';
import { useContext, useEffect, useState } from 'react';
import { FaCheck } from 'react-icons/fa';
import { Header } from '../components/common/Header';
import { Footer } from '../components/common/Footer';
import Tabs from '../components/Tabs';

const Thankyou = () => {
    const { xmp } = useContext(XmplContext);
    const { getAdorValues } = useAdors();
    const { trigger } = useTrigger();

    const [link, setLink] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [courses, setCourses] = useState([]);
    const [additionalData, setAdditionalData] = useState([]);

    const triggerEmail = async () => {
        try {
            trigger('E2');
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        const rid = new URLSearchParams(window.location.search).get('rid');
        if (rid) {
            getAdorValues({
                rid,
                isLogin: true,
                adors: [
                    'firstName',
                    'lastName',
                    'email',
                    'courses',
                    'studyArea',
                    'additionalData',
                    'XMPie.PDF.P3'
                ],
                resolved: ['photo1', 'photo2', 'photo3', 'photo4'],
                async: false,
                isCached: true,
                noCache: false
            });
            triggerEmail();
        }
        setFirstName(xmp.r['firstName']);
        setLastName(xmp.r['lastName']);
        setEmail(xmp.r['email']);
        setCourses(xmp.r['courses']?.split(',') || []);
        setAdditionalData(xmp.r['additionalData']?.split(',') || []);
        setLink(xmp.r['XMPie.PDF.P3']);
    }, [xmp]);

    return (
        <div className="bg-[#F9F9F9] antialiased w-full h-full min-h-screen  text-[16px] leading-6">
            <Header />
            <div>
                <Tabs step={5} />
                <div className="bg-white py-10">
                    <div className="container mx-auto">
                        <h1 className="my-16 leading-16 text-6xl   uppercase">Thank You!</h1>
                        <p>
                            You can download your personalised brochure now{' '}
                            <span className="font-semibold">
                                {firstName} {lastName}.{' '}
                            </span>
                            We&apos;ve also sent an email to{' '}
                            <span className="font-semibold">{email}</span> with a link.
                        </p>
                        <br />{' '}
                        <p className="font-semibold mt-4">
                            You requested the following information for your personalised brochure:
                        </p>
                        {courses?.map((course) => (
                            <p key={course} className="flex">
                                <span>
                                    <FaCheck className="mr-4 mt-2" />{' '}
                                </span>
                                <span>{course}</span>
                            </p>
                        ))}
                        {additionalData?.map((course) => (
                            <p key={course} className="flex">
                                <span>
                                    <FaCheck className="mr-4 mt-2" />{' '}
                                </span>
                                <span>{course}</span>
                            </p>
                        ))}
                        <div className="w-full flex justify-center mt-12 mb-24">
                            <div className="text-[#21104b] cursor-pointer bg-[#ed6b5e] hover:bg-[#21104b] hover:text-[#ed6b5e]  font-normal text-2xl text-center uppercase border-0 px-12 py-5 min-w-32">
                                <a href={link} target="_blank" rel="noreferrer">
                                    Download Your Personalised Brochure
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Thankyou;
