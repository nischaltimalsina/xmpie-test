import React from 'react';

const Step5 = ({ firstName, lastName, email, courses, additionalData, link }) => {
    return (
        <>
            <>
                <p>
                    You can download your personalised brochure now {firstName} {lastName}.
                    We&apos;ve also sent an email to {email} with a link.
                </p>
                <br />{' '}
                <p className="font-semibold mt-4">
                    You requested the following information for your personalised brochure:
                </p>
                {courses.map((course) => (
                    <p key={course}>{course}</p>
                ))}
                {additionalData.map((course) => (
                    <p key={course}>{course}</p>
                ))}
                <div className="w-full flex justify-center mt-8">
                    <div className="text-[#fff] cursor-pointer bg-[#21104b] font-condensed font-normal text-xl text-center uppercase border-0 px-12 py-5 min-w-32">
                        <a target="_blank" rel="noreferrer" href={link}>
                            Download Brochure
                        </a>
                    </div>
                </div>
            </>
        </>
    );
};

export default Step5;
Step5.propTypes = false;
