import { useContext } from 'react';
import { XmplContext } from 'xmpl-react';
import { useNavigate } from 'react-router-dom';

export const ErrorPage = () => {
    const { xmp } = useContext(XmplContext)
    const navigate = useNavigate()
    const ref = `/?rid=${localStorage.getItem('xmpRecipientID')}`
    return <div className={'errorPage'}>
        Error status code: {xmp.errorCode || "unknown"}
        <button onClick={(e) => {
            e.preventDefault()
            navigate(ref)
        }}>Home Page
        </button>
    </div>
}
