import '../styles/secondPage.css'
import profileImage from '../assets/profileImage.png'
import profileImage2 from '../assets/profileImage2.png'
import profileImage3 from '../assets/profileImage3.png'
const desc = "Entusiasta de la tecnología que desde su infancia ha desarrollado una pasión por el hardware y el ensamblaje de ordenadores. Como técnico en sistemas microinformáticos y redes, encuentra satisfacción resolviendo desafíos tecnológicos"
const desc2 = "Actualmente, se encuentra en su segundo año de estudios en desarrollo de aplicaciones multiplataforma y cuenta con experiencia en Java/Kotlin, SQL y CSS."
const desc3 = "Su dedicación y conocimientos en el mundo de la tecnología son la base para aportar soluciones innovadoras a cualquier proyecto."
export const SecondPage = () => {
    return (
        <section id='about' className='second-page'>
            <header className='second-page-header'>
            </header>
            <div className="second-page-body">
                <div className="left-side-about">
                    <h1>ABOUT ME</h1>
                    <p>{desc}</p>
                    <p>{desc2}</p>
                    <p>{desc3}</p>
                    <button className='download-cv'>DOWNLOAD CV</button>
                    

                </div>
                <div className="right-side-about">
                    <img className='profile-img' src={profileImage3} alt="" />
                </div>
            </div>
        </section>
    )
}