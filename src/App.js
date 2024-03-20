import './assets/css/main.css';
import { Header } from './components/Header';
import { Banner } from './components/Banner';
import { Footer } from './components/Footer';
// import { MainBlock } from './components/MainBlock';
import { Contact } from './components/Contact';
import { useContext, useEffect } from 'react';
import { XmplContext, useAdors } from 'xmpl-react';

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
        <div className="App">
            <div id="wrapper">
                <Header />
                <Banner />
                {/* <MainBlock /> */}
                <Contact />
                <Footer />
            </div>
        </div>
    );
}

export default App;

// import { useContext, useEffect } from 'react';
// import { XmplContext, useAdors } from 'xmpl-react';
// import { Footer } from './components/Footer';
// import { Header } from './components/Header';
// import { MainBlock } from './components/MainBlock';

// function App() {
//     const { xmp } = useContext(XmplContext);
//     const { getAdorValues } = useAdors();
//     const rid =
//         new URLSearchParams(window.location.search).get('rid') ||
//         localStorage.getItem('xmpRecipientID');
//     console.log(rid);
//     useEffect(() => {
//         getAdorValues({
//             rid,
//             isLogin: true,
//             adors: [
//                 'firstname',
//                 'lastname',
//                 'phone',
//                 'email',
//                 'optionalemail',
//                 'residentcountry',
//                 'nationality',
//                 'month',
//                 'year',
//                 'graduatediplomainprojectmanagement',
//                 'masterofbusinessadministrationglobal',
//                 'masterofbusinessanalytics',
//                 'masterofenterpriseresourceplanning',
//                 'masterofprofessionalaccounting',
//                 'masterofprojectmanagement',
//                 'masterofsupplychainmanagement',
//                 'associatedegreeinhospitalityandhotelmanagement',
//                 'bachelorofaccounting',
//                 'bachelorofbusiness',
//                 'bachelorofsportmanagement',
//                 'bachelorofsportmanagementbachelorofbusiness',
//                 'bachelorofsportsciencehumanmovementbachelorofsportmanagement',
//                 'diplomaofbusinessenterprise',
//                 'graduatecertificateindigitalmedia',
//                 'graduatediplomaindigitalmedia',
//                 'masterofdigitalmedia',
//                 'bachelorofarts',
//                 'bachelorofmusic',
//                 'bachelorofscreenmedia',
//                 'graduatecertificateineducation',
//                 'graduatediplomainearlychildhoodeducation',
//                 'graduatediplomaineducation',
//                 'masterofeducation',
//                 'masterofteachingprimaryeducation',
//                 'masterofteachingsecondaryeducation',
//                 'bachelorofearlychildhoodeducation',
//                 'bachelorofearlychildhoodeducationandleadership',
//                 'bachelorofeducationp12',
//                 'bachelorofeducationstudies',
//                 'bachelorofoutdoorleadership',
//                 'bachelorofphysicaleducationandsportscience',
//                 'diplomaofeducationstudies',
//                 'certificateiiiinearlychildhoodeducationandcare',
//                 'diplomaofearlychildhoodeducationandcare',
//                 'diplomaofbuildingandconstructionbuilding',
//                 'graduatediplomainprojectmanagement',
//                 'masterofengineering',
//                 'masterofprojectmanagement',
//                 'bachelorofbuildingdesign',
//                 'bachelorofconstructionmanagementhonours',
//                 'bachelorofengineeringhonourscivilengineering',
//                 'bachelorofengineeringhonourselectricalandelectronicengineering',
//                 'bachelorofengineeringhonoursmechanicalengineering',
//                 'internationalfoundationsatvu',
//                 'internationalfoundationsatvuextended',
//                 'bachelorofscienceosteopathymasterofhealthscienceosteopathy',
//                 'graduatecertificateinglobalpublichealth',
//                 'masterofglobalpublichealth',
//                 'bachelorofbiomedicalscience',
//                 'bachelorofbiomedicine',
//                 'bachelorofdermalsciences',
//                 'bachelorofhealthscience',
//                 'bachelorofhumannutrition',
//                 'bachelorofmidwiferybachelorofnursing',
//                 'bachelorofnursing',
//                 'bachelorofparamedicine',
//                 'bachelorofscienceosteopathymasterofhealthscienceosteopathy',
//                 'associatedegreeinhospitalityandhotelmanagement',
//                 'graduatecertificateinartificialintelligence',
//                 'graduatecertificateindigitalmedia',
//                 'graduatediplomaincybersecurity',
//                 'graduatediplomaindigitalmedia',
//                 'graduatediplomainprojectmanagement',
//                 'masterofappliedinformationtechnology',
//                 'masterofbusinessanalytics',
//                 'masterofdigitalmedia',
//                 'masterofenterpriseresourceplanning',
//                 'masterofprojectmanagement',
//                 'masterofsupplychainmanagement',
//                 'graduatecertificateinartificialintelligence',
//                 'graduatecertificateindigitalmedia',
//                 'graduatediplomaincybersecurity',
//                 'graduatediplomaindigitalmedia',
//                 'graduatediplomainprojectmanagement',
//                 'masterofappliedinformationtechnology',
//                 'masterofbusinessanalytics',
//                 'masterofdigitalmedia',
//                 'masterofenterpriseresourceplanning',
//                 'masterofprojectmanagement',
//                 'masterofsupplychainmanagement',
//                 'graduatediplomainmigrationlaw',
//                 'bachelorofcriminaljustice',
//                 'bachelorofcriminaljusticeandpsychologicalstudies',
//                 'bachelorofcriminology',
//                 'bachelorofcriminologybachelorofpsychologicalstudies',
//                 'bacheloroflaws',
//                 'bacheloroflawsgraduateentry',
//                 'bacheloroflawsbachelorofcriminology',
//                 'masterofcounselling',
//                 'bachelorofcriminaljusticeandpsychologicalstudies',
//                 'bachelorofcriminologybachelorofpsychologicalstudies',
//                 'bachelorofpsychologicalstudies',
//                 'bachelorofpsychologicalstudiesbachelorofbusiness',
//                 'bachelorofpsychologyhonoursbachelorofsportsciencehumanmovementbachelorofpsychologicalstudies',
//                 'bachelorofbiomedicalandexercisescience',
//                 'bachelorofbiomedicalscience',
//                 'bachelorofbiomedicine',
//                 'bachelorofdermalsciences',
//                 'bachelorofhealthscience',
//                 'bachelorofhumannutrition',
//                 'bachelorofsciencehonoursbiomedicalscience',
//                 'graduatecertificateinglobalpublichealth',
//                 'graduatecertificateininternationalcommunitydevelopment',
//                 'graduatediplomaininternationalcommunitydevelopment',
//                 'masterofinternationalcommunitydevelopment',
//                 'bachelorofcommunitydevelopment',
//                 'bachelorofsocialwork',
//                 'bachelorofyouthwork',
//                 'masterofclinicalexercisescienceandrehabilitation',
//                 'bachelorofbiomedicalandexercisescience',
//                 'bachelorofexercisescienceclinicalpractice',
//                 'bachelorofexercisesciencesportpractice',
//                 'bachelorofoutdoorleadership',
//                 'bachelorofphysicaleducationandsportscience',
//                 'bachelorofsportmanagementbachelorofsportmanagementbachelorofbusiness',
//                 'bachelorofsportscience',
//                 'bachelorofsportsciencehumanmovementbachelorofpsychologicalstudies',
//                 'bachelorofsportsciencehumanmovementbachelorofsportmanagement',
//                 'blockmodel',
//                 'scholarships',
//                 'studentsupportandsafety',
//                 'careerandemploymentservices',
//                 'englishlanguagerequirements',
//                 'englishlanguagecourses',
//                 'costofliving',
//                 'housingandaccommodation',
//                 'liveinmelbourne'
//             ],
//             resolved: ['photo1', 'photo2', 'photo3', 'photo4'],
//             async: false,
//             isCached: true,
//             noCache: false
//         });
//     }, [xmp]);
//     return (
//         <div className="bg-gray-100 w-full h-full min-h-screen">
//             <Header />
//             <MainBlock />
//             <Footer />
//         </div>
//     );
// }

// export default App;
