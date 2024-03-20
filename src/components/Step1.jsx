import React from 'react';
import InfoComponent from './common/InfoComponent';
import data from '../assets/data.json';

const Step1 = ({ studyArea, setStudyArea, studyLevel, setStudyLevel }) => {
    return (
        <section>
            <h2 className="text-[44px] leading-[52px] font-condensed my-[50px] text-[#262626] font-medium ">
                WHAT STUDY AREA AND LEVEL ARE YOU INTERESTED IN?
            </h2>
            {/* <div className="w-full border-red-600 border-[2px] p-4 text-red-600 text-lg font-semibold mb-4">
    {error}
</div> */}
            <label className="flex flex-row text-[#2b2b2b] font-semibold items-center text-lg leading-2xl mb-2">
                StudyArea
                <InfoComponent text="Choose your study Area" />
            </label>
            <select
                id="studyArea"
                name="studyArea"
                value={studyArea}
                onChange={(e) => {
                    setStudyArea(e.target.value);
                }}
                className="w-full max-w-md text-xs box-border rounded-none h-12 px-[15px] border-[1px] border-[#ccc]  shadow-sm focus-visible:outline-0">
                <option value="" className="text-xs">
                    Select a Study Area
                </option>
                {data?.studyArea.slice(0, 3).map((study) => (
                    <option key={study.value} value={study.value} className="text-xs">
                        {study.text}
                    </option>
                ))}
            </select>
            <div className="my-4 max-w-md">
                <label className="flex flex-row text-[#2b2b2b] font-semibold items-center text-lg leading-2xl mb-2">
                    Study Level
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
                                    setStudyLevel((prevData) =>
                                        e.target.checked
                                            ? [...prevData, e.target.value]
                                            : prevData.filter((item) => item !== e.target.value)
                                    );
                                }}
                            />
                            <label htmlFor="reading" className="ml-2 mr-4">
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
