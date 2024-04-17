import Facebook from '../../assets/icons/facebookIcon';
import Instagram from '../../assets/icons/instaIcon';
import LinkedIn from '../../assets/icons/linkedInIcon';
import Tiktok from '../../assets/icons/tiktok';
import Youtube from '../../assets/icons/youtube';

const links = [
    {
        name: 'Privacy',
        link: '/privacy'
    },
    {
        name: 'Legal',
        link: '/legal'
    },
    {
        name: 'Copyright Notice',
        link: '/copyrightnotice'
    },
    {
        name: 'Careers',
        link: '/careers'
    },
    {
        name: 'Provider Registration',
        link: '/providerregistration'
    },
    {
        name: 'Accessibility Information',
        link: '/accessibilityinformation'
    },
    {
        name: 'Feedback',
        link: '/feedback'
    },
    {
        name: 'Full Sitemap',
        link: '/sitemap'
    }
];
export const Footer = () => {
    return (
        <footer id="footer" className=" bg-[#2E6186] text-[#F5F5F5]">
            <div className="container mx-auto flex flex-col pr-10">
                <div className="flex flex-col lg:flex-row  justify-between text-[18px] leading-[24px] font-normal">
                    <div>
                        <div className="h-[194px] w-[390px] ">
                            <img
                                className="object-contain"
                                src="/images/footerLogo.png"
                                alt="footerlogo"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col justify-start items-start px-2 lg:px-0 lg:py-10 underline whitespace-nowrap">
                        {links.slice(0, 3).map((link) => (
                            <a
                                key={link.name}
                                // href={link.link}
                                className="my-2">
                                {link.name}
                            </a>
                        ))}
                    </div>
                    <div className="flex flex-col justify-start items-start px-2 lg:px-0 lg:py-10 underline whitespace-nowrap">
                        {links.slice(3, 6).map((link) => (
                            <a
                                key={link.name}
                                // href={link.link}
                                className="my-2">
                                {link.name}
                            </a>
                        ))}
                    </div>
                    <div className="flex flex-col justify-start items-start px-2 lg:px-0 lg:py-10 underline whitespace-nowrap">
                        {links.slice(6, 8).map((link) => (
                            <a
                                key={link.name}
                                // href={link.link}
                                className="my-2">
                                {link.name}
                            </a>
                        ))}
                    </div>
                </div>
                <div className="pt-6 pb-2 px-2  flex flex-col md:flex-row justify-between font-normal  text-[18px] leading-[20px] ">
                    <div className="flex items-center mb-2 md:mb-0">
                        Keep in touch
                        <div className="border-[0.5px] w-[30px] ml-2"></div>
                        <a
                            // href="https://www.facebook.com/victoria.university/"
                            className="ml-4 mr-2">
                            <Facebook color="white" />
                        </a>
                        <a
                            // href="https://www.instagram.com/victoriauniversity/?hl=en"
                            className="mx-2">
                            <Instagram color="white" />
                        </a>
                        <a
                            // href="https://au.linkedin.com/school/victoria-university/"
                            className="mx-2">
                            <LinkedIn color="white" />
                        </a>
                        <a
                            //  href="https://www.youtube.com/user/VictoriaUniversity"
                            className="mx-2">
                            <Youtube color="white" />
                        </a>
                        <a
                            // href="https://www.tiktok.com/@victoriauniversity?lang=en"
                            className="mx-2">
                            <Tiktok color="white" />
                        </a>
                    </div>
                    <div className="">©2024 logoipsum All rights reserved.</div>
                </div>
            </div>
        </footer>
    );
};
