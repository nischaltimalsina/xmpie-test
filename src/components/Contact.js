import { XmplContext, useAdors, useEvents, useTrigger } from 'xmpl-react';
import { useContext, useEffect, useState } from 'react';
import data from '../assets/data.json';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step5 from './Step5';
import CallToActions from './CallToActions';

const countries = ['Nepal', 'India', 'Maldives', 'Australia', 'Srilanka'];
const months = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];
const years = ['2024', '2025', '2026', '2027', '2028', '2029'];
export const Contact = () => {
    const { xmp } = useContext(XmplContext);
    const { updateAdors } = useAdors();
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

    const [activeCourse, setActiveCourse] = useState({});
    const [courses, setCourses] = useState(xmp.r['activeCourse']?.split(',') || []);
    const [additionalData, setAdditionalData] = useState(xmp.r['additionalData']?.split(',') || []);
    const [link, setLink] = useState(xmp.r['XMPie.PDF.P3']);
    const [studyArea, setStudyArea] = useState(xmp.r['studyArea']);
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
        const res = await updateAdors({
            firstName: firstName,
            lastName: lastName,
            email: email,
            phone: phone,
            optionalEmail: optionalEmail,
            followup: true,
            month,
            year,
            nationality,
            residenceCountry,
            courses: courses.join(','),
            studyArea,
            additionalData: additionalData.join(',')
        });
        if (res) {
            setStep(5);
        }
        triggerEmail();
        trackEvent(e);
    };
    useEffect(() => {
        let tempActiveCourse = data.studyArea.filter((d) => d.value === studyArea);
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
    }, [studyLevel]);

    console.log(link);
    return (
        <section id="contact" className="mb-32 container mx-auto">
            <div className="">
                <section>
                    <h1 className="text-[56px] font-condensed text-[#262626] leading-[64px] my-[60px]">
                        SELECT STUDY AREA AND LEVEL
                    </h1>
                </section>
                <section id="scrollToHere" className="flex bg-white justify-around mb-1 py-16">
                    {data.titles.map((title) => (
                        <span
                            className={`text-center text-lg font-semibold leading-7 ${step === title.value ? 'text-green-500' : ''}`}
                            key={title.value}>
                            {title.text}
                        </span>
                    ))}
                </section>
                <section className="bg-white w-full  p-8 ">
                    <form className="">
                        {step === 1 && (
                            <Step1
                                studyArea={studyArea}
                                setStudyArea={setStudyArea}
                                studyLevel={studyLevel}
                                setStudyLevel={setStudyLevel}
                            />
                        )}
                        {step === 2 && (
                            <Step2
                                studyArea={studyArea}
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
                                    <select
                                        className="h-12 max-w-md px-4 border"
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
                                </div>
                                <div className="flex flex-col gap-2 text-sm font-normal">
                                    <label
                                        htmlFor="name"
                                        className="mb-3 text-xl font-semibold mt-7">
                                        What is your nationality?
                                    </label>
                                    <select
                                        className="h-12 max-w-md px-4 border"
                                        name="nationality"
                                        id="nationality"
                                        value={nationality || ''}
                                        onChange={(e) => {
                                            setNationality(e.target.value);
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
                                </div>
                                <div className="flex flex-col gap-2 text-sm font-normal">
                                    <label
                                        htmlFor="name"
                                        className="mb-3 text-xl font-semibold mt-7">
                                        When do you plan to start your study?
                                    </label>
                                    <div className="flex flex-col lg:flex-row w-full justify-start">
                                        <select
                                            className="h-12 mb-2 lg:mb-0 lg:w-6/12 max-w-md px-4 lg:mr-12 border"
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
                                        <select
                                            className="h-12 px-4  lg:w-6/12 max-w-md border"
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
                                    </div>
                                </div>
                                <div className="flex flex-col text-sm font-normal gap-">
                                    <label
                                        htmlFor="name"
                                        className="mb-3 text-xl font-semibold mt-7">
                                        Name
                                    </label>
                                    <div className="flex flex-col lg:flex-row w-full justify-start">
                                        <input
                                            className="lg:mb-0 mb-2 lg:w-6/12 lg:mr-12 h-12 max-w-md px-4 border "
                                            placeholder="Given Name"
                                            type="text"
                                            name="firstName"
                                            id="firstName"
                                            value={firstName || ''}
                                            onChange={(e) => {
                                                setFirstName(e.target.value);
                                            }}
                                        />
                                        <input
                                            className="lg:mb-0 lg:w-6/12  h-12 max-w-md px-4 border "
                                            placeholder="Family Name"
                                            type="text"
                                            name="lastName"
                                            id="lastName"
                                            value={lastName || ''}
                                            onChange={(e) => {
                                                setLastName(e.target.value);
                                            }}
                                        />
                                    </div>
                                </div>
                                <div className="flex flex-col text-sm font-normal gap-">
                                    <label
                                        htmlFor="name"
                                        className="mb-3 text-xl font-semibold mt-7">
                                        Contact Details
                                    </label>
                                    <div className="flex flex-col lg:flex-row w-full justify-start">
                                        <input
                                            className="h-12 mb-2 lg:mb-0 lg:w-6/12 max-w-md px-4 lg:mr-12 border"
                                            placeholder="0412 345 678 (Optional)"
                                            type="text"
                                            name="phone"
                                            id="phone"
                                            value={phone || ''}
                                            onChange={(e) => {
                                                setPhone(e.target.value);
                                            }}
                                        />
                                        <input
                                            className="lg:mb-0 lg:w-6/12  h-12 max-w-md px-4 border  "
                                            placeholder="Email Address"
                                            type="text"
                                            name="email"
                                            id="email"
                                            value={email || ''}
                                            onChange={(e) => {
                                                setEmail(e.target.value);
                                            }}
                                        />
                                    </div>
                                </div>
                                <div className="flex flex-col text-sm font-normal gap-">
                                    <label
                                        htmlFor="name"
                                        className="mb-3 text-xl font-semibold mt-7">
                                        Share my personalised brochure with the following email
                                        address
                                    </label>
                                    <input
                                        className="h-12 max-w-md px-4 border "
                                        placeholder="Email Address (optional)"
                                        type="text"
                                        name="optionalEmail"
                                        id="optionalEmail"
                                        value={optionalEmail || ''}
                                        onChange={(e) => {
                                            setOptionalEmail(e.target.value);
                                        }}
                                    />
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
                    <CallToActions step={step} setStep={setStep} updateData={updateData} />
                </section>
            </div>
        </section>
    );
};
