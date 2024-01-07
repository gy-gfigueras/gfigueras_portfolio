import '../styles/navbar.css'

export function NavbarListComponent({text, link}){
    return(
        <li className="li-navbar-item">
            <a href={link}>{text}</a>
        </li>
    )
}