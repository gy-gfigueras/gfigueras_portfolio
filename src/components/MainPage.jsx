import { useState, useEffect } from 'react';
import '../styles/mainPage.css'
import { Navbar } from './Navbar'
import { Parallax } from './Parallax'
import { FaLinkedin, FaSquareGithub } from "react-icons/fa6";

import Typed from 'react-typed'
import { LottieAnimation } from './LottieAnimation'



export function MainPage() {
    return (
        <section className='main-page'>
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
                    strings={['SOFTWARE DEVELOPER']}
                    typeSpeed={55}
                />
                        </span>
                    </h1>
                    <div className='social-network parallax' speed="2" >
                    <FaLinkedin className='social-item' />
                    <FaSquareGithub className='social-item' />
                    </div>

                </div>

            </section>
        </section>
    )
}