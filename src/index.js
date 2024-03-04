import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { XmplProvider } from 'xmpl-react';

const root = ReactDOM.createRoot(document.getElementById('root'));
const xmpcfg = {
    access: {
        accessToken: '8ae058d5-31f0-4e12-8a47-9f82fc6df6ef_1fdb5415-794f-4e1a-9912-093fc810bc64_e299a53d478a4276a769a8d815db4cc4',
        url: 'http://176.34.252.52/XMPieXMPL_REST_API',
        circleProjectID: '1fdb5415-794f-4e1a-9912-093fc810bc64',
        circleProjectName: 'Sample'
    }
};
root.render(
    <React.StrictMode>
        <XmplProvider xmpcfg={xmpcfg}>
            <App/>
        </XmplProvider>
    </React.StrictMode>
);
