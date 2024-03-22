import React from 'react';
import ProgressiveNumbers from './ProgressiveNumbers';
import data from '../assets/data.json';

const Tabs = ({ step }) => {
    return (
        <section id="scrollToHere" className="flex  justify-around mb-2 ">
            {data.titles.map((title, i) => (
                <div
                    key={title.value}
                    className={`w-full font-semibold flex flex-col justify-center items-center py-16 ${step === title.value ? ' bg-[rgba(91,194,231,0.1)]' : 'bg-white'}`}>
                    <ProgressiveNumbers number={i + 1} status={i + 1 < step} />
                    <span className={`text-center hidden lg:flex text-lg font-semibold leading-7`}>
                        {title.text}
                    </span>
                </div>
            ))}
        </section>
    );
};

export default Tabs;
Tabs.propTypes = false;
