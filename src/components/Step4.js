import React from 'react';

const Step4 = () => {
    return (
        <div className="px-8 py-10 pb-20 bg-white">
            <h2 className="pt-5 pb-8 text-5xl font-light font-condensed">TELL US ABOUT YOURSELF</h2>
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
                <input className="mt-2.5" placeholder="Email Address (optional)" type="checkbox" />
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
        </div>
    );
};

export default Step4;
