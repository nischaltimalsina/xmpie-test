import { useEffect, useRef, useState } from 'react';
import Enquiry from '../../assets/icons/enquiryIcon';
import Globe from '../../assets/icons/globeIcon';
import { FaBars } from 'react-icons/fa';

export const Header = () => {
    const [open, setOpen] = useState(false);
    const menuRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setOpen(false);
            }
        };

        // Add when the menu is open
        if (open) {
            document.addEventListener('click', handleClickOutside);
        }

        // Clean up
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [open]);
    return (
        <header className=" bg-white">
            <div className="flex justify-between text-xl px-6 container items-center mx-auto">
                <div className="flex  mr-auto  items-center">
                    <div className=" w-[200px]">
                        <img className="object-contain" src="/images/logo.png" alt="logo" />
                    </div>
                    <div>
                        <span className="text-xl hidden xl:flex whitespace-nowrap  tracking-tight ml-3">
                            Create your personalised brochure
                        </span>
                    </div>
                </div>
                <div
                    className="flex relative md:hidden hover:cursor-pointer"
                    ref={menuRef}
                    onClick={() => setOpen(!open)}>
                    <FaBars />
                    {open && (
                        <div className="absolute w-fit flex flex-col border top-5 right-0   bg-white">
                            <a
                                // href="https://gotovu.custhelp.com/app/utils/login_form/redirect/ask?p_ptaid=fUKAiNcpH_lLUDabv_CKIhbIcx5ziOj8XjFQ9a%7Ewx9ydis2mtGq1FdoAQjmQBF0YJ%7EzoaZsFSm87qDa_gbcnk6jkDhrlpB_Hl6iPiQNOpJ24kKGEgQKLMdmA%21%21"
                                className="h-10 w-full border-b-2 whitespace-nowrap px-4 flex items-center hover:bg-gray-100">
                                Enquiry
                            </a>
                            <a
                                // href="https://eaams.vu.edu.au/portal/Login.aspx?ReturnUrl=%2fPortal%2fApplications%2fBrowseApplications.aspx"
                                className="h-10 w-full border-b-2 whitespace-nowrap px-4 flex items-center hover:bg-gray-100">
                                Apply
                            </a>

                            <a
                                // href="https://eaams.vu.edu.au/"
                                className="h-10 w-full whitespace-nowrap px-4 flex items-center hover:bg-gray-100">
                                International Students
                            </a>
                        </div>
                    )}
                </div>
                <div className="hidden md:flex ml-auto  flex-row items-center">
                    <a
                        // href="https://gotovu.custhelp.com/app/utils/login_form/redirect/ask?p_ptaid=fUKAiNcpH_lLUDabv_CKIhbIcx5ziOj8XjFQ9a%7Ewx9ydis2mtGq1FdoAQjmQBF0YJ%7EzoaZsFSm87qDa_gbcnk6jkDhrlpB_Hl6iPiQNOpJ24kKGEgQKLMdmA%21%21"
                        className="bg-[#2E6186] text-white h-[41px] mx-2 rounded-md  cursor-pointer   px-8 flex items-center">
                        Enquire
                        <div className="ml-3">
                            <Enquiry color="white" />
                        </div>
                    </a>
                    <a
                        // href="https://eaams.vu.edu.au/portal/Login.aspx?ReturnUrl=%2fPortal%2fApplications%2fBrowseApplications.aspx"
                        className="bg-[#2E6186] rounded-md text-white h-[41px] mx-2    cursor-pointer px-8 flex items-center">
                        Apply
                    </a>
                    <a
                        // href="https://eaams.vu.edu.au/"
                        className="bg-white  h-[41px] mx-2 border border-black rounded-md tracking-tight   whitespace-nowrap flex items-center cursor-pointer px-4 text-left">
                        <div className="mr-3">
                            <Globe color="black" />
                        </div>
                        International Students
                    </a>
                </div>
            </div>
        </header>
    );
};
