import React from 'react';

const Step5 = ({
    showThanks,
    firstName,
    lastName,
    email,
    courses,
    additionalData,
    downLoadBrochure
}) => {
    return (
        <>
            {showThanks ? (
                <>
                    You can download your personalised brochure now {firstName} {lastName}.
                    We&apos;ve also sent an email to {email} with a link.
                    <br />{' '}
                    <span className="font-semibold">
                        You requested the following information for your personalised brochure:
                    </span>
                    {courses.map((course) => (
                        <p key={course}>{course}</p>
                    ))}
                    {additionalData.map((course) => (
                        <p key={course}>{course}</p>
                    ))}
                </>
            ) : (
                <>
                    <p className="font-semibold">
                        Please submit the form to get brochure through email. You can also download
                        it from below:
                        <br />
                        <button
                            className="text-[#fff] cursor-pointer bg-[#21104b] font-condensed font-normal text-xl text-center uppercase border-0 px-12 py-5 min-w-32"
                            onClick={downLoadBrochure}>
                            Download Brochure
                        </button>
                    </p>
                </>
            )}
        </>
    );
};

export default Step5;
Step5.propTypes = false;
