import React from 'react';
import PhoneInput from 'react-phone-number-input';
import { getNames } from 'country-list';
import data from '../../assets/data.json';

const Step4 = ({
    residenceCountry,
    setResidenceCountry,
    nationality,
    setNationality,
    month,
    setMonth,
    year,
    setYear,
    firstName,
    setFirstName,
    lastName,
    setLastName,
    email,
    setEmail,
    phone,
    setPhone,
    optionalEmail,
    setOptionalEmail,
    sendEmail,
    setSendEmail,
    sendUpdates,
    setSendUpdates
}) => {
    const countries = getNames();

    return (
        <section className="mx-auto py-10 pb-20 ">
            <h2 className="pt-5 pb-8 text-5xl font-light font-condensed">TELL US ABOUT YOURSELF</h2>
            <div className="flex flex-col gap-2 text-sm font-normal">
                <label htmlFor="name" className="mb-3 text-xl font-semibold mt-7">
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
                <label htmlFor="name" className="mb-3 text-xl font-semibold mt-7">
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
                <label htmlFor="name" className="mb-3 text-xl font-semibold mt-7">
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
                            {data.months.map((month) => (
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
                            {data.years.map((year) => (
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
                <label htmlFor="name" className="mb-3 text-xl font-semibold mt-7">
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
                <label htmlFor="name" className="mb-3 text-xl font-semibold mt-7">
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
                <label htmlFor="name" className="mb-3 text-xl font-semibold mt-7">
                    Share my personalised brochure with the following email address
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
                    Print your name on this brochure?
                </span>
                <div className="flex gap-4 pl-4">
                    <label htmlFor="">Yes</label>
                    <input
                        className="border"
                        placeholder="Email Address (optional)"
                        name="sendEmail"
                        id="sendEmail"
                        value={sendUpdates}
                        onChange={() => setSendEmail(!sendEmail)}
                        type="checkbox"
                    />
                </div>
            </div>
            <hr className="mx-24 my-12 border-t border-gray-400" />
            <div className="flex items-start gap-4 pl-4">
                <input
                    className="mt-2.5"
                    type="checkbox"
                    name="sendUpdates"
                    id="sendUpdates"
                    value={sendUpdates}
                    onChange={() => setSendUpdates(!sendUpdates)}
                />
                <label htmlFor="" className="font-normal leading-9 tracking-wide">
                    Please keep me informed of VU events, updates and information relevant to my
                    enquiry.
                </label>
            </div>
            <div className="font-normal leading-[1.5] space-y-4">
                <h2 className="py-4 mt-4 text-xl font-medium">Privacy Policy</h2>
                <p>
                    Victoria University is committed to the responsible collection and handling of
                    your personal information in accordance with all relevant legislation, including
                    the Information Privacy Act 2000 (Vic.) and the Health Records Act 2001 (Vic.).
                    The personal information collected on this form will be used for the purposes of
                    creating the e-Brochure about your study options at Victoria University and
                    follow-up about this, including through authorised third parties engaged by
                    Victoria University to respond to enquiries and advise about your study options.
                    If you do not wish to receive further communications, please uncheck the
                    checkbox at the end of the form.
                </p>
                <p>
                    Your personal information may be disclosed to Commonwealth and State Agencies
                    such as the Department of Education and Training, and the Department of Home
                    Affairs pursuant to reporting obligations under applicable legislation. Your
                    personal information will also be disclosed to your overseas student health care
                    provider and, if you are under 18 years of age, to the carer appointed for you
                    under the National Code made under the Education Services for Overseas Students
                    Act 2000.
                </p>
                <p>
                    You have a right to access personal information that Victoria University holds
                    about you. Refer to our Privacy Policy for more information.
                </p>
            </div>
        </section>
    );
};

export default Step4;

Step4.propTypes = false;
