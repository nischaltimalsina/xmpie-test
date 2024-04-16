import React from 'react';
import ProgressiveNumbers from './ProgressiveNumbers';
import data from '../assets/data.json';

const Tabs = ({ step }) => {
    return (
        <>
            <section>
                <h1 className="md:text-[33px]  text-[#262626] text-center font-bold md:leading-[44px] md:my-[30px] my-[20px]">
                    {step === 1
                        ? 'SELECT STUDY AREA AND LEVEL'
                        : step === 2
                          ? 'CHOOSE A COURSE'
                          : step === 3
                            ? 'ADD INFORMATION'
                            : step === 4
                              ? 'PROVIDE YOUR DETAILS'
                              : 'DOWNLOAD BROCHURE'}
                </h1>
            </section>
            <section
                id="scrollToHere"
                className="flex  justify-around mb-2 relative container mx-auto">
                <div className="w-10/12  border-t-[1px] border-black absolute hidden md:block top-[65px] z-10 mx-8"></div>
                {data.titles.map((title, i) => (
                    <div
                        key={title.value}
                        className={`w-full font-semibold flex flex-col  items-center py-4  md:px-4 `}>
                        <ProgressiveNumbers
                            number={i + 1}
                            status={i + 1 < step}
                            active={step === title.value}
                        />
                        <span
                            className={`text-center mt-4 hidden md:flex text-[19px] font-normal leading-[25px]`}>
                            {title.text}
                        </span>
                    </div>
                ))}
            </section>
        </>
    );
};

export default Tabs;
Tabs.propTypes = false;
