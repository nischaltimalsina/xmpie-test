import React from 'react';
import data from '../../assets/data.json';

const Step3 = ({ additionalData, setAdditionalData }) => {
    return (
        <section>
            <h2 className="text-[33px] leading-[43px]  font-bold ">
                What additional information are you interested in?
            </h2>
            <p className=" font-normal mt-4">
                We&apos;ll provide all of the core information about your course and the University.
                Here you can add more information, should you need it.
            </p>

            <p className="leading-[33px] text-[25px] font-bold mt-4">
                Already in yout personalized brochure:
            </p>

            <ul className="list-disc ml-8">
                {data.alreadyInBrochure.map((topic) => (
                    <li key={topic} className="font-normal mt-4">
                        {topic}
                    </li>
                ))}
            </ul>
            <p className="leading-[33px] text-[25px] font-bold mt-4">
                Choose to add information on the following:
            </p>

            <ul className="flex flex-col md:flex-row justify-between">
                <div className="my-2">
                    <h4 className="text-[20px] mb-4 leading-[20px]   text-[#262626] font-semibold ">
                        About Melbourne
                    </h4>
                    {data.aboutMelbourne.map((about) => (
                        <li key={about} className="w-full flex items-center">
                            <input
                                type="checkbox"
                                id={about}
                                name="additionalData"
                                value={about}
                                checked={additionalData.includes(about)}
                                className="min-w-[20px] min-h-[20px] mr-6 my-2 rounded-[5px]"
                                onChange={(e) => {
                                    setAdditionalData((prevData) =>
                                        e.target.checked
                                            ? [...prevData, e.target.value]
                                            : prevData.filter((item) => item !== e.target.value)
                                    );
                                }}
                            />
                            <label htmlFor="reading" className="ml-2 mr-4 leading-[35px]">
                                {about}
                            </label>
                        </li>
                    ))}
                </div>
                <div className="my-2">
                    <h4 className="text-[20px] mb-4 leading-[20px]   text-[#262626] font-semibold ">
                        English Language Support
                    </h4>
                    {data.englishLanguageSupport.map((english) => (
                        <li key={english} className="w-full flex items-center">
                            <input
                                type="checkbox"
                                id={english}
                                name="additionalData"
                                value={english}
                                checked={additionalData.includes(english)}
                                className="min-w-[20px] min-h-[20px] mr-6 my-2 rounded-[5px]"
                                onChange={(e) => {
                                    setAdditionalData((prevData) =>
                                        e.target.checked
                                            ? [...prevData, e.target.value]
                                            : prevData.filter((item) => item !== e.target.value)
                                    );
                                }}
                            />
                            <label htmlFor="reading" className="ml-2 mr-4 leading-[35px]">
                                {english}
                            </label>
                        </li>
                    ))}
                </div>
                <div className="my-2">
                    <h4 className="text-[20px] mb-4 leading-[20px]   text-[#262626] font-semibold ">
                        University Services
                    </h4>
                    {data.universityServices.map((service) => (
                        <li key={service} className="w-full flex items-center">
                            <input
                                type="checkbox"
                                id={service}
                                name="additionalData"
                                value={service}
                                checked={additionalData.includes(service)}
                                className="min-w-[20px] min-h-[20px] mr-6 my-2 rounded-[5px]"
                                onChange={(e) => {
                                    setAdditionalData((prevData) =>
                                        e.target.checked
                                            ? [...prevData, e.target.value]
                                            : prevData.filter((item) => item !== e.target.value)
                                    );
                                }}
                            />
                            <label htmlFor="reading" className="ml-2 mr-4 leading-[35px]">
                                {service}
                            </label>
                        </li>
                    ))}
                </div>
            </ul>
        </section>
    );
};

export default Step3;
Step3.propTypes = false;
