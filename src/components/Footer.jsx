import '../styles/footer.css'
import { FaLinkedin, FaSquareGithub } from "react-icons/fa6";

export function Footer(){
    return(
        <footer className="footer">
            <div className="top">
            <a target='_blank' rel="noreferrer noopener" href="https://www.linkedin.com/in/gfigueras/">
                            <FaLinkedin className='social-item' />
                        </a>
                        <a target='_blank' rel="noreferrer noopener" href="https://github.com/gfigueras03">
                            <FaSquareGithub className='social-item' />

                        </a>
            </div>
            <div className="bottom">
                @GFIGUERAS 2024
            </div>
        </footer>
    )
}