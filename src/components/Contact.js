import { XmplContext, useAdors, useEvents, useTrigger } from 'xmpl-react';
import { useContext, useEffect, useState } from 'react';

export const Contact = () => {
    const { xmp } = useContext(XmplContext);
    const [showThanks, setShowThanks] = useState(false);
    const [showForm, setShowForm] = useState(true);
    const { updateAdors } = useAdors();
    const [firstName, setFirstName] = useState(xmp.r['firstname']);
    const [lastName, setLastName] = useState(xmp.r['lastname']);
    const [email, setEmail] = useState(xmp.r['email']);
    const { events } = useEvents();
    const { trigger } = useTrigger();
    const rid =
        new URLSearchParams(window.location.search).get('rid') ||
        localStorage.getItem('xmpRecipientID');

    useEffect(() => {
        setFirstName(xmp.r['firstname']);
        setLastName(xmp.r['lastname']);
        setEmail(xmp.r['email']);
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
            followup: true
        });
        if (res) {
            setShowThanks(true);
            setShowForm(false);
        }
        triggerEmail();
        trackEvent(e);
    };

    return (
        <section id="contact">
            <div className="inner">
                <section>
                    <div id="formDiv" style={{ display: `${showForm ? 'block' : 'none'}` }}>
                        <h2>Interested? Like more information?</h2>
                        <p>Confirm your contact details below:</p>
                        <form>
                            {/* <div className="fields">
                                <div className="field half">
                                    <label htmlFor="firstname">First Name</label>
                                    <input
                                        type="text"
                                        name="firstname"
                                        id="firstname"
                                        value={firstName || ''}
                                        onChange={(e) => {
                                            setFirstName(e.target.value);
                                        }}
                                    />
                                </div>
                                <div className="field half">
                                    <label htmlFor="lastname">Last Name</label>
                                    <input
                                        type="text"
                                        name="lastname"
                                        id="lastname"
                                        value={lastName || ''}
                                        onChange={(e) => {
                                            setLastName(e.target.value);
                                        }}
                                    />
                                </div>
                                <div className="field">
                                    <label htmlFor="email">Email</label>
                                    <input
                                        type="text"
                                        name="email"
                                        id="email"
                                        value={email || ''}
                                        onChange={(e) => {
                                            setEmail(e.target.value);
                                        }}
                                    />
                                </div>
                                <input type="hidden" id="followup" name="followup" />
                            </div> */}
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
                                    <select className="h-12 max-w-md px-4 border">
                                        <option value="" disabled defaultValue>
                                            Select a Country
                                        </option>
                                    </select>
                                </div>
                                <div className="flex flex-col gap-2 text-sm font-normal">
                                    <label
                                        htmlFor="name"
                                        className="mb-3 text-xl font-semibold mt-7">
                                        What is your nationality?
                                    </label>
                                    <select className="h-12 max-w-md px-4 border">
                                        <option value="" disabled defaultValue>
                                            Select a Country
                                        </option>
                                    </select>
                                </div>
                                <div className="flex flex-col gap-2 text-sm font-normal">
                                    <label
                                        htmlFor="name"
                                        className="mb-3 text-xl font-semibold mt-7">
                                        When do you plan to start your study?
                                    </label>
                                    <select className="h-12 max-w-md px-4 border">
                                        <option value="" disabled defaultValue>
                                            Month
                                        </option>
                                    </select>
                                    <select className="h-12 max-w-md px-4 border">
                                        <option value="" disabled defaultValue>
                                            Year
                                        </option>
                                    </select>
                                </div>
                                <div className="flex flex-col text-sm font-normal gap-">
                                    <label
                                        htmlFor="name"
                                        className="mb-3 text-xl font-semibold mt-7">
                                        Name
                                    </label>
                                    <input
                                        className="h-12 max-w-md px-4 border "
                                        placeholder="Given Name"
                                        type="text"
                                        name="firstName"
                                        value={firstName || ''}
                                        onChange={(e) => {
                                            setFirstName(e.target.value);
                                        }}
                                    />
                                    <input
                                        className="h-12 max-w-md px-4 border "
                                        placeholder="Family Name"
                                        type="text"
                                        name="lastName"
                                        value={lastName || ''}
                                        onChange={(e) => {
                                            setLastName(e.target.value);
                                        }}
                                    />
                                </div>
                                <div className="flex flex-col text-sm font-normal gap-">
                                    <label
                                        htmlFor="name"
                                        className="mb-3 text-xl font-semibold mt-7">
                                        Contact Details
                                    </label>
                                    {/* <input
                                        className="h-12 max-w-md px-4 border "
                                        placeholder="0412 345 678 (Optional)"
                                        type="text"
                                        name="phone"
                                        name="phone"
                                        id="phone"
                                        value={phone || ''}
                                        onChange={(e) => {
                                            setPhone(e.target.value);
                                        }}
                                    /> */}
                                    <input
                                        className="h-12 max-w-md px-4 border "
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
                                <div className="flex flex-col text-sm font-normal gap-">
                                    <label
                                        htmlFor="name"
                                        className="mb-3 text-xl font-semibold mt-7">
                                        Share my personalised brochure with the following email
                                        address
                                    </label>
                                    {/* <input
                                        className="h-12 max-w-md px-4 border "
                                        placeholder="Email Address (optional)"
                                        type="text"
                                        name="optionalemail"
                                        value={formData.optionalemail}
                                        onChange={handleChange}
                                    /> */}
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
                            <ul className="actions">
                                <li>
                                    <input
                                        type="submit"
                                        value="Send me more information"
                                        className="primary"
                                        onClick={updateData}
                                    />
                                </li>
                            </ul>
                        </form>
                    </div>
                    <div id="thanksDiv" style={{ display: `${showThanks ? 'block' : 'none'}` }}>
                        <h4>Thanks! </h4>
                        <p>{`We have received your request for more information
                            and one of our ${xmp.r['preference']} specialists
                            will be in contact as soon as possible.`}</p>
                    </div>
                </section>
                <section className="split">
                    <section>
                        <div className="contact-method">
                            <span className="icon solid alt fa-envelope"></span>
                            <h3>Email</h3>
                            <a href="mailto:information@untitled.tld"> information@untitled.tld </a>
                        </div>
                    </section>
                    <section>
                        <div className="contact-method">
                            <span className="icon solid alt fa-phone"></span>
                            <h3>Phone</h3>
                            <span>(000) 000-0000 x12387</span>
                        </div>
                    </section>
                    <section>
                        <div className="contact-method">
                            <span className="icon solid alt fa-home"></span>
                            <h3>Address</h3>
                            <span>
                                1234 Somewhere Road #5432
                                <br />
                                Nashville, TN 00000
                                <br />
                                United States of America
                            </span>
                        </div>
                    </section>
                </section>
            </div>
        </section>
    );
};
