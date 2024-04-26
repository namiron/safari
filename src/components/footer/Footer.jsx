import React from 'react';
import Logo from './../../construction/Logo';
import footer from '../../modules/footer.module.scss'
import { Facebook, Twitter, Instagram } from './../../construction/Links';
import AboutUs from '../pages/informations/AboutUs';
import Contact from './../pages/informations/Contact';
import { Link } from 'react-router-dom'
import Terms from '../pages/informations/Terms';
import { Email } from '../../construction/forms/Email';
import { FACEBOOK, INSTAGRAM, TWITTER } from '../../common/constants';


const Footer = (props) => {
	return (
		<section className={footer.footer} >
			<div className={footer.container}>
				<Logo />
				{/* <div className={footer.informations}>
					<Link to='/about_us'><AboutUs /></Link>
					<Link to='/contact'><Contact /></Link>
					<Link to='/terms'><Terms /></Link>
				</div> */}
				<div className={footer.social}>
					<Facebook text={FACEBOOK} />
					<Twitter text={TWITTER} />
					<Instagram text={INSTAGRAM} />
				</div>
				<Email />
				<div className={footer.thank}>
					thank you for visiting my site!
					<a href="mailto:samsonov.oleksandr95@gmail.com">
						<br />
						samsonov.oleksandr95@gmail.com
					</a>
				</div>

			</div>
		</section >
	)
}
export default Footer;