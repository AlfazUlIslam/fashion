import React from "react";
import { Container } from "../../containers"
import NavLink from "./NavLink"
import NavBtn from "./NavBtn"
import { logo } from "../../assets"
import "./style.css"

const Nav: React.FC = () => {
    const [toggle, setToggle] = React.useState<boolean>(false)

    const handleToggle = () => {
        setToggle(prev => !prev)
    }
        
    return (
        // Nav
        <nav className="nav">
            {/* Nav container */}
            <Container classes="nav__container">
                {/* Nav logo */}
                <div className="nav__logo">
                    <img src={logo} alt="Fashion Logo" />
                </div>
                {/* Nav menu */}
                <div className="nav__menu">
                    <div className="nav__links">
                        <NavLink href="#hero" content="Home" />
                        <NavLink href="#collection" content="Collection" />
                        <NavLink href="#about" content="About" />
                        <NavLink href="#trends" content="Trends" />
                        <NavLink href="#footer" content="Contact" />
                    </div>
                    <div className="nav__menu-btns">
                        <NavBtn content="Login" />
                        <NavBtn content="Sign up" />
                    </div>
                </div>
                {/* Nav mobile menu container */}
                <div className="nav__mobile-menu-container">
                    {/* Nav mobile menu button */}
                    <button 
                        className={`nav__mobile-menu-btn 
                        ${toggle ? "nav__mobile-menu-btn--toggled" : ""}`}
                        onClick={handleToggle}
                    >
                        <div></div>
                        <div></div>
                        <div></div>
                    </button>
                    {/* Nav mobile menu */}
                    <div className={`nav__mobile-menu 
                    ${toggle ? "nav__mobile-menu--flex" : 
                    "nav__mobile-menu--hidden"}`}>
                        <div className="nav__mobile-menu-links">
                            <NavLink href="#hero" content="Home" />
                            <NavLink href="#collection" content="Collection" />
                            <NavLink href="#about" content="About" />
                            <NavLink href="#trends" content="Trends" />
                            <NavLink href="#footer" content="Contact" />
                        </div>
                        <div className="nav__mobile-menu-btns">
                            <NavBtn content="Login" />
                            <NavBtn content="Sign up" />
                        </div>
                    </div>
                </div>
            </Container>
        </nav>
    )
}
export default Nav