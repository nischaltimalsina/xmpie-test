import {
    // XmplContext, useAdors,
    // useEvents,
    useTrigger,
    useRecipients
} from 'xmpl-react';
import {
    // useContext,
    useEffect,
    useState
} from 'react';
import 'react-phone-number-input/style.css';
// import { useNavigate } from 'react-router-dom';
import data from '../assets/data.json';
import Step1 from './steps/Step1';
import Step2 from './steps/Step2';
import Step3 from './steps/Step3';
import Step5 from './steps/Step5';
import CallToActions from './CallToActions';
import Tabs from './Tabs';
import ErrorComponent from './common/ErrorComponent';
import Step4 from './steps/Step4';

export const Contact = () => {
    // const { xmp } = useContext(XmplContext);
    // const { updateAdors } = useAdors();
    const { addRecipient } = useRecipients();
    // const { navigate } = useNavigate();
    // const [firstName, setFirstName] = useState(xmp.r['firstName']);
    // const [lastName, setLastName] = useState(xmp.r['lastName']);
    // const [phone, setPhone] = useState(xmp.r['phone']);
    // const [email, setEmail] = useState(xmp.r['email']);
    // const [optionalEmail, setOptionalEmail] = useState(xmp.r['optionalEmail']);
    // const [month, setMonth] = useState(xmp.r['month']);
    // const [year, setYear] = useState(xmp.r['year']);
    // const [nationality, setNationality] = useState(xmp.r['nationality']);
    // const [residenceCountry, setResidenceCountry] = useState(xmp.r['residenceCountry']);
    // const [courses, setCourses] = useState(xmp.r['courses']?.split(',') || []);
    // const [studyArea, setStudyArea] = useState(xmp.r['studyArea']);
    // const [additionalData, setAdditionalData] = useState(xmp.r['additionalData']?.split(',') || []);
    // const [link, setLink] = useState(xmp.r['XMPie.PDF.P3']);

    // const [step, setStep] = useState(1);
    // const [error, setError] = useState('');
    // const [activeCourse, setActiveCourse] = useState({});
    // const [field, setField] = useState('');
    // const [studyLevel, setStudyLevel] = useState([]);
    // const [sendUpdates, setSendUpdates] = useState(false);
    // const [sendEmail, setSendEmail] = useState(false);

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [optionalEmail, setOptionalEmail] = useState('');
    const [month, setMonth] = useState('');
    const [year, setYear] = useState('');
    const [nationality, setNationality] = useState('');
    const [residenceCountry, setResidenceCountry] = useState('');
    const [courses, setCourses] = useState([]);
    const [studyArea, setStudyArea] = useState('');
    const [additionalData, setAdditionalData] = useState([]);
    const [link] = useState('');
    const [sendUpdates, setSendUpdates] = useState(false);
    const [sendEmail, setSendEmail] = useState(false);

    const [step, setStep] = useState(1);
    const [error, setError] = useState('');
    const [activeCourse, setActiveCourse] = useState({});
    const [field, setField] = useState('');
    const [studyLevel, setStudyLevel] = useState([]);

    // const { events } = useEvents();
    const { trigger } = useTrigger();
    // const rid =
    //     new URLSearchParams(window.location.search).get('rid') ||
    //     localStorage.getItem('xmpRecipientID');

    // useEffect(() => {
    //     setFirstName(xmp.r['firstName']);
    //     setLastName(xmp.r['lastName']);
    //     setEmail(xmp.r['email']);
    //     setOptionalEmail(xmp.r['optionalEmail']);
    //     setPhone(xmp.r['phone']);
    //     setMonth(xmp.r['month']);
    //     setYear(xmp.r['year']);
    //     setNationality(xmp.r['nationality']);
    //     setResidenceCountry(xmp.r['residenceCountry']);
    //     setActiveCourse(xmp.r['activeCourse']);
    //     setCourses(xmp.r['courses']?.split(',') || []);
    //     setAdditionalData(xmp.r['additionalData']?.split(',') || []);
    //     setStudyArea(xmp.r['studyArea']);
    //     setLink(xmp.r['XMPie.PDF.P3']);
    // }, [xmp]);

    // const trackEvent = (e) => {
    //     const isAnchor = e.target.tagName === 'A';
    //     const options = {
    //         sync: isAnchor,
    //         recipientID: rid,
    //         PageName: 'Sample',
    //         ActionName: 'Send me more information',
    //         ActionParams: 'actionParameters',
    //         type: 'mousedown'
    //     };
    //     events(options);
    // };
    const triggerEmail = async () => {
        try {
            trigger('E2');
        } catch (error) {
            console.log(error);
        }
    };

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

        if (res) {
            setError('');
            window.location.href = `https://xmpie-test.vercel.app/?rid=${res.recipientID}`;
            // navigate(`https://xmpie-test.vercel.app/?rid=${res.recipientID}`);
            setStep(5);
            let elem = document.getElementById('scrollToHere');
            elem.scrollIntoView();
        }
        triggerEmail();
    };
    // const updateData = async (e) => {
    //     e.preventDefault();
    //     const errorExists = testError();

    //     if (errorExists) return;
    //     let tempAdditionalData = additionalData.join(',');
    //     let tempCourses = courses.join(',');

    //     const res = await updateAdors({
    //         firstName: firstName,
    //         lastName: lastName,
    //         phone: phone,
    //         email: email,
    //         optionalEmail: optionalEmail,
    //         month: month,
    //         year: year,
    //         nationality: nationality,
    //         residenceCountry: residenceCountry,
    //         courses: tempCourses,
    //         studyArea: studyArea,
    //         additionalData: tempAdditionalData,
    //         followup: true
    //     });
    //     if (res) {
    //         setError('');
    //         setStep(5);
    //         let elem = document.getElementById('scrollToHere');
    //         elem.scrollIntoView();
    //     }
    //     triggerEmail();
    //     trackEvent(e);
    // };

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
        const rid = new URLSearchParams(window.location.search).get('rid');
        if (rid) {
            setStep(5);
            getAdorValues({
                rid,
                isLogin: true,
                adors: [
                    'firstName',
                    'lastName',
                    'email',
                    'courses',
                    'studyArea',
                    'additionalData',
                    'XMPie.PDF.P3'
                ],
                resolved: ['photo1', 'photo2', 'photo3', 'photo4'],
                async: false,
                isCached: true,
                noCache: false
            });
        }
        setFirstName(xmp.r['firstName']);
        setLastName(xmp.r['lastName']);
        setEmail(xmp.r['email']);
        setCourses(xmp.r['courses']?.split(',') || []);
        setAdditionalData(xmp.r['additionalData']?.split(',') || []);
        setLink(xmp.r['XMPie.PDF.P3']);
        setStudyArea(xmp.r['studyArea']);
    }, []);

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
                                : step === 4
                                  ? 'PROVIDE YOUR DETAILS'
                                  : 'DOWNLOAD BROCHURE'}
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
                        addData={addData}
                        setError={setError}
                    />
                </section>
            </div>
        </section>
    );
};
