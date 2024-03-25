import { HiGlobeEuropeAfrica } from 'react-icons/hi2';

export const Header = () => {
    return (
        <header>
            <div className="hidden md:grid grid-cols-[auto,154px,154px,565px]  h-12 text-xl">
                <div></div>
                <a
                    href="https://gotovu.custhelp.com/app/utils/login_form/redirect/ask?p_ptaid=fUKAiNcpH_lLUDabv_CKIhbIcx5ziOj8XjFQ9a%7Ewx9ydis2mtGq1FdoAQjmQBF0YJ%7EzoaZsFSm87qDa_gbcnk6jkDhrlpB_Hl6iPiQNOpJ24kKGEgQKLMdmA%21%21"
                    className="bg-[#21104b] uppercase cursor-pointer text-[20px] font-normal font-condensed  text-white px-12 flex items-center">
                    enquire
                </a>
                <a
                    href="https://eaams.vu.edu.au/portal/Login.aspx?ReturnUrl=%2fPortal%2fApplications%2fBrowseApplications.aspx"
                    className="bg-[#40c7f4]  font-normal text-[20px]  font-condensed cursor-pointer px-12 flex items-center">
                    APPLY
                </a>
                <a
                    href="https://eaams.vu.edu.au/"
                    className="bg-black  min-w-[142px] font-semibold tracking-wide font-condensed  whitespace-nowrap flex items-center cursor-pointer text-white px-4 text-left">
                    <HiGlobeEuropeAfrica className="mr-3 text-3xl" />
                    International Students
                </a>
            </div>
            <nav className=" px-12 py-6 bg-white h-[96px]">
                <div className="container mx-auto flex items-center justify-start">
                    <div className="flex items-center flex-shrink-0 ">
                        <img
                            className="hidden md:block h-14 aspect-[20/7]"
                            src="https://eaams.vu.edu.au/lava/img/vu/logo.svg"
                            alt="logo"
                        />
                        <img
                            className=" h-14 block md:hidden"
                            src="https://eaams.vu.edu.au/lava/img/vu/logo-mobile.svg"
                            alt="logo"
                        />
                    </div>
                    <div>
                        <span className="text-xl font-semibold  font-sans tracking-tight ml-6">
                            Create your personalised brochure
                        </span>
                    </div>
                </div>
            </nav>
        </header>
    );
};
