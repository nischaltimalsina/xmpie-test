import './assets/css/main.css';
import { Header } from './components/Header';
import { Banner } from './components/Banner';
import { Footer } from './components/Footer';
import { MainBlock } from './components/MainBlock';
import { Contact } from './components/Contact';
import { useContext, useEffect } from 'react';
import { useAdors } from 'xmpl-react';
import { XmplContext } from 'xmpl-react';
import { useNavigate } from 'react-router-dom';

function App() {
    const navigate = useNavigate()
    const { xmp, setXmp } = useContext(XmplContext)
    const errorhandling = (e) => {
        setXmp({...xmp, errorCode: e.data.StatusCode})
        navigate('/errorPage')
    }
    const { getAdorValues } = useAdors((e) => errorhandling(e));
    const rid = new URLSearchParams(window.location.search).get('rid')

    useEffect(() => {
        getAdorValues({
            rid,
            isLogin: true,
            adors: ['firstName', 'lastName', 'preference', 'email', 'photo1', 'photo2', 'photo3', 'photo4', 'backgroundColor', 'isClubMember', 'showForm', 'showThanks'],
            resolved: ['photo1', 'photo2', 'photo3', 'photo4'],
            async: false,
            isCached: true,
            noCache: false,
        })
    })

    return (
        <div className="App">
            <div id="wrapper">
                <Header/>
                <Banner/>
                <MainBlock/>
                <Contact/>
                <Footer/>
            </div>
        </div>
    );
}

export default App;
