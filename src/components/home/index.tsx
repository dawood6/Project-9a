import React from 'react'
import './home.css'
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='mainHome'>
            <main>
                <section className="intro">
                    <div className="intro-img"> <img src='https://i.ibb.co/0qdjVH4/main-img.png' alt="illustration-intro" /></div>
                    <div className="intro-content">

                        <h1>JORDAN BRAND WINGS</h1>

                        <p className="lg-p mt-2">"Through our Jordan Wings Program, we have been focused on providing access to education,
                        mentorship and opportunity for Black youth facing the obstacles of systemic racism. But we know
                        we can do more. We must join forces with the community, government and civic leaders to create a
                        lasting impact together,” said Craig Williams, President of Jordan Brand. “There is still more work
                        for us to do to drive real impact for the Black Community. We embrace the responsibility.”
                         </p>

                        <button className="btn mt-2"> Get Started</button>
                    </div>
                </section>

                <section className="features">
                    <div className="features-item">
                        <div className="features-item-head"> <img src='https://i.ibb.co/hKbcnXX/air-jordan-14-retro.png' alt="" /> </div>
                        <div className="features-item-body  mt-2">
                            <h3>Air Jordan 14 Retro</h3>
                            <p>The Air Jordan !4 Retro stands out with its intricately detailed, laser-etched upper. Its webbed lacing system and foam-backed collar stabilize a performance fit.</p>
                        </div>
                    </div>
                    <div className="features-item">
                        <div className="features-item-head"> <img src='https://i.ibb.co/TcY35bf/air-jordan-1-low-shoe.png' alt="" /> </div>
                        <div className="features-item-body mt-2">
                            <h3> Air Jordan 1 low</h3>
                            <p>The Air Jordan 1 low continues the legacy of a cultural icon. Light, responsive and sculpted with aerodynamic precision,   combines boldly unconventional midsole.</p>
                        </div>
                    </div>
                    <div className="features-item">
                        <div className="features-item-head"> <img src='https://i.ibb.co/WV7pM3W/jordan-delta.png' alt="" /> </div>
                        <div className="features-item-body  mt-2">
                            <h3> Jordan Delta </h3>
                            <p>One of the game's fiercest competitors, triple-double dynamo Russell Westbrook has the motor, muscle and mentality to match his  fearlessness   with the stats to.</p>
                        </div>
                    </div>
                    <div className="features-item">
                        <div className="features-item-head"> <img src='https://i.ibb.co/6yfZfgP/air-jordan-xxxiv.png' alt="" /> </div>
                        <div className="features-item-body  mt-2">
                            <h3>Air Jordan xxxiv</h3>
                            <p>Pay homage to MJ's legendary career in the Air Jordan xxxiv. The design pulls  in  elements  from  a  range of iconic Jordan's , like the patent leather mudguard.</p>
                        </div>
                    </div>
                </section>
                <section className="productive">

                    <div className="productive-img"> <img src='https://github.com/dawood6/Project-3-Shoe-store/blob/master/src/Components/assets/nike-logo.png?raw=true' alt="" /> </div>

                    <div className="productive-content">
                        <h2>DESIGN TO HELP REDUCE INJURY</h2>
                        <p className="lg-p">Up to 40% Off <br /> <Link to='/prouduct'>Shop Our Latest Sale Styles</Link> </p>
                    </div>
                </section>
                <section className="cards">

                    <div className="card-item">
                        <img src='https://github.com/dawood6/Project-3-Shoe-store/blob/master/src/Components/assets/card1.png?raw=true' className='card-image' alt='' />
                    </div>

                    <div className="card-item">
                        <img src='https://github.com/dawood6/Project-3-Shoe-store/blob/master/src/Components/assets/card2.png?raw=true' className='card-image' alt='' />
                    </div>

                    <div className="card-item">
                        <img src='https://github.com/dawood6/Project-3-Shoe-store/blob/master/src/Components/assets/card3.png?raw=true' className='card-image' alt='' />
                    </div>
                </section >
                <section className="cta">
                    <div className="cta-item">
                        <div className="cta-text">
                            <h2>Want To Know About Our Latest Prouducts</h2>
                            <p>Give Your Email And Subscribe To Our NewsLetter For First</p>
                        </div>
                        <form className="cta-form mt-2">
                            <input className="input-block" type="text" placeholder="example@email.com" />
                            <button className="btn-block">Submit</button>
                        </form>
                    </div>
                </section>
            </main >
            <footer>
                <section className="contact-info">
                    <div className="contact-info-location">
                        <div className="contact-info-location-item">
                            <img className="img-footer" src="https://hannahshiels.github.io/Fylo-dark-theme-landing-page/images/icon-location.svg" alt="" />
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                        </div>
                    </div>
                    <div className="contact-info-contacts">
                        <div className="contact-info-contacts-item">
                            <img className="img-footer" src="https://hannahshiels.github.io/Fylo-dark-theme-landing-page/images/icon-phone.svg" alt="" />
                            <p>+924578129901</p>
                        </div>
                        <div className="contact-info-contacts-item ">
                            <img className="img-footer" src="https://hannahshiels.github.io/Fylo-dark-theme-landing-page/images/icon-email.svg" alt="" />
                            <p>abc@example.com</p>
                        </div>
                    </div>
                    <nav className="contact-info-links">
                        <ul className="contact-info-links-list">
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/prouduct'>Prouducts</Link></li>
                            <li><Link to='/info'>Information</Link></li>
                        </ul>
                        <ul className="contact-info-links-list">
                            <li><Link to='/contact'>Contact</Link></li>
                            <li><Link to='/'>Terms</Link></li>
                            <li><Link to='/'>Privacy</Link></li>
                        </ul>
                    </nav>
                    <div className="contact-info-social-links">
                        <Link to='/'>
                            <div className="contact-info-social-link-item flex-center"><i className="fa fa-facebook" aria-hidden="true"></i></div>
                        </Link>
                        <Link to='/'>
                            <div className="contact-info-social-link-item flex-center"><i className="fa fa-twitter" aria-hidden="true"></i></div>
                        </Link>
                        <Link to='/'>
                            <div className="contact-info-social-link-item flex-center"><i className="fa fa-instagram" aria-hidden="true"></i></div>
                        </Link>
                    </div>
                </section>
            </footer>
        </div >
    )
}

export default Home
