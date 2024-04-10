import './assets/css/main.css';
import { Header } from './components/common/Header';
import { Footer } from './components/common/Footer';
import { Contact } from './components/Contact';
import { useContext, useEffect } from 'react';
import { XmplContext, useAdors } from 'xmpl-react';

function App() {
    const { xmp } = useContext(XmplContext);
    const { getAdorValues } = useAdors();
    console.log('useAdors', useAdors());
    console.log('xmp', xmp);

    const rid = new URLSearchParams(window.location.search).get('rid');

    useEffect(() => {
        getAdorValues({
            rid,
            isLogin: true,
            adors: [
                'firstName',
                'lastName',
                'phone',
                'email',
                'optionalEmail',
                'month',
                'year',
                'nationality',
                'residenceCountry',
                'courses',
                'studyArea',
                'additionalData',
                'preference',
                'XMPie.PDF.P3',
                'photo1',
                'photo2',
                'photo3',
                'photo4',
                'backgroundColor',
                'isClubMember',
                'showForm',
                'showThanks'
            ],
            resolved: ['photo1', 'photo2', 'photo3', 'photo4'],
            async: false,
            isCached: true,
            noCache: false
        });
    }, [xmp]);
    return (
        <div className="bg-gray-100 antialiased w-full h-full min-h-screen font-sans text-[16px] leading-6">
            <div id="wrapper">
                <Header />
                <Contact />
                <Footer />
            </div>
        </div>
    );
}

export default App;
