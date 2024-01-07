import { NavbarListComponent } from './NavbarListComponent'
import headerLogo from '../assets/gfigueras.png'
import '../styles/navbar.css'

export function Navbar(){
    return(
        <header className='header'>
            <img className="header-logo" src={headerLogo} alt="" />
           <ul className='ul-navbar'>
                <NavbarListComponent text="HOME" link=""/>
                <NavbarListComponent text="ABOUT" link=""/>
                <NavbarListComponent text="PROJECTS" link=""/>
                <NavbarListComponent text="SKILLS" link=""/>
            </ul>
        </header>
    )
}