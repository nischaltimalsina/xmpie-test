import { XmplContext } from 'xmpl-react';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import AnchorLink from 'react-anchor-link-smooth-scroll';

export const MainBlock = () => {
    const { xmp } = useContext(XmplContext)
    const navigate = useNavigate();
    const switchPage = (e, ref) => {
        e.preventDefault()
        navigate(ref)
    }

    return (<div id="main">
        <section id="one" className="tiles">
            <article style={{ backgroundImage: `url(${xmp.r['photo1']})` }}>
			    <span className="image">
	    	        <img src={`${xmp.r['photo1']}`} alt=""/>
	            </span>
                <header className="major">
                    <h3><a onClick={(e) => switchPage(e,'content')} className="link">Excitement</a></h3>
                    <p>Get out and about!</p>
                </header>
            </article>
            <article style={{ backgroundImage: `url(${xmp.r['photo2']})` }}>
                    <span className="image">
					<img src={`${xmp.r['photo2']}`} alt=""/>
                    </span>
                <header className="major">
                    <h3><a onClick={(e) => switchPage(e,'content')} className="link">Breathe</a></h3>
                    <p>Take a break!</p>
                </header>
            </article>
            <article style={{ backgroundImage: `url(${xmp.r['photo3']})` }}>
									<span className="image">
										<img src={`${xmp.r['photo3']}`} alt=""/>
									</span>
                <header className="major">
                    <h3><a onClick={(e) => switchPage(e,'content')} className="link">Enjoy</a></h3>
                    <p>Indulge in the best</p>
                </header>
            </article>
            <article style={{ backgroundImage: `url(${xmp.r['photo4']})` }}>
									<span className="image">
										<img src={`${xmp.r['photo4']}`} alt=""/>
									</span>
                <header className="major">
                    <h3><a onClick={(e) => switchPage(e,'content')} className="link">Relax</a></h3>
                    <p>Discover something new</p>
                </header>
            </article>
        </section>
        <section id="two" className={xmp.r.backgroundColor}>
            <div className="inner">
                <header className="major">
                    <h2>About Round Travel</h2>
                </header>
                <p>At Round Travel we personalize the travel experience by offering the best destinations,
                    tours
                    and itineraries based on your preferences!</p>
                <ul className="actions">
                    <li><AnchorLink href="#one" className="button next">Get Started</AnchorLink></li>
                </ul>
            </div>
        </section>
    </div>)
}
