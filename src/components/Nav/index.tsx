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
        <nav className="Nav">
            {/* Nav container */}
            <Container classes="NavContainer">
                {/* Nav logo */}
                <div className="NavLogo">
                    <img src={logo} alt="Fashion Logo" />
                </div>
                {/* Nav menu */}
                <div className="NavMenu">
                    <div className="NavLinks">
                        <NavLink href="#hero" content="Home" />
                        <NavLink href="#collection" content="Collection" />
                        <NavLink href="#about" content="About" />
                        <NavLink href="#trends" content="Trends" />
                        <NavLink href="#footer" content="Contact" />
                    </div>
                    <div className="NavMenuBtns">
                        <NavBtn content="Login" />
                        <NavBtn content="Sign up" />
                    </div>
                </div>
                {/* Nav mobile menu container */}
                <div className="NavMobileMenuContainer">
                    {/* Nav mobile menu button */}
                    <button 
                        className={`NavMobileMenuBtn 
                        ${toggle ? "NavMobileMenuBtnToggled" : ""}`}
                        onClick={handleToggle}
                    >
                        <div></div>
                        <div></div>
                        <div></div>
                    </button>
                    {/* Nav mobile menu */}
                    <div className={`NavMobileMenu 
                    ${toggle ? "NavMobileMenuFlex" : 
                    "NavMobileMenuHidden"}`}>
                        <div className="NavMobileMenuLinks">
                            <NavLink href="#hero" content="Home" />
                            <NavLink href="#collection" content="Collection" />
                            <NavLink href="#about" content="About" />
                            <NavLink href="#trends" content="Trends" />
                            <NavLink href="#footer" content="Contact" />
                        </div>
                        <div className="NavMobileMenuBtns">
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