import logo from '../images/RoundTravel_Logo.png'
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Header = () => {
    const [isMenuVisible, setisMenuVisible] = useState(false);
    const [scrollTop, setScrollTop] = useState(0);
    const [isNavFixed, setisNavFixed] = useState(false);
    const navigate = useNavigate();

    const toggleMenu = () => {
        document.body.className = document.body.className === 'is-menu-visible' ? '' : 'is-menu-visible'
        setisMenuVisible(!isMenuVisible)
    }
    const switchPage = (e, ref) => {
        e.preventDefault()
        navigate(ref)
        e.target.parentElement.className !== 'logo' && toggleMenu()
    }

    useEffect(() => {
        const handleScroll = (event) => {
            setisNavFixed(scrollTop > 100)
            setScrollTop(window.scrollY)
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    })
    return (
        <>
            <header id="header" className={isNavFixed ? 'reveal' : 'alt reveal'}>
                <a onClick={(e) => switchPage(e,`/?rid=${localStorage.getItem('xmpRecipientID')}`)} className="logo">
                    <img src={logo} alt="'Round Travel"/>
                </a>
                <nav>
                    <a onClick={toggleMenu} className="menu">Menu</a>
                </nav>
            </header>
            <nav id="menu">
                <div className='inner'>
                    <ul className="links">
                        <li><a onClick={(e) => switchPage(e,`/?rid=${localStorage.getItem('xmpRecipientID')}`)}>Home Page</a></li>
                        <li><a onClick={(e) => switchPage(e,'content')}>Content Page</a></li>
                        <li><a onClick={(e) => switchPage(e,'ref')}>Refer a friend</a></li>
                        <li><a href='https://www.xmpie.com'>XMPie Website</a></li>
                        <li><a href='https://campus.xmpie.com'>XMPie Campus</a></li>
                    </ul>
                    <ul className="actions stacked">
                        <li><a onClick={(e) => switchPage(e,`/?rid=${localStorage.getItem('xmpRecipientID')}`)} className="button primary fit">Get Started</a></li>
                    </ul>
                </div>
                <a className='close' href='' onClick={toggleMenu}>Close </a>
            </nav>
        </>
    )
}
