import { XmplContext, useAdors, useEvents, useTrigger } from 'xmpl-react';
import { useContext, useEffect, useState } from 'react';
import { getNames } from 'country-list';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';

import data from '../assets/data.json';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step5 from './Step5';
import CallToActions from './CallToActions';
import ProgressiveNumbers from './ProgressiveNumbers';

const months = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];
const years = ['2024', '2025', '2026', '2027', '2028', '2029'];
export const Contact = () => {
    const { xmp } = useContext(XmplContext);
    const { updateAdors } = useAdors();
    const countries = getNames();

    const [firstName, setFirstName] = useState(xmp.r['firstName']);
    const [lastName, setLastName] = useState(xmp.r['lastName']);
    const [email, setEmail] = useState(xmp.r['email']);
    const [phone, setPhone] = useState(xmp.r['phone']);
    const [optionalEmail, setOptionalEmail] = useState(xmp.r['optionalEmail']);
    const [month, setMonth] = useState(xmp.r['month']);
    const [year, setYear] = useState(xmp.r['year']);
    const [nationality, setNationality] = useState(xmp.r['nationality']);
    const [residenceCountry, setResidenceCountry] = useState(xmp.r['residenceCountry']);
    const [step, setStep] = useState(1);
    const [error, setError] = useState('');
    const [activeCourse, setActiveCourse] = useState({});
    const [courses, setCourses] = useState(xmp.r['activeCourse']?.split(',') || []);
    const [additionalData, setAdditionalData] = useState(xmp.r['additionalData']?.split(',') || []);
    const [link, setLink] = useState(xmp.r['XMPie.PDF.P3']);
    const [studyArea, setStudyArea] = useState(xmp.r['studyArea']);
    const [field, setField] = useState('');
    const [studyLevel, setStudyLevel] = useState([]);

    const { events } = useEvents();
    const { trigger } = useTrigger();
    const rid =
        new URLSearchParams(window.location.search).get('rid') ||
        localStorage.getItem('xmpRecipientID');

    useEffect(() => {
        setFirstName(xmp.r['firstName']);
        setLastName(xmp.r['lastName']);
        setEmail(xmp.r['email']);
        setOptionalEmail(xmp.r['optionalEmail']);
        setPhone(xmp.r['phone']);
        setMonth(xmp.r['month']);
        setYear(xmp.r['year']);
        setNationality(xmp.r['nationality']);
        setResidenceCountry(xmp.r['residenceCountry']);
        setActiveCourse(xmp.r['activeCourse']);
        setCourses(xmp.r['activeCourse']?.split(',') || []);
        setAdditionalData(xmp.r['additionalData']?.split(',') || []);
        setStudyArea(xmp.r['studyArea']);
        setLink(xmp.r['XMPie.PDF.P3']);
    }, [xmp]);

    const trackEvent = (e) => {
        const isAnchor = e.target.tagName === 'A';
        const options = {
            sync: isAnchor,
            recipientID: rid,
            PageName: 'Sample',
            ActionName: 'Send me more information',
            ActionParams: 'actionParameters',
            type: 'mousedown'
        };
        events(options);
    };
    const triggerEmail = async () => {
        try {
            trigger('E2');
        } catch (error) {
            console.log(error);
        }
    };
    const updateData = async (e) => {
        e.preventDefault();
        const errorExists = testError();

        if (errorExists) return;
        let tempAdditionalData = additionalData.join(',');
        let tempCourses = courses.join(',');
        const res = await updateAdors({
            firstName: firstName,
            lastName: lastName,
            email: email,
            phone: phone,
            optionalEmail: optionalEmail,
            followup: true,
            month: month,
            year: year,
            nationality: nationality,
            residenceCountry: residenceCountry,
            courses: tempCourses,
            studyArea: studyArea,
            additionalData: tempAdditionalData
        });
        if (res) {
            setError('');
            setStep(5);
            let elem = document.getElementById('scrollToHere');
            elem.scrollIntoView();
        }
        triggerEmail();
        trackEvent(e);
    };

    const testError = () => {
        if (step === 1) {
            if (!studyArea) {
                setError('Please chhose an study Area.');
                let elem = document.getElementById('scrollToHere');
                elem.scrollIntoView();
                return true;
            } else if (studyLevel.length === 0) {
                setError('Please chhose at least 1 study level.');
                let elem = document.getElementById('scrollToHere');
                elem.scrollIntoView();
                return true;
            }
        }
        if (step === 2) {
            if (courses.length === 0) {
                setError('Please chhose at least 1 course');
                let elem = document.getElementById('scrollToHere');
                elem.scrollIntoView();
                return true;
            }
        }
        if (step === 4) {
            if (!firstName || !lastName || !email || !year || !nationality || !residenceCountry) {
                setError('Please fill in all required values');
                let elem = document.getElementById('scrollToHere');
                elem.scrollIntoView();
                return true;
            }
        }
    };
    useEffect(() => {
        let tempActiveCourse = data.studyArea.filter((d) => d.value === studyArea);
        if (tempActiveCourse.length > 0) {
            let courses = {};
            if (studyLevel.includes('Vocational and further education courses')) {
                courses.vocational = [...tempActiveCourse[0].vocational];
            }
            if (studyLevel.includes('Masters, graduate courses and PhDs (postgraduate)')) {
                courses.masters = [...tempActiveCourse[0].masters];
            }
            if (studyLevel.includes('Bachelor and diploma courses (undergraduate)')) {
                courses.bachelor = [...tempActiveCourse[0].bachelor];
            }
            setActiveCourse(courses);
        }
    }, [studyLevel, studyArea]);

    return (
        <section id="contact" className="mb-32 container mx-auto">
            <div className="">
                <section>
                    <h1 className="text-[56px] font-condensed text-[#262626] leading-[64px] my-[60px]">
                        {step === 1
                            ? 'SELECT STUDY AREA AND LEVEL'
                            : step === 2
                              ? 'CHOOSE A COURSE'
                              : step === 3
                                ? 'ADD INFORMATION'
                                : step === 4
                                  ? 'PROVIDE YOUR DETAILS'
                                  : 'DOWNLOAD BROCHURE'}
                    </h1>
                </section>
                <section id="scrollToHere" className="flex  justify-around mb-2 ">
                    {data.titles.map((title, i) => (
                        <div
                            key={title.value}
                            className={`w-full font-semibold flex flex-col justify-center items-center py-16 ${step === title.value ? ' bg-[rgba(91,194,231,0.1)]' : 'bg-white'}`}>
                            <ProgressiveNumbers number={i + 1} status={i + 1 < step} />
                            <span
                                className={`text-center hidden lg:flex text-lg font-semibold leading-7 ${step === title.value ? 'text-green-500' : ''}`}>
                                {title.text}
                            </span>
                        </div>
                    ))}
                </section>
                <section>
                    <div className={` ${error ? 'pt-4' : ''} w-full  bg-white  `}>
                        {error && (
                            <div className=" border-red-600 border-[1px] p-4 mx-4 text-red-600  font-normal">
                                <p>Before you proceed:</p>
                                <ul className="ml-8 list-disc my-4">
                                    <li>{error}</li>
                                </ul>
                            </div>
                        )}
                    </div>
                    <form className="bg-white p-8">
                        {step === 1 && (
                            <Step1
                                error={error}
                                setError={setError}
                                studyArea={studyArea}
                                setStudyArea={setStudyArea}
                                setField={setField}
                                studyLevel={studyLevel}
                                setStudyLevel={setStudyLevel}
                            />
                        )}
                        {step === 2 && (
                            <Step2
                                error={error}
                                setError={setError}
                                field={field}
                                activeCourse={activeCourse}
                                courses={courses}
                                setCourses={setCourses}
                            />
                        )}
                        {step === 3 && (
                            <Step3
                                additionalData={additionalData}
                                setAdditionalData={setAdditionalData}
                            />
                        )}
                        {step === 4 && (
                            <section className="mx-auto py-10 pb-20 ">
                                <h2 className="pt-5 pb-8 text-5xl font-light font-condensed">
                                    TELL US ABOUT YOURSELF
                                </h2>
                                <div className="flex flex-col gap-2 text-sm font-normal">
                                    <label
                                        htmlFor="name"
                                        className="mb-3 text-xl font-semibold mt-7">
                                        Which country are you currently living in?
                                    </label>
                                    <div className="lg:mb-0 mb-2 lg:w-6/12 lg:mr-8 max-w-md  flex flex-row ">
                                        <select
                                            className="border h-12  px-4 w-full mr-1"
                                            name="residenceCountry"
                                            id="residenceCountry"
                                            value={residenceCountry || ''}
                                            onChange={(e) => {
                                                setResidenceCountry(e.target.value);
                                            }}>
                                            <option value="" defaultValue>
                                                Select a Country
                                            </option>
                                            {countries.map((country) => (
                                                <option key={country} value={country}>
                                                    {country}
                                                </option>
                                            ))}
                                        </select>
                                        <span className="text-red-600">*</span>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-2 text-sm font-normal">
                                    <label
                                        htmlFor="name"
                                        className="mb-3 text-xl font-semibold mt-7">
                                        What is your nationality?
                                    </label>
                                    <div className="lg:mb-0 mb-2 lg:w-6/12 lg:mr-8 max-w-md  flex flex-row ">
                                        <select
                                            className="border h-12  px-4 w-full mr-1"
                                            name="nationality"
                                            id="nationality"
                                            value={nationality || ''}
                                            onChange={(e) => {
                                                setNationality(e.target.value);
                                            }}>
                                            <option value="">Select a Country</option>
                                            {countries.map((country) => (
                                                <option key={country} value={country}>
                                                    {country}
                                                </option>
                                            ))}
                                        </select>
                                        <span className="text-red-600">*</span>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-2 text-sm font-normal">
                                    <label
                                        htmlFor="name"
                                        className="mb-3 text-xl font-semibold mt-7">
                                        When do you plan to start your study?
                                    </label>
                                    <div className="flex flex-col lg:flex-row w-full justify-start">
                                        <div className="lg:mb-0 mb-2 lg:w-6/12 lg:mr-8 max-w-md  flex flex-row ">
                                            <select
                                                className="border h-12  px-4 w-full mr-1"
                                                name="month"
                                                id="month"
                                                value={month || ''}
                                                onChange={(e) => {
                                                    setMonth(e.target.value);
                                                }}>
                                                <option value="" defaultValue>
                                                    Select a Month
                                                </option>
                                                {months.map((month) => (
                                                    <option key={month} value={month}>
                                                        {month}
                                                    </option>
                                                ))}
                                            </select>
                                            <span className="text-red-600 opacity-0">*</span>
                                        </div>
                                        <div className="lg:mb-0 lg:w-6/12  max-w-md flex flex-row">
                                            <select
                                                className="border h-12  px-4 w-full mr-1"
                                                name="year"
                                                id="year"
                                                value={year || ''}
                                                onChange={(e) => {
                                                    setYear(e.target.value);
                                                }}>
                                                <option value="" defaultValue>
                                                    Select a Year
                                                </option>
                                                {years.map((year) => (
                                                    <option key={year} value={year}>
                                                        {year}
                                                    </option>
                                                ))}
                                            </select>
                                            <span className="text-red-600">*</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col text-sm font-normal gap-">
                                    <label
                                        htmlFor="name"
                                        className="mb-3 text-xl font-semibold mt-7">
                                        Name
                                    </label>
                                    <div className="flex flex-col lg:flex-row w-full justify-start">
                                        <div className="lg:mb-0 mb-2 lg:w-6/12 lg:mr-8 max-w-md  flex flex-row ">
                                            <input
                                                className="border h-12  px-4 w-full mr-1"
                                                placeholder="Given Name"
                                                type="text"
                                                name="firstName"
                                                id="firstName"
                                                value={firstName || ''}
                                                onChange={(e) => {
                                                    setFirstName(e.target.value);
                                                }}
                                            />
                                            <span className="text-red-600">*</span>
                                        </div>
                                        <div className="lg:mb-0 lg:w-6/12  max-w-md flex flex-row">
                                            <input
                                                className="border h-12  px-4 w-full mr-1"
                                                placeholder="Family Name"
                                                type="text"
                                                name="lastName"
                                                id="lastName"
                                                value={lastName || ''}
                                                onChange={(e) => {
                                                    setLastName(e.target.value);
                                                }}
                                            />
                                            <span className="text-red-600">*</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col text-sm font-normal ">
                                    <label
                                        htmlFor="name"
                                        className="mb-3 text-xl font-semibold mt-7">
                                        Contact Details
                                    </label>
                                    <div className="flex flex-col lg:flex-row w-full justify-start">
                                        <div className="lg:mb-0 mb-2 lg:w-6/12 lg:mr-8 max-w-md  flex flex-row ">
                                            <PhoneInput
                                                className="border h-12  px-4 w-full mr-1 [&>input:focus-visible]:outline-transparent"
                                                type="text"
                                                name="phone"
                                                id="phone"
                                                placeholder="Enter phone number"
                                                value={phone || ''}
                                                onChange={setPhone}
                                            />
                                            <span className="text-red-600 opacity-0">*</span>
                                        </div>
                                        <div className="lg:mb-0 lg:w-6/12  max-w-md flex flex-row">
                                            <input
                                                className="border h-12  px-4 w-full mr-1"
                                                placeholder="Email Address"
                                                type="email"
                                                name="email"
                                                id="email"
                                                value={email || ''}
                                                onChange={(e) => {
                                                    setEmail(e.target.value);
                                                }}
                                            />
                                            <span className="text-red-600">*</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col text-sm font-normal gap-">
                                    <label
                                        htmlFor="name"
                                        className="mb-3 text-xl font-semibold mt-7">
                                        Share my personalised brochure with the following email
                                        address
                                    </label>
                                    <div className="lg:mb-0 mb-2 lg:w-6/12 lg:mr-8 max-w-md  flex flex-row ">
                                        <input
                                            className="border h-12  px-4 w-full mr-1"
                                            placeholder="Email Address (optional)"
                                            type="text"
                                            name="optionalEmail"
                                            id="optionalEmail"
                                            value={optionalEmail || ''}
                                            onChange={(e) => {
                                                setOptionalEmail(e.target.value);
                                            }}
                                        />
                                        <span className="text-red-600 opacity-0">*</span>
                                    </div>
                                </div>
                                <div className="flex flex-col text-sm font-normal gap-">
                                    <span className="mb-3 text-xl font-semibold mt-7">
                                        Share my personalised brochure with the following email
                                        address
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
                                    <label
                                        htmlFor=""
                                        className="font-normal leading-9 tracking-wide">
                                        Please keep me informed of VU events, updates and
                                        information relevant to my enquiry.
                                    </label>
                                </div>
                                <div className="font-normal leading-[1.5] space-y-4">
                                    <h2 className="py-4 mt-4 text-xl font-medium">
                                        Privacy Policy
                                    </h2>
                                    <p>
                                        Victoria University is committed to the responsible
                                        collection and handling of your personal information in
                                        accordance with all relevant legislation, including the
                                        Information Privacy Act 2000 (Vic.) and the Health Records
                                        Act 2001 (Vic.). The personal information collected on this
                                        form will be used for the purposes of creating the
                                        e-Brochure about your study options at Victoria University
                                        and follow-up about this, including through authorised third
                                        parties engaged by Victoria University to respond to
                                        enquiries and advise about your study options. If you do not
                                        wish to receive further communications, please uncheck the
                                        checkbox at the end of the form.
                                    </p>
                                    <p>
                                        Your personal information may be disclosed to Commonwealth
                                        and State Agencies such as the Department of Education and
                                        Training, and the Department of Home Affairs pursuant to
                                        reporting obligations under applicable legislation. Your
                                        personal information will also be disclosed to your overseas
                                        student health care provider and, if you are under 18 years
                                        of age, to the carer appointed for you under the National
                                        Code made under the Education Services for Overseas Students
                                        Act 2000.
                                    </p>
                                    <p>
                                        You have a right to access personal information that
                                        Victoria University holds about you. Refer to our Privacy
                                        Policy for more information.
                                    </p>
                                </div>
                            </section>
                        )}
                        {step === 5 && (
                            <Step5
                                firstName={firstName}
                                lastName={lastName}
                                email={email}
                                courses={courses}
                                additionalData={additionalData}
                                link={link}
                            />
                        )}
                    </form>
                    <CallToActions
                        testError={testError}
                        step={step}
                        setStep={setStep}
                        updateData={updateData}
                        setError={setError}
                    />
                </section>
            </div>
        </section>
    );
};
