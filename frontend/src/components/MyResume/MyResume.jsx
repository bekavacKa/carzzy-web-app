import React from 'react';
import { FaCode, FaCss3Alt, FaGithubSquare, FaHtml5, FaJsSquare, FaLanguage, FaLinkedin, FaMailBulk, FaMapMarkerAlt, FaPhoneSquare, FaReact, FaSass } from 'react-icons/fa';
import './my-resume.scss';

function MyResume() {
  return (
    <main className='my-resume-wrapper'>

        <header className='my-resume-header animate__animated animate__backInDown'>
            <h2> Kazimir Bekavac </h2>
            <h3> Frontend developer </h3>
            <p>MASTER OF INFORMATION SCIENCES - INFORMATICS</p>
        </header >

        <aside className='my-resume-aside animate__animated animate__backInLeft'>

            <article className='aside-contact'>
                <div className='aside-contact-title'>
                    <h2>CONTACT</h2>
                </div>
                <div className='aside-contact-items'>
                    <div className='aside-contact-items-holder'>
                        <FaPhoneSquare className='contact-icon' />
                        <p>+387 63 831 458</p>
                    </div>
                    <a href="mailto:kazimir.bekavac1@gmail.com" className='aside-contact-items-holder' >
                            <FaMailBulk className='contact-icon'/>
                            <p> kazimir.bekavac1@gmail.com </p>
                    </a>
                    <div className='aside-contact-items-holder'>
                        <FaMapMarkerAlt className='contact-icon' />
                        <p>Split, Croatia</p>
                    </div>
                    <a href='https://github.com/bekavacKa' target="_blank" rel='noreferrer' className='aside-contact-items-holder'>
                        <FaGithubSquare className='contact-icon'/>
                        <p>bekavacKa</p>
                    </a>
                    <a href='https://www.linkedin.com/in/ka%C5%BEimir-bekavac-8101841a7/' target="_blank" rel='noreferrer' className='aside-contact-items-holder'>
                        <FaLinkedin className='contact-icon'/>
                        <p>Kazimir Bekavac</p>
                    </a>
                </div>
            </article>

            <article className='aside-skils'>

                <div className='aside-skils-title'>
                    <h2>MAIN SKILS</h2>
                </div>
                <div className='aside-skils-items'>
                    <div className='aside-skils-items-holder'>
                        <FaJsSquare className='skils-icon' />
                        <p>JAVASCRIPT</p>
                    </div>
                    <div className='aside-skils-items-holder'>
                        <FaReact className='skils-icon' />
                        <p>REACT</p>
                    </div>
                    <div className='aside-skils-items-holder'>
                        <FaHtml5 className='skils-icon' />
                        <p>HTml</p>
                    </div>
                    <div className='aside-skils-items-holder'>
                        <FaCss3Alt className='skils-icon' />
                        <p>css</p>
                    </div>
                    <div className='aside-skils-items-holder'>
                        <FaSass className='skils-icon' />
                        <p>sass</p>
                    </div>
                </div>
                
            </article>
            
            <article className='aside-skils'>

                <div className='aside-skils-title'>
                    <h2>OTHER SKILS</h2>
                </div>
                <div className='aside-skils-items'>
                    <div className='aside-skils-items-holder'>
                        <FaCode className='skils-icon' />
                        <p>REACT REDUX</p>
                    </div>
                    <div className='aside-skils-items-holder'>
                        <FaCode className='skils-icon' />
                        <p>NODE JS</p>
                    </div>
                    <div className='aside-skils-items-holder'>
                        <FaCode className='skils-icon' />
                        <p>MONGODB</p>
                    </div>
                    <div className='aside-skils-items-holder'>
                        <FaCode className='skils-icon' />
                        <p>EXPRESS</p>
                    </div>
                    <div className='aside-skils-items-holder'>
                        <FaCode className='skils-icon' />
                        <p>GIT</p>
                    </div>
                    <div className='aside-skils-items-holder'>
                        <FaCode className='skils-icon' />
                        <p>GITHUB</p>
                    </div>
                    <div className='aside-skils-items-holder'>
                        <FaCode className='skils-icon' />
                        <p>PHP</p>
                    </div>
                    <div className='aside-skils-items-holder'>
                        <FaCode className='skils-icon' />
                        <p>Bootstrap</p>
                    </div>
                    <div className='aside-skils-items-holder'>
                        <FaCode className='skils-icon' />
                        <p>wordpress</p>
                    </div>
                    <div className='aside-skils-items-holder'>
                        <FaCode className='skils-icon' />
                        <p>typescript</p>
                    </div>
                    <div className='aside-skils-items-holder'>
                        <FaCode className='skils-icon' />
                        <p>sql</p>
                    </div>
                    
                </div>
                
            </article>


            <article className='aside-languages'>
                <div className='aside-languages-title'>
                    <h2>LANGUAGES</h2>
                </div>
                <div className='aside-languages-items'>
                    <FaLanguage className='language-icon' />
                    <p>ENGLISH</p>
                </div>
            </article>

        </aside>

        <section className='my-resume-main animate__animated animate__backInRight'>
            <article className='main-profile'>
                <h2 className='main-profile-title'>Profile</h2>
                <p className='main-profile-contnet'>
                    My interest in any form of programming arises after enrolling in high
                    school, and at that time I start independent research and learning
                    programming languages. During my studies, I deepen my existing
                    knowledge and start learning some technologies related to web
                    programming. After enrolling in graduate school, I practice and learn
                    new technologies every day, and I publish some projects on my
                    github profile (bekavacKa). I am constantly investing in the further
                    advancement and development of existing skills and I am always
                    ready to learn something new. I dont have work experience yet, but I
                    think that I would do very well in team work because I am
                    competitive and ready to
                </p>
            </article>

            <article className='main-education'>
                <h2 className='main-education-title'>education</h2>

                <div className='main-education-content'>
                    <p className='education-content-subtitle'>Commercialist</p>
                    <p className='education-content-info'>High school (2014)</p>
                </div>
                <div className='main-education-content'>
                    <p className='education-content-subtitle'>Bachelor of Information Sciences</p>
                    <p className='education-content-info'>University of Mostar (2019)</p>
                </div>
                <div className='main-education-content'>
                    <p className='education-content-subtitle'>Master of Information Sciences - Infromatics</p>
                    <p className='education-content-info'>University of Mostar (2022)</p>
                </div>

            </article>

            <article className='main-courses'>
                <h2 className='main-courses-title'>courses</h2>
                <div className='main-courses-content'>
                    <p className='courses-content-subtitle'>Web design</p>
                    <p className='courses-content-info'>University of Mostar (2021)</p>
                </div>
                <div className='main-courses-content'>
                    <p className='courses-content-subtitle'>Python programming</p>
                    <p className='courses-content-info'>University of Mostar (2021)</p>
                </div>
                <div className='main-courses-content'>
                    <p className='courses-content-subtitle'>FullStack</p>
                    <p className='courses-content-info'>Webcon.rs (2021)</p>
                </div>
                <div className='main-courses-content'>
                    <p className='courses-content-subtitle'>FullStack WebDev</p>
                    <p className='courses-content-info'>Online programming school - Danilo Vešović (2022)</p>
                </div>
            </article>
        </section>

    </main>
  )
}

export default MyResume