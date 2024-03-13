import { useState } from 'react';
import data from '../assets/data.json';
import InfoComponent from './common/InfoComponent';
export const MainBlock = () => {
    const [formData, setFormData] = useState({
        studyArea: '',
        studyLevel: [],
        courses: [],
        additionalInformation: []
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        setFormData((prevData) => ({
            ...prevData,
            [name]:
                type === 'checkbox'
                    ? checked
                        ? [...prevData[name], value]
                        : prevData[name].filter((item) => item !== value)
                    : value
        }));
    };
    const handleSubmit = () => {};
    return (
        <main className="container mx-auto">
            <section>
                <h1 className="text-[56px] text-[#262626] leading-[64px] my-[60px]">
                    CHOOSE A COURSE
                </h1>
            </section>
            <section className="bg-white w-full  p-8 ">
                <h2 className="text-[44px] leading-[52px] font-condensed my-[50px] text-[#262626] font-medium ">
                    WHAT STUDY AREA AND LEVEL ARE YOU INTERESTED IN?
                </h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label className="flex flex-row text-[#2b2b2b] font-semibold items-center text-lg leading-2xl mb-2">
                            StudyArea
                            <InfoComponent text="Choose your study Area" />
                        </label>
                        <select
                            id="studyArea"
                            name="studyArea"
                            value={formData.studyArea}
                            onChange={handleChange}
                            className="w-full max-w-md text-xs box-border rounded-none h-12 px-[15px] border-[1px] border-[#ccc]  shadow-sm focus-visible:outline-0">
                            <option value="" className="text-xs">
                                Select a Study Area
                            </option>
                            {data?.studyArea.map((study) => (
                                <option key={study.value} value={study.value} className="text-xs">
                                    {study.text}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="my-4 max-w-md">
                        <label className="flex flex-row text-[#2b2b2b] font-semibold items-center text-lg leading-2xl mb-2">
                            Study Level
                            <InfoComponent text="Choose your study Area" />
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
                                        checked={formData.studyLevel.includes(level)}
                                        onChange={handleChange}
                                    />
                                    <label htmlFor="reading" className="ml-2 mr-4">
                                        {level}
                                    </label>
                                </div>
                            ))}
                        </div>
                    </div>
                    <h2 className="text-[44px] leading-[52px] font-condensed my-[50px] text-[#262626] font-medium ">
                        WHAT COURSES ARE YOU INTERESTED IN?
                    </h2>
                    Choose up to 12 courses from the options below and we’ll add them to your
                    personalised brochure.
                    <br />
                    We&apos;ll also include information on these topics, and more:
                    <ul className="list-disc ml-8">
                        {data.topics.map((topic) => (
                            <li key={topic}>{topic}</li>
                        ))}
                    </ul>
                    <h3 className="text-[28px] leading-[36px] font-condensed my-[25px] text-[#262626] font-medium ">
                        BUSINESS, MANAGEMENT AND FINANCE
                    </h3>
                    <h4 className="text-[20px] leading-[28px] font-condensed  text-[#262626] font-semibold ">
                        Vocational and further education
                    </h4>
                    There are currently no Vocational and Further Education Courses (International)
                    relating to Business, Management and Finance.
                    <div className="my-4">
                        <label className="flex flex-row text-[#2b2b2b] font-semibold items-center text-lg leading-2xl mb-2">
                            Masters, graduate courses and PhDs (postgraduate)
                        </label>
                        <div>
                            {data.mastersGraduatesAndPhds.map((course) => (
                                <div key={course}>
                                    <input
                                        type="checkbox"
                                        id={course}
                                        name="courses"
                                        value={course}
                                        checked={formData.courses.includes(course)}
                                        onChange={handleChange}
                                    />
                                    <label htmlFor="reading" className="ml-2 mr-4">
                                        {course}
                                    </label>
                                </div>
                            ))}
                        </div>
                    </div>
                    <h2 className="text-[44px] leading-[52px] font-condensed my-[50px] text-[#262626] font-medium ">
                        WHAT ADDITIONAL INFORMATION ARE YOU INTERESTED IN?
                    </h2>
                    We&apos;ll provide all of the core information about your course and the
                    University. Here you can add more information, should you need it.
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
                                        name="additionalInformation"
                                        value={about}
                                        checked={formData.additionalInformation.includes(about)}
                                        onChange={handleChange}
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
                                        name="additionalInformation"
                                        value={english}
                                        checked={formData.additionalInformation.includes(english)}
                                        onChange={handleChange}
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
                                        name="additionalInformation"
                                        value={service}
                                        checked={formData.additionalInformation.includes(service)}
                                        onChange={handleChange}
                                    />
                                    <label htmlFor="reading" className="ml-2 mr-4">
                                        {service}
                                    </label>
                                </li>
                            ))}
                        </div>
                    </ul>
                </form>
            </section>
            <section className=""></section>
        </main>
    );
};
