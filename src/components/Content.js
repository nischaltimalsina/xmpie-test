import { useContext, useEffect, useState } from 'react';
import { XmplContext } from 'xmpl-react';
import { useNavigate } from 'react-router-dom';

export const Content = () => {
    const { xmp } = useContext(XmplContext)
    const navigate = useNavigate()
    const ref = `/?rid=${localStorage.getItem('xmpRecipientID')}`

    return <div className={'content'}>
        <h3>Hi <span>{xmp.r['firstname']} {xmp.r['lastname']}</span>, here is some information for you</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet dolore et illum maiores natus quia saepe sint tenetur veniam? Beatae doloremque ex itaque iusto temporibus? Accusantium molestias nobis sunt ullam?</p>
        <button onClick={(e) => {
            e.preventDefault()
            navigate(ref)
        }}>Home Page</button>
    </div>
}
