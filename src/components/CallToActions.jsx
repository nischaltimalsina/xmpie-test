import React from 'react';

const CallToActions = ({ step, setStep, showThanks, updateData }) => {
    return (
        <section className="flex w-full justify-between mt-32 px-10">
            <div>
                {step !== 1 && (
                    <button
                        className="text-[#261248] cursor-pointer font-condensed font-normal text-xl text-center uppercase border-0 px-12 py-5 min-w-32"
                        onClick={(e) => {
                            e.preventDefault();
                            setStep((prevStep) => Number(prevStep) - Number(1));
                            let elem = document.getElementById('scrollToHere');
                            elem.scrollIntoView();
                        }}>
                        Back
                    </button>
                )}
            </div>
            {!showThanks &&
                (step === 5 ? (
                    <button
                        type="submit"
                        className="text-[#fff] cursor-pointer bg-[#21104b] font-condensed font-normal text-xl text-center uppercase border-0 px-12 py-5 min-w-32"
                        onClick={updateData}>
                        Submit
                    </button>
                ) : (
                    <button
                        className="text-[#fff] cursor-pointer bg-[#21104b] font-condensed font-normal text-xl text-center uppercase border-0 px-12 py-5 min-w-32"
                        onClick={(e) => {
                            e.preventDefault();
                            setStep((prevStep) => Number(prevStep) + 1);
                            let elem = document.getElementById('scrollToHere');
                            elem.scrollIntoView();
                        }}>
                        Next
                    </button>
                ))}
        </section>
    );
};

export default CallToActions;
CallToActions.propTypes = false;
