import '../styles/secondPage.css'
import profileImage from '../assets/profileImage3.webp'
const desc = "Entusiasta de la tecnología que desde su infancia ha desarrollado una pasión por el hardware y el ensamblaje de ordenadores. Como técnico en sistemas microinformáticos y redes, encuentra satisfacción resolviendo desafíos tecnológicos. <br /><br />Actualmente, se encuentra en su segundo año de estudios en desarrollo de aplicaciones multiplataforma y cuenta con experiencia en Java/Kotlin, SQL y CSS. <br /><br />Su dedicación y conocimientos en el mundo de la tecnología son la base para aportar soluciones innovadoras a cualquier proyecto."
export const SecondPage = () => {
    return (
        <section id='about' className='second-page'>
            <header className='second-page-header'>
            </header>
            <div className="second-page-body">
                <div className="left-side-about">
                    <h1>ABOUT ME</h1>
                    <p dangerouslySetInnerHTML={{ __html: desc }}></p>
                    <button className='download-cv'>DOWNLOAD CV</button>
                    

                </div>
                <div className="right-side-about">
                    <img className='profile-img' src={profileImage} alt="" />
                </div>
            </div>
        </section>
    )
}