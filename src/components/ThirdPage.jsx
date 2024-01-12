import React, {useEffect, useState} from 'react';
import '../styles/thirdPage.css';
import VanillaTilt from 'vanilla-tilt';
import { IoLogoJavascript, IoLogoHtml5, IoLogoReact , IoLogoCss3 } from "react-icons/io5";
import { FaJava } from "react-icons/fa";
import { SiKotlin } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { FaGithubSquare } from "react-icons/fa";
import { FaGitSquare } from "react-icons/fa";
import { SiAndroidstudio } from "react-icons/si";
import { FaDocker } from "react-icons/fa";
import { FaWindows } from "react-icons/fa";
import { GrArchlinux } from "react-icons/gr";
import { FaApple } from "react-icons/fa";
import { FaLinux } from "react-icons/fa";


export function ThirdPage() {

    useEffect(() => {
        VanillaTilt.init(document.querySelectorAll('.tiltCard'), {
            max: 1,
            speed: 150,
            glare: true,
            'max-glare': 0.1,
        });
    }, []);
    const [selectedId, setSelectedId] = useState(null)

    return (
        <section id='skills' className='third-page'>
            <h1 className='title'>PROJECTS AND SKILLS</h1>

            <div className="celdas">

            <div className="celda tiltCard"  >
                    <h1>FRONTEND</h1>
                    <div className="iconos">
                        <IoLogoJavascript className='icons' />
                        <IoLogoHtml5 className='icons' />
                        <IoLogoCss3  className='icons'/>
                        <IoLogoReact className='icons' />
                    </div>
                </div>

                <div className="celda tiltCard">
                <a target='_blank' rel="noreferrer noopener" className='links' href="https://github.com/GFigueras03/PracticaObligariaUniversos"></a>

                </div>

                <div className={`celda tiltCard`}  >
                    <h1>TECHNOLOGIES</h1>
                    <div className="iconos">
                        <FaDocker  className='icons'/>
                        <FaGithubSquare  className='icons'/>
                        <FaGitSquare  className='icons'/>
                        <SiAndroidstudio  className='icons'/>
                        <FaWindows  className='icons'/>
                        <GrArchlinux  className='icons'/>
                        <FaApple  className='icons'/>
                        <FaLinux className='icons' />
                    </div>
                </div>
                <div className="celda tiltCard"  >
                    <a target='_blank' rel="noreferrer noopener" className='links' href="https://gycoding.com"></a>

                </div>

                <div className="celda tiltCard" >
                <h1>BACKEND</h1>
                    <div className="iconos">
                        <FaJava  className='icons'/> 
                        <SiKotlin  className='icons'/>
                        <SiMysql  className='icons'/>
                    </div>
                </div>

                <div className="celda tiltCard" >
                    <a target='_blank' rel="noreferrer noopener" className='links' href="https://github.com/GY-CODING/login-server"></a>
                </div>


                
            </div>
        </section>
    );
}
