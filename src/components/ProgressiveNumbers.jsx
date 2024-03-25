import React from 'react';
import { FaCheck } from 'react-icons/fa';

const ProgressiveNumbers = ({ number, status, active }) => {
    return (
        <div className="rounded-full w-12 h-12 bg-slate-200 flex items-center justify-center z-20">
            <div
                className={`rounded-full ${active || status ? 'bg-[#40c7f4]' : 'bg-gray-400'} h-8 w-8 flex items-center justify-center`}>
                <div>{status ? <FaCheck /> : number}</div>
            </div>
        </div>
    );
};

export default ProgressiveNumbers;

ProgressiveNumbers.propTypes = false;
