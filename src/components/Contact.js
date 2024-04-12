import { useRecipients } from 'xmpl-react';
import { useEffect, useState } from 'react';
import 'react-phone-number-input/style.css';
import { useNavigate } from 'react-router-dom';
import data from '../assets/data.json';
import Step1 from './steps/Step1';
import Step2 from './steps/Step2';
import Step3 from './steps/Step3';
import CallToActions from './CallToActions';
import Tabs from './Tabs';
import ErrorComponent from './common/ErrorComponent';
import Step4 from './steps/Step4';
const _ = require('lodash');

export const Contact = () => {
    const { addRecipient } = useRecipients();
    const navigate = useNavigate();

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phone, setPhone] = useState('+61');
    const [email, setEmail] = useState('');
    const [optionalEmail, setOptionalEmail] = useState('');
    const [month, setMonth] = useState('');
    const [year, setYear] = useState('');
    const [nationality, setNationality] = useState('');
    const [residenceCountry, setResidenceCountry] = useState('');
    const [courses, setCourses] = useState([]);
    const [studyArea, setStudyArea] = useState('');
    const [additionalData, setAdditionalData] = useState([]);
    const [sendUpdates, setSendUpdates] = useState(false);
    const [sendEmail, setSendEmail] = useState(false);

    const [step, setStep] = useState(1);
    const [error, setError] = useState('');
    const [activeCourse, setActiveCourse] = useState({});
    const [field, setField] = useState('');
    const [studyLevel, setStudyLevel] = useState([]);

    const addData = async (e) => {
        e.preventDefault();
        const errorExists = testError();

        if (errorExists) return;
        let tempAdditionalData = additionalData.join(',');
        let tempCourses = courses.join(',');

        const res = await addRecipient({
            isAddReferFriend: false,
            adors: {
                firstName: firstName,
                lastName: lastName,
                phone: phone,
                email: email,
                optionalEmail: optionalEmail,
                month: month,
                year: year,
                nationality: nationality,
                residenceCountry: residenceCountry,
                courses: tempCourses,
                studyArea: studyArea,
                additionalData: tempAdditionalData,
                followup: true
            }
        });
        console.log(res);

        setError('');
        navigate(`/thankyou?rid=${res.recipientID}`);
        let elem = document.getElementById('scrollToHere');
        elem.scrollIntoView();
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
                if (
                    _.isEmpty(activeCourse?.vocational) &&
                    _.isEmpty(activeCourse?.masters) &&
                    _.isEmpty(activeCourse?.bachelor)
                ) {
                    return false;
                }
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
                    <h1 className="ml-4 text-[56px] font-condensed text-[#262626] leading-[64px] my-[60px]">
                        {step === 1
                            ? 'SELECT STUDY AREA AND LEVEL'
                            : step === 2
                              ? 'CHOOSE A COURSE'
                              : step === 3
                                ? 'ADD INFORMATION'
                                : 'PROVIDE YOUR DETAILS'}
                    </h1>
                </section>
                <Tabs step={step} />
                <section>
                    <ErrorComponent error={error} />

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
                            <Step4
                                residenceCountry={residenceCountry}
                                setResidenceCountry={setResidenceCountry}
                                nationality={nationality}
                                setNationality={setNationality}
                                month={month}
                                setMonth={setMonth}
                                year={year}
                                setYear={setYear}
                                firstName={firstName}
                                setFirstName={setFirstName}
                                lastName={lastName}
                                setLastName={setLastName}
                                email={email}
                                setEmail={setEmail}
                                phone={phone}
                                setPhone={setPhone}
                                optionalEmail={optionalEmail}
                                setOptionalEmail={setOptionalEmail}
                                sendEmail={sendEmail}
                                setSendEmail={setSendEmail}
                                sendUpdates={sendUpdates}
                                setSendUpdates={setSendUpdates}
                            />
                        )}
                    </form>
                    <CallToActions
                        testError={testError}
                        step={step}
                        setStep={setStep}
                        addData={addData}
                        setError={setError}
                    />
                </section>
            </div>
        </section>
    );
};
