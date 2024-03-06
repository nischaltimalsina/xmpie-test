import { useContext, useEffect, useState } from 'react';
import { XmplContext, useRecipients } from 'xmpl-react';
import { useNavigate } from 'react-router-dom';

export const NewRecipientForm = ({ type }) => {
    const { clearSite, xmp } = useContext(XmplContext)
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const { addRecipient } = useRecipients()
    const navigate = useNavigate()

    const ref = `/?rid=${localStorage.getItem('xmpRecipientID')}`

    useEffect(() => {
        type === 'anon' && clearSite()
    }, [])
    const buttonHandler = async () => {
        let res;
        switch (type) {
            case "anon":
                res = await addRecipient({
                    isAddReferFriend: false,
                    adors: {
                        firstname: firstName,
                        lastname: lastName,
                        email
                    }
                })
                res && res.recipientID ? navigate(`/?rid=${res.recipientID}`) : navigate('/errorPage');
                break;
            case 'ref':
                res = await addRecipient({
                    isAddReferFriend: true,
                    adors: {
                        firstname: firstName,
                        lastname: lastName,
                        email,
                        'Referrer First Name': xmp.r['firstname'],
                        'Referrer Last Name': xmp.r['lastname'],
                    }
                })
                res && res.recipientID ? navigate(`/referredRecipientData`) : navigate('/errorPage');
                break;
            default :
                break;
        }
    }

    return <div className='anonPage'>
        <div className="wrapper">
            <h1>{type === 'ref' ? 'Refer a friend' : 'Add new recipient'}</h1>
            <label htmlFor="firstName">First Name:</label>
            <input type="text" name="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
            <label htmlFor="lastName">Last Name:</label>
            <input type="text" name="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)}/>
            <label htmlFor="email">Email:</label>
            <input type="text" name="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
            <button onClick={buttonHandler}>{type === 'ref' ? 'Add friend' : 'Add recipient'}</button>
        </div>
    </div>
}
