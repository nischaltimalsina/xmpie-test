import React from 'react';
import ProgressiveNumbers from './ProgressiveNumbers';
import data from '../assets/data.json';

const Tabs = ({ step }) => {
    return (
        <section id="scrollToHere" className="flex  justify-around mb-2 relative">
            <div className="w-10/12  border-t-[1px] border-black absolute hidden md:block top-[86px] z-10 mx-8"></div>
            {data.titles.map((title, i) => (
                <div
                    key={title.value}
                    className={`w-full font-semibold flex flex-col  items-center py-4 md:py-16 px-4 ${step === title.value ? ' bg-[rgba(91,194,231,0.1)]' : 'bg-white'}`}>
                    <ProgressiveNumbers
                        number={i + 1}
                        status={i + 1 < step}
                        active={step === title.value}
                    />
                    <span className={`text-center hidden md:flex text-lg font-semibold leading-7`}>
                        {title.text}
                    </span>
                </div>
            ))}
        </section>
    );
};

export default Tabs;
Tabs.propTypes = false;
