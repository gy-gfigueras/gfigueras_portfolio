import React, {useEffect} from 'react';
import '../styles/thirdPage.css';
import VanillaTilt from 'vanilla-tilt';




export function ThirdPage() {

    useEffect(() => {
        VanillaTilt.init(document.querySelectorAll('.tiltCard'), {
            max: 1,
            speed: 150,
            glare: true,
            'max-glare': 0.1,
        });
    }, []);
    return (
        <section id='skills' className='third-page'>
            <div className="celdas">
                <div className="celda tiltCard">
                </div>

                <div className={`celda col-span-2 tiltCard`}>
                </div>

                <div className="celda tiltCard"  >
                </div>

                <div className="celda col-span-2 tiltCard" >
                </div>

                <div className="celda tiltCard"  >
                    <h1>FRONTEND</h1>
                </div>

                <div className="celda tiltCard">
                    <h1>BACKEND</h1>
                </div>

                <div className={`celda tiltCard`}  >
                    <h1>TECHNOLOGIES</h1>
                </div>
            </div>
        </section>
    );
}
