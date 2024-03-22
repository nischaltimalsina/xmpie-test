import React from 'react';

const CallToActions = ({ step, setStep, updateData, testError, setError }) => {
    return (
        <section className="flex w-full justify-between mt-32 px-10">
            <div>
                {step !== 1 && step !== 5 && (
                    <button
                        className="text-[#261248] cursor-pointer box-border font-condensed font-normal text-xl text-center uppercase px-12 py-5 min-w-32 border-transparent border-2 hover:border-[#21104b] hover:scale-105"
                        onClick={(e) => {
                            e.preventDefault();
                            setError('');
                            setStep((prevStep) => Number(prevStep) - Number(1));
                            let elem = document.getElementById('scrollToHere');
                            elem.scrollIntoView();
                        }}>
                        Back
                    </button>
                )}
            </div>
            {step === 4 ? (
                <button
                    type="submit"
                    className="text-[#fff] cursor-pointer bg-[#21104b] font-condensed font-normal text-xl text-center uppercase border-0 px-12 py-5 min-w-32 ease-in-out "
                    onClick={updateData}>
                    Submit
                </button>
            ) : (
                step !== 5 && (
                    <button
                        className="text-[#fff] cursor-pointer bg-[#21104b] font-condensed font-normal text-xl text-center uppercase border-0 px-12 py-5 min-w-32 hover:scale-105 ease-in-out "
                        onClick={(e) => {
                            e.preventDefault();
                            const errorExists = testError();
                            if (!errorExists) {
                                setStep((prevStep) => Number(prevStep) + 1);
                                let elem = document.getElementById('scrollToHere');
                                elem.scrollIntoView();
                                setError('');
                            }
                        }}>
                        Next
                    </button>
                )
            )}
        </section>
    );
};

export default CallToActions;
CallToActions.propTypes = false;
