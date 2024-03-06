import { useContext } from 'react';
import { XmplContext } from 'xmpl-react';
import { useNavigate } from 'react-router-dom';

export const ReferredRecipientData = () => {
    const { xmp } = useContext(XmplContext)
    const navigate = useNavigate()
    return <div className='refPage'>
        <div className='baseUser'>
            <div className='infoBlock'>
                <div>Base recipient First Name: <b>{xmp.r.firstname}</b></div>
                <div>Base recipient Last Name: <b>{xmp.r.lastname}</b></div>
                <div>Base recipient Email: <b>{xmp.r.email}</b></div>
                <button onClick={(e) => {
                    e.preventDefault()
                    navigate(`/?rid=${localStorage.getItem('xmpRecipientID')}`)
                }}>Base user Home page
                </button>
            </div>
        </div>
        <div className='referredUser'>
            <div className='infoBlock'>
                <div>Referred recipient First Name: <b>{xmp.referredRecipient.firstname}</b></div>
                <div>Referred recipient Last Name: <b>{xmp.referredRecipient.lastname}</b></div>
                <div>Referred recipient Email: <b>{xmp.referredRecipient.email}</b></div>
                <button disabled onClick={(e) => {
                    e.preventDefault()
                    navigate(`/?rid=${localStorage.getItem('xmpReferredID')}`)
                }}>Referred friend Home page
                </button>
            </div>
        </div>
    </div>
}
