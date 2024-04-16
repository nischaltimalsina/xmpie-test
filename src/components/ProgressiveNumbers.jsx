import React from 'react';
import { FaCheck } from 'react-icons/fa';

const ProgressiveNumbers = ({ number, status, active }) => {
    return (
        <div className=" md:w-[100px] md:h-[100px] wounded bg-[#F9F9F9] z-20 flex items-center justify-center">
            <div
                className={`rounded-full shadow-[0_4px_11px_0_rgba(0_0_0/0.22)]
                w-[50px] md:w-[85px] h-[50px] md:h-[85px] ${active || status ? 'bg-gray-200' : 'bg-white'}  bg-white flex items-center justify-center `}>
                <div
                    className={`rounded-full  ${active || status ? 'bg-[#2E6186] w-[45px] md:h-[75px] h-[45px] md:w-[75px]' : 'bg-white'}  flex items-center justify-center`}>
                    <div
                        className={` md:text-[44px] md:leading-[58px] ${active || status ? 'text-white' : 'text-[#2E6186]'}`}>
                        {status ? <FaCheck /> : number}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProgressiveNumbers;

ProgressiveNumbers.propTypes = false;
