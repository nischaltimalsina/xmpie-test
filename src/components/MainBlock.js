import { useEffect, useState } from 'react';
import data from '../assets/data.json';
import InfoComponent from './common/InfoComponent';

export const MainBlock = () => {
    const [step, setStep] = useState(1);
    // const [error, setError] = useState('');
    const [activeCourse, setActiveCourse] = useState({});
    const [formData, setFormData] = useState({
        studyArea: '',
        studyLevel: [],
        courses: [],
        additionalInformation: []
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        // if (!formData.studyArea) {
        //     setError('Please choose an study area.');
        // }
        // if (type === 'checkbox') {
        //     if (formData.studyLevel.length === 2) {
        //         setError('You can only choose upto 2 options');
        //     }
        // }
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

    useEffect(() => {
        let tempActiveCourse = data.studyArea.filter((d) => d.value === formData.studyArea);
        let courses = {};
        if (formData.studyLevel.includes('Vocational and further education courses')) {
            courses.vocational = [tempActiveCourse[0].vocational];
        }
        if (formData.studyLevel.includes('Masters, graduate courses and PhDs (postgraduate)')) {
            courses.masters = [tempActiveCourse[0].masters];
        }
        if (formData.studyLevel.includes('Bachelor and diploma courses (undergraduate)')) {
            courses.bachelor = [tempActiveCourse[0].bachelor];
        }
        setActiveCourse(courses);
    }, [formData.studyLevel]);

    console.log(activeCourse, formData.studyArea);
    return (
        <main className="container mx-auto mb-32">
            <section>
                <h1 className="text-[56px] font-condensed text-[#262626] leading-[64px] my-[60px]">
                    SELECT STUDY AREA AND LEVEL
                </h1>
            </section>
            <section id="scrollToHere" className="flex bg-white justify-around mb-1 py-16">
                {data.titles.map((title) => (
                    <span className="text-center text-lg font-semibold leading-7" key={title.value}>
                        {title.text}
                    </span>
                ))}
            </section>
            <section className="bg-white w-full  p-8 ">
                <form onSubmit={handleSubmit}>
                    {step === 1 && (
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
                                value={formData.studyArea}
                                onChange={handleChange}
                                className="w-full max-w-md text-xs box-border rounded-none h-12 px-[15px] border-[1px] border-[#ccc]  shadow-sm focus-visible:outline-0">
                                <option value="" className="text-xs">
                                    Select a Study Area
                                </option>
                                {data?.studyArea.map((study) => (
                                    <option
                                        key={study.value}
                                        value={study.value}
                                        className="text-xs">
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
                        </section>
                    )}
                    {step === 2 && (
                        <section>
                            <h2 className="text-[44px] leading-[52px] font-condensed my-[50px] text-[#262626] font-medium ">
                                WHAT COURSES ARE YOU INTERESTED IN?
                            </h2>
                            Choose up to 12 courses from the options below and we’ll add them to
                            your personalised brochure.
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
                            There are currently no Vocational and Further Education Courses
                            (International) relating to Business, Management and Finance.
                            <div className="my-4">
                                <label className="flex flex-row text-[#2b2b2b] font-semibold items-center text-lg leading-2xl mb-2">
                                    Masters, graduate courses and PhDs (postgraduate)
                                </label>
                                <div>
                                    {data.studyLevel.map((course) => (
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
                        </section>
                    )}
                    {step === 3 && (
                        <section>
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
                                                checked={formData.additionalInformation.includes(
                                                    about
                                                )}
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
                                                checked={formData.additionalInformation.includes(
                                                    english
                                                )}
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
                                                checked={formData.additionalInformation.includes(
                                                    service
                                                )}
                                                onChange={handleChange}
                                            />
                                            <label htmlFor="reading" className="ml-2 mr-4">
                                                {service}
                                            </label>
                                        </li>
                                    ))}
                                </div>
                            </ul>
                        </section>
                    )}
                    {step === 4 && (
                        <section className="mx-auto py-10 pb-20 bg-white">
                            <h2 className="pt-5 pb-8 text-5xl font-light font-condensed">
                                TELL US ABOUT YOURSELF
                            </h2>
                            <div className="flex flex-col gap-2 text-sm font-normal">
                                <label htmlFor="name" className="mb-3 text-xl font-semibold mt-7">
                                    Which country are you currently living in?
                                </label>
                                <select className="h-12 max-w-md px-4 border">
                                    <option value="" disabled selected>
                                        Select a Country
                                    </option>
                                </select>
                            </div>
                            <div className="flex flex-col gap-2 text-sm font-normal">
                                <label htmlFor="name" className="mb-3 text-xl font-semibold mt-7">
                                    What is your nationality?
                                </label>
                                <select className="h-12 max-w-md px-4 border">
                                    <option value="" disabled selected>
                                        Select a Country
                                    </option>
                                </select>
                            </div>
                            <div className="flex flex-col gap-2 text-sm font-normal">
                                <label htmlFor="name" className="mb-3 text-xl font-semibold mt-7">
                                    When do you plan to start your study?
                                </label>
                                <select className="h-12 max-w-md px-4 border">
                                    <option value="" disabled selected>
                                        Month
                                    </option>
                                </select>
                                <select className="h-12 max-w-md px-4 border">
                                    <option value="" disabled selected>
                                        Year
                                    </option>
                                </select>
                            </div>
                            <div className="flex flex-col text-sm font-normal gap-">
                                <label htmlFor="name" className="mb-3 text-xl font-semibold mt-7">
                                    Name
                                </label>
                                <input
                                    className="h-12 max-w-md px-4 border "
                                    placeholder="Given Name"
                                    type="text"
                                />
                                <input
                                    className="h-12 max-w-md px-4 border "
                                    placeholder="Family Name"
                                    type="text"
                                />
                            </div>
                            <div className="flex flex-col text-sm font-normal gap-">
                                <label htmlFor="name" className="mb-3 text-xl font-semibold mt-7">
                                    Contact Details
                                </label>
                                <input
                                    className="h-12 max-w-md px-4 border "
                                    placeholder="0412 345 678 (Optional)"
                                    type="text"
                                />
                                <input
                                    className="h-12 max-w-md px-4 border "
                                    placeholder="Email Address"
                                    type="text"
                                />
                            </div>
                            <div className="flex flex-col text-sm font-normal gap-">
                                <label htmlFor="name" className="mb-3 text-xl font-semibold mt-7">
                                    Share my personalised brochure with the following email address
                                </label>
                                <input
                                    className="h-12 max-w-md px-4 border "
                                    placeholder="Email Address (optional)"
                                    type="text"
                                />
                            </div>
                            <div className="flex flex-col text-sm font-normal gap-">
                                <span className="mb-3 text-xl font-semibold mt-7">
                                    Share my personalised brochure with the following email address
                                </span>
                                <div className="flex gap-4 pl-4">
                                    <label htmlFor="">Yes</label>
                                    <input
                                        className="border"
                                        placeholder="Email Address (optional)"
                                        type="checkbox"
                                    />
                                </div>
                            </div>
                            <hr className="mx-24 my-12 border-t border-gray-400" />
                            <div className="flex items-start gap-4 pl-4">
                                <input
                                    className="mt-2.5"
                                    placeholder="Email Address (optional)"
                                    type="checkbox"
                                />
                                <label htmlFor="" className="font-normal leading-9 tracking-wide">
                                    Please keep me informed of VU events, updates and information
                                    relevant to my enquiry.
                                </label>
                            </div>
                            <div className="font-normal leading-[1.5] space-y-4">
                                <h2 className="py-4 mt-4 text-xl font-medium">Privacy Policy</h2>
                                <p>
                                    Victoria University is committed to the responsible collection
                                    and handling of your personal information in accordance with all
                                    relevant legislation, including the Information Privacy Act 2000
                                    (Vic.) and the Health Records Act 2001 (Vic.). The personal
                                    information collected on this form will be used for the purposes
                                    of creating the e-Brochure about your study options at Victoria
                                    University and follow-up about this, including through
                                    authorised third parties engaged by Victoria University to
                                    respond to enquiries and advise about your study options. If you
                                    do not wish to receive further communications, please uncheck
                                    the checkbox at the end of the form.
                                </p>
                                <p>
                                    Your personal information may be disclosed to Commonwealth and
                                    State Agencies such as the Department of Education and Training,
                                    and the Department of Home Affairs pursuant to reporting
                                    obligations under applicable legislation. Your personal
                                    information will also be disclosed to your overseas student
                                    health care provider and, if you are under 18 years of age, to
                                    the carer appointed for you under the National Code made under
                                    the Education Services for Overseas Students Act 2000.
                                </p>
                                <p>
                                    You have a right to access personal information that Victoria
                                    University holds about you. Refer to our Privacy Policy for more
                                    information.
                                </p>
                            </div>
                        </section>
                    )}
                    {step === 5 && <></>}
                </form>
            </section>
            <section className="flex w-full justify-between mt-32 px-10">
                <div>
                    {step !== 1 && (
                        <button
                            className="text-[#261248] cursor-pointer font-condensed font-normal text-xl text-center uppercase border-0 px-12 py-5 min-w-32"
                            onClick={(e) => {
                                e.preventDefault();
                                setStep((prevStep) => Number(prevStep) - Number(1));
                                let elem = document.getElementById('scrollToHere');
                                elem.scrollIntoView();
                            }}>
                            Back
                        </button>
                    )}
                </div>
                <button
                    className="text-[#fff] cursor-pointer bg-[#21104b] font-condensed font-normal text-xl text-center uppercase border-0 px-12 py-5 min-w-32"
                    onClick={(e) => {
                        e.preventDefault();
                        if (step !== 5) {
                            setStep((prevStep) => Number(prevStep) + 1);
                            let elem = document.getElementById('scrollToHere');
                            elem.scrollIntoView();
                        } else {
                            handleSubmit();
                        }
                    }}>
                    {step !== 5 ? 'Next' : 'Submit'}
                </button>
            </section>
        </main>
    );
};
