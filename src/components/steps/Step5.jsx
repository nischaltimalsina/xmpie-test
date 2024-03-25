import React from 'react';
import { FaCheck } from 'react-icons/fa';

const Step5 = ({ firstName, lastName, email, courses, additionalData, link }) => {
    return (
        <>
            <h1 className="my-16 leading-16 text-6xl font-condensed uppercase">Thank You!</h1>
            <p>
                You can download your personalised brochure now{' '}
                <span className="font-semibold">
                    {firstName} {lastName}.
                </span>
                We&apos;ve also sent an email to <span className="font-semibold">{email}</span>
                with a link.
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
                <div className="text-[#21104b] cursor-pointer bg-[#ed6b5e] hover:bg-[#21104b] hover:text-[#ed6b5e] font-condensed font-normal text-2xl text-center uppercase border-0 px-12 py-5 min-w-32">
                    <a href={link} target="_blank" rel="noreferrer">
                        Download Your Personalised Brochure
                    </a>
                </div>
            </div>
        </>
    );
};

export default Step5;
Step5.propTypes = false;
