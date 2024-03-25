import React from 'react';
import InfoComponent from '../common/InfoComponent';
import data from '../../assets/data.json';

const Step1 = ({
    studyArea,
    setStudyArea,
    studyLevel,
    setStudyLevel,
    setField,
    setError,
    error
}) => {
    return (
        <section>
            <h2 className="text-[44px] leading-[52px] font-condensed my-[50px] text-[#262626] font-medium ">
                WHAT STUDY AREA AND LEVEL ARE YOU INTERESTED IN?
            </h2>
            <p className="leading-7">All fields are required unless specified optional.</p>
            <label className="flex flex-row my-5 text-[#2b2b2b] font-semibold items-center text-lg mb-2">
                Study area
                <InfoComponent text="Choose your study Area" />
            </label>
            <select
                id="studyArea"
                name="studyArea"
                value={studyArea}
                onChange={(e) => {
                    error === 'Please chhose an study Area.' ? setError('') : null;
                    setStudyArea(e.target.value);
                    setField(e.target?.options[e.target.selectedIndex]?.text);
                }}
                className="w-full max-w-md mt-5 text-xs box-border rounded-none h-12 px-[15px] border-[1px] border-[#ccc]  shadow-sm focus-visible:outline-0">
                <option value="" name="" className="text-xs">
                    Select a Study Area
                </option>
                {data?.studyArea.slice(0, 3).map((study) => (
                    <option key={study.value} value={study.value} className="text-xs">
                        {study.text}
                    </option>
                ))}
            </select>
            <div className="my-6 max-w-md">
                <label className="flex mt-2 mb-5 flex-row text-[#2b2b2b] font-semibold items-center text-lg leading-2xl ">
                    Study level
                    <InfoComponent text="Choose your study Level" />
                </label>
                Select up to 2 of the options below:
                <div>
                    {data.studyLevel.map((level) => (
                        <div key={level}>
                            <input
                                type="checkbox"
                                id={level}
                                name="studyLevel"
                                value={level}
                                checked={studyLevel.includes(level)}
                                onChange={(e) => {
                                    if (studyLevel.length === 2 && e.target.checked) {
                                        let elem = document.getElementById('scrollToHere');
                                        elem.scrollIntoView();
                                        return setError('You can only choose 2 options');
                                    }
                                    error === 'You can only choose 2 options' ||
                                    error === 'Please chhose at least 1 study level.'
                                        ? setError('')
                                        : null;

                                    setStudyLevel((prevData) =>
                                        e.target.checked
                                            ? [...prevData, e.target.value]
                                            : prevData.filter((item) => item !== e.target.value)
                                    );
                                }}
                            />
                            <label htmlFor="reading" className="ml-2 mr-4 leading-[35px]">
                                {level}
                            </label>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Step1;
Step1.propTypes = false;
