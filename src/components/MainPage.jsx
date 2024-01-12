import '../styles/mainPage.css'
import { Navbar } from './Navbar'
import { Parallax } from './Parallax'
import { FaLinkedin, FaSquareGithub } from "react-icons/fa6";

import Typed from 'react-typed'
import { LottieAnimation } from './LottieAnimation'

export function MainPage() {
    return (
        <section className='main-page' id='main'>
            <Parallax/>
            <Navbar />
            <section className='main-page-body'>
                <div className="left-side">
                    <LottieAnimation  />
                </div>
                <div className="right-side">
                    <h1 className='title parallax' speed="2">
                        <span className='letter-purple'>G</span>UILLERMO <span className='letter-purple'>F</span>IGUERAS <br />
                        <span className='soft-text'>
                        <Typed
                    strings={['SOFTWARE DEVELOPER', 'FRONTEND DEVELOPER']}
                    typeSpeed={55}
                    backSpeed={40}
                    
                />
                        </span>
                    </h1>
                    <div className='social-network parallax' speed="2" >
                        <a target='_blank' rel="noreferrer noopener" href="https://www.linkedin.com/in/gfigueras/">
                            <FaLinkedin className='social-item' />
                        </a>
                        <a target='_blank' rel="noreferrer noopener" href="https://github.com/gfigueras03">
                            <FaSquareGithub className='social-item' />

                        </a>
                    </div>

                </div>

            </section>
        </section>
    )
}