export const Footer = () => {
    return (
        <footer id="footer">
            <div className="border-t  border-[#dee2e6] bg-gray-50 md:p-4 text-[#262626] vu-footer-useful-links-wrapper">
                <div className=" container mx-auto px-0">
                    <div className="grid grid-cols-3 mx-32 md:mx-0  md:w-full">
                        <div className="col-span-3 md:col-span-1 px-4 py-6 border-b md:border-none">
                            <div className="vu-pane">
                                <div className="vu-pane-icon">
                                    <i className="fas fa-envelope"></i>
                                </div>
                                <div className=" flex flex-col items-center md:items-start ">
                                    <h4 className="text-xl font-condensed uppercase mb-4 mt-12 md:mt-0 font-semibold">
                                        Application Enquiries
                                    </h4>
                                    <a
                                        href="https://gotovu.custhelp.com/app/ask"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="text-sky-600 font-condensed text-xl underline uppercase font-light">
                                        Complete an Enquiry
                                    </a>
                                    <div className="text-base mt-4 text-center md:text-start">
                                        It takes about 2 minutes, but you&apos;ll need a GoToVU
                                        login.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-3 md:col-span-1  px-4 py-6 border-b md:border-none">
                            <div className="vu-pane">
                                <div className="vu-pane-icon">
                                    <i className="fas fa-phone"></i>
                                </div>
                                <div className="flex flex-col items-center md:items-start">
                                    <h4 className="text-xl font-condensed uppercase mb-4 font-semibold">
                                        General Contacts
                                    </h4>
                                    <a
                                        href="tel:+61399191164"
                                        className="text-sky-600 font-condensed text-xl underline uppercase font-light">
                                        +61 3 9919 1164
                                    </a>
                                    <div className="text-base mt-4 text-center md:text-start">
                                        Monday to Friday, 9:00am to 5:00pm (AEST)
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-3 md:col-span-1 px-4 py-6 border-b md:border-none">
                            <div className="vu-pane">
                                <div className="vu-pane-icon">
                                    <i className="fas fa-question"></i>
                                </div>
                                <div className="flex flex-col items-center md:items-start">
                                    <h4 className="text-xl font-condensed uppercase mb-4 font-semibold">
                                        VU FAQ
                                    </h4>
                                    <a
                                        href="https://gotovu.custhelp.com/app/home"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="text-sky-600 font-condensed text-xl underline uppercase font-light">
                                        ASK VU
                                    </a>
                                    <div className="text-base mt-4">Frequently asked questions</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="p-4  bg-black text-white text-center vu-footer-legal-wrapper">
                <div className="container mx-auto">
                    <div className="flex ">
                        <div className="h-6 w-9 mr-4 flex justify-center relative items-center border-white border-[1px] bg-gradient-to-b from-black via-black to-red-600">
                            <div className="rounded-full bg-[#f7ea48] w-3 h-3 z-10"></div>
                            <div className=" bg-red-500 w-full h-1/2 absolute bottom-0"></div>
                        </div>
                        <div className="font-semibold text-start">Acknowledgement of Country</div>
                    </div>
                    <div className="py-5 border-b-[1px] text-start border-stone-400">
                        Victoria University acknowledges, recognises and respects the Ancestors,
                        Elders and families of the Boonwurrung, Waddawurrung and Wurundjeri of the
                        Kulin who are the traditional owners of University land in Victoria, and the
                        Gadigal and Guring-gai of the Eora Nation who are the traditional owners of
                        University land in Sydney, learn more.
                    </div>
                    <div className="w-full mx-auto">
                        <div className="flex flex-wrap justify-center text-stone-400 text-sm">
                            <a className="px-4 py-2" href="https://www.vu.edu.au/privacy">
                                Privacy
                            </a>
                            <a className="px-4 py-2" href="https://www.vu.edu.au/legal">
                                Legal
                            </a>
                            <a className="px-4 py-2" href="https://www.vu.edu.au/copyright-notice">
                                Copyright notice
                            </a>
                            <a
                                className="px-4 py-2"
                                href="https://www.vu.edu.au/about-vu/administration-governance/careers-at-vu">
                                Careers
                            </a>
                            <a
                                className="px-4 py-2"
                                href="https://www.vu.edu.au/about-vu/administration-governance/provider-registration">
                                Provider registration
                            </a>
                            <a
                                className="px-4 py-2"
                                href="https://www.vu.edu.au/about-vu/accessibility-of-our-website">
                                Accessibility information
                            </a>
                            <a
                                className="px-4 py-2"
                                href="https://www.vu.edu.au/contact-us/feedback-complaints">
                                Feedback
                            </a>
                            <a className="px-4 py-2" href="https://www.vu.edu.au/sitemap">
                                Full sitemap
                            </a>
                        </div>
                        <div className="mt-4 lg:mt-3 text-sm text-stone-200">
                            <span className="text-nowrap px-1">
                                © Copyright Victoria University 2024.
                            </span>
                            <span className="px-1">
                                Victoria University CRICOS Provider No. 00124K (Melbourne) and
                                CRICOS Provider No. 02475D (Sydney and Brisbane).
                            </span>
                            <span className="text-nowrap px-1">RTO Code: 3113.</span>
                            <span className="text-nowrap px-1">ABN: 83 776 954 731.</span>
                        </div>
                        <div className="mt-2 text-sm text-stone-200">
                            EAAMS Version: EAAMS V10.3.0 - Public. Last Modified On: 13-Feb-2023.
                            System Designed &amp; Developed by{' '}
                            <a href="https://www.cibis.com.au" rel="external">
                                CIBIS International
                            </a>
                            .
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};
