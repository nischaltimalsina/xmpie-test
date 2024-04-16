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
            <h2 className="text-[33px] leading-[43px] my-[50px]  font-bold ">
                What study area and level are you interested in?
            </h2>
            <p className="leading-[33px] text-[25px] font-bold">
                All fields are required unless specified optional.
            </p>
            <div className="flex ">
                <label className="flex flex-row my-5 text-[#000] font-semibold items-center text-lg mb-2 mr-4">
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
                    className="w-full max-w-md mt-5 text-xs box-border rounded-[5px] border-[0.5px] h-12 px-[15px]  border-[#000] focus-visible:outline-0">
                    <option value="" name="" className="text-xs">
                        Select a Study Area
                    </option>
                    {data?.studyArea.map((study) => (
                        <option key={study.value} value={study.value} className="text-xs">
                            {study.text}
                        </option>
                    ))}
                </select>
            </div>
            <div className="flex">
                <div className="my-6 xl:w-1/2">
                    <label className="flex mt-2 mb-5 flex-row text-[#000] font-semibold items-center text-lg leading-2xl ">
                        Study level
                        <InfoComponent text="Choose your study Level" />
                    </label>
                    <p className="leading-[33px] text-[25px] font-bold">
                        Select up to 2 of the options below:
                    </p>
                    <div>
                        {data.studyLevel.map((level) => (
                            <div key={level} className="w-full flex items-center">
                                <input
                                    type="checkbox"
                                    id={level}
                                    name="studyLevel"
                                    value={level}
                                    checked={studyLevel.includes(level)}
                                    className="min-w-[20px] min-h-[20px] mr-6 my-2 rounded-[5px]"
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
                                <label
                                    htmlFor="reading"
                                    className="ml-2 mr-4 font-normal leading-[35px]">
                                    {level}
                                </label>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="hidden xl:flex xl:w-1/2 items-center justify-center -mt-10">
                    <div className="h-[307px] w-[315px]">
                        <img
                            className="object-contain"
                            src="/images/vectorImage.png"
                            alt="study level"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Step1;
Step1.propTypes = false;
