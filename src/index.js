import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { XmplProvider } from 'xmpl-react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Content } from './components/Content';
import { ErrorPage } from './components/ErrorPage';
import { NewRecipientForm } from './components/NewRecipientForm';
import { ReferredRecipientData } from './components/ReferredRecipientData';

const root = ReactDOM.createRoot(document.getElementById('root'));
var xmpcfg = {
    access: {
      accessToken:
        '3b5a1f9e-e9c3-412e-a0c3-09ea6613ada9_1dacdc66-9448-4d9a-877b-6d9f0e7b8fd2_6d40bc73b649483691c6d9a8d36f2d98',
      url: 'https://xmp3.c121.com.au/XMPieXMPL_REST_API',
      circleProjectID: '1dacdc66-9448-4d9a-877b-6d9f0e7b8fd2',
      circleProjectName: 'Dev Testing',
    },
  };
  
root.render(
    <React.StrictMode>
        <XmplProvider xmpcfg={xmpcfg}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<App/>}/>
                    <Route path='/content' element={<Content/>}/>
                    <Route path='/errorPage' element={<ErrorPage/>}/>
                    <Route path='/anonymous' element={<NewRecipientForm type='anon'/>}/>
                    <Route path='/ref' element={<NewRecipientForm type='ref'/>}/>
                    <Route path='/referredRecipientData' element={<ReferredRecipientData/>}/>
                </Routes>
            </BrowserRouter>
        </XmplProvider>
    </React.StrictMode>
);
