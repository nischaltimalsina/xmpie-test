import { HiGlobeEuropeAfrica } from 'react-icons/hi2';

export const Header = () => {
    return (
        <header>
            <div className="hidden md:grid grid-cols-[auto,154px,154px,565px]  font-semibold h-12 text-xl">
                <div></div>
                <a
                    href="#"
                    className="bg-[#21104b] cursor-pointer text-white px-12 flex items-center">
                    ENQUIRE
                </a>
                <a href="#" className="bg-[#40c7f4] cursor-pointer px-12 flex items-center">
                    APPLY
                </a>
                <a
                    href="#"
                    className="bg-black min-w-[142px] whitespace-nowrap flex items-center cursor-pointer text-white px-4 text-left">
                    <HiGlobeEuropeAfrica className="mr-3 text-3xl" />
                    International Students
                </a>
            </div>
            <nav className=" px-12 py-6 bg-white">
                <div className="container mx-auto flex items-center justify-start flex-wrap">
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
                        <span className="text-xl tracking-tight ml-6">
                            Create your personalised brochure
                        </span>
                    </div>
                </div>
            </nav>
        </header>
    );
};
