import { NavLink } from "react-router";
import logo from '../assets/images/layout/logo.svg';
import "./Menu.sass";
import { IoIosMenu } from "react-icons/io";
import { IoCloseOutline } from "react-icons/io5";

export default function Menu() {

    return (
        <nav className="menu">
            <button type="button" className="menu__burger-button">
                <IoIosMenu className="menu__burger-icon" />
                <IoCloseOutline className="menu__close-icon" onClick={() => document.activeElement.blur()} />
            </button>

            <ul className="menu__list">
                <li className="menu__item">
                    <NavLink to='/' className="menu__link"><img className="menu__logo" src={logo} alt="Hi Fi Horizon logo" /></NavLink>
                </li>
                <li className="menu__item">
                    <NavLink to='/shop' className="menu__link">Shop</NavLink>
                </li>
                <li className="menu__item">
                    <NavLink to='/about' className="menu__link">About Us</NavLink>
                </li>
                <li className="menu__item">
                    <NavLink to='/contact' className="menu__link">Contact Us</NavLink>
                </li>
            </ul>
        </nav>
    )
}