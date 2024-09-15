import React from "react";
import Logo from "./../../construction/Logo";
import footer from "../../modules/footer.module.scss";
import { Facebook, Twitter, Instagram } from "./../../construction/Links";
import { Email } from "../../construction/forms/Email";
import { FACEBOOK, INSTAGRAM, TWITTER } from "../../common/constants";

const Footer = () => {
  return (
    <section className={footer.footer}>
      <div className={footer.container}>
        <Logo />
        <div className={footer.social}>
          <Facebook text={FACEBOOK} />
          <Twitter text={TWITTER} />
          <Instagram text={INSTAGRAM} />
        </div>
        <Email />
        <div className={footer.thank}>
          thank you for visiting my site!
          <a href="mailto:alexandersam.dev@gmail.com">
            <br />
            <span className={footer.emailText}>alexandersam.dev@gmail.com</span> 
          </a>
        </div>
      </div>
    </section>
  );
};
export default Footer;
