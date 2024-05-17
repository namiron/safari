import React from 'react';
import logo from '../image/Logo.png'
import Image from './Image';
import { Link } from 'react-router-dom';


const Logo = () => {
	return (
		<Link to='/'>
			<Image image={logo} classNameBox='logo' />
		</Link>

	)
}
export default Logo;