import React from 'react';
import data from '../assets/data.json';

const Step3 = ({ additionalData, setAdditionalData }) => {
    return (
        <section>
            <h2 className="text-[44px] leading-[52px] font-condensed my-[50px] text-[#262626] font-medium ">
                WHAT ADDITIONAL INFORMATION ARE YOU INTERESTED IN?
            </h2>
            We&apos;ll provide all of the core information about your course and the University.
            Here you can add more information, should you need it.
            <h3 className="text-[28px] leading-[36px] font-condensed my-[25px] text-[#262626] font-medium ">
                ALREADY IN YOUR PERSONALISED BROCHURE:
            </h3>
            <ul className="list-disc ml-8">
                {data.alreadyInBrochure.map((topic) => (
                    <li key={topic}>{topic}</li>
                ))}
            </ul>
            <h3 className="text-[28px] leading-[36px] font-condensed my-[25px] text-[#262626] font-medium ">
                CHOOSE TO ADD INFORMATION ON THE FOLLOWING:
            </h3>
            <ul className="flex flex-col md:flex-row justify-between">
                <div>
                    <h4 className="text-[20px] leading-[28px] font-condensed  text-[#262626] font-semibold ">
                        About Melbourne
                    </h4>
                    {data.aboutMelbourne.map((about) => (
                        <li key={about}>
                            <input
                                type="checkbox"
                                id={about}
                                name="additionalData"
                                value={about}
                                checked={additionalData.includes(about)}
                                onChange={(e) => {
                                    setAdditionalData((prevData) =>
                                        e.target.checked
                                            ? [...prevData, e.target.value]
                                            : prevData.filter((item) => item !== e.target.value)
                                    );
                                }}
                            />
                            <label htmlFor="reading" className="ml-2 mr-4">
                                {about}
                            </label>
                        </li>
                    ))}
                </div>
                <div>
                    <h4 className="text-[20px] leading-[28px] font-condensed  text-[#262626] font-semibold ">
                        English Language Support
                    </h4>
                    {data.englishLanguageSupport.map((english) => (
                        <li key={english}>
                            <input
                                type="checkbox"
                                id={english}
                                name="additionalData"
                                value={english}
                                checked={additionalData.includes(english)}
                                onChange={(e) => {
                                    setAdditionalData((prevData) =>
                                        e.target.checked
                                            ? [...prevData, e.target.value]
                                            : prevData.filter((item) => item !== e.target.value)
                                    );
                                }}
                            />
                            <label htmlFor="reading" className="ml-2 mr-4">
                                {english}
                            </label>
                        </li>
                    ))}
                </div>
                <div>
                    <h4 className="text-[20px] leading-[28px] font-condensed  text-[#262626] font-semibold ">
                        University Services
                    </h4>
                    {data.universityServices.map((service) => (
                        <li key={service}>
                            <input
                                type="checkbox"
                                id={service}
                                name="additionalData"
                                value={service}
                                checked={additionalData.includes(service)}
                                onChange={(e) => {
                                    setAdditionalData((prevData) =>
                                        e.target.checked
                                            ? [...prevData, e.target.value]
                                            : prevData.filter((item) => item !== e.target.value)
                                    );
                                }}
                            />
                            <label htmlFor="reading" className="ml-2 mr-4">
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
