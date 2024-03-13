import { useContext, useEffect } from 'react';
import { XmplContext, useAdors } from 'xmpl-react';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { MainBlock } from './components/MainBlock';
import Step4 from './components/Step4';

function App() {
    const { xmp } = useContext(XmplContext);
    const { getAdorValues } = useAdors();
    const rid = new URLSearchParams(window.location.search).get('rid');

    useEffect(() => {
        getAdorValues({
            rid,
            isLogin: true,
            adors: [
                'firstname',
                'lastname',
                'preference',
                'email',
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
        <div className="bg-gray-100 w-full h-full min-h-screen">
            <Header />
            <MainBlock />
            <Step4 />
            <Footer />
        </div>
    );
}

export default App;
