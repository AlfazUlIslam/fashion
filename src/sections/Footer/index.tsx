import React from "react";
import { Container, Column } from "../../containers";
import { Title, Link, SocialIcon } from "./internals";
import { logo, facebook, linkedIn, instagram } from "../../assets";
import "./style.css";

const Footer: React.FC = () => {
  return (
    <section className="footer" id="footer">
        <Container classes="footer__container">
            {/* Menu column */}
            <Column classes="footer__menu-column">
                <Title content="Menu" />
                {/* Links */}
                <div className="footer__links">
                    <Link href="#" content="Home" />
                    <Link href="#" content="Shop" />
                    <Link href="#" content="About" />
                    <Link href="#" content="Contact" />
                    <Link href="#" content="Journal" />
                </div>
                {/* Footer menu column social icons (desktop) */}
                <div className="footer__menu-col-social-icons">
                    <SocialIcon image={facebook} altText="Facebook" />
                    <SocialIcon image={linkedIn} altText="LinkedIn" />
                    <SocialIcon image={instagram} altText="Instagram" />
                </div>
            </Column>
            {/* Shop column */}
            <Column classes="footer__shop-column">
                <Title content="Shop" />
                {/* Links */}
                <div className="footer__links">
                    <Link href="#" content="Category 1" />
                    <Link href="#" content="Category 2" />
                    <Link href="#" content="Category 3" />
                    <Link href="#" content="Category 4" />
                    <Link href="#" content="Category 5" />
                </div>
            </Column>
            {/* Help column */}
            <Column classes="footer__help-column">
                <Title content="Help" />
                {/* Links */}
                <div className="footer__links">
                    <Link href="#" content="Privacy Policy" />
                    <Link href="#" content="Terms & Conditions" />
                    <Link href="#" content="Special E-Shop" />
                    <Link href="#" content="Shipping" />
                    <Link href="#" content="Secure Payments" />
                </div>
            </Column>
            {/* Contact column */}
            <Column classes="footer__contact-column">
                <Title content="(052) 611-5711" />
                <Title content="company@domain.com" />
                <address>
                    575 Crescent Ave. Quakertown, PA 18951
                </address>
            </Column>
            {/* Brand column */}
            <Column classes="footer__brand-column">
                <div className="footer__logo">
                    <img src={logo} alt="Fashion Logo" />
                </div>
                <div className="footer__copyright-text">
                    2020 Orebi Minimal eCommerce Figma Template by Adveits
                </div>
                {/* Footer brand column social icons */}
                <div className="footer__brand-col-social-icons">
                    <SocialIcon image={facebook} altText="Facebook" />
                    <SocialIcon image={linkedIn} altText="LinkedIn" />
                    <SocialIcon image={instagram} altText="Instagram" />
                </div>
            </Column>
        </Container>
    </section>
  )
}
export default Footer