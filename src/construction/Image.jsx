import React from 'react';
import dress from '../image/dress.jpg'
import { Link } from 'react-router-dom';
import img from '../modules/images.module.scss'

const Image = ({ image, classNameBox }) => {
	return (
		<Link to='/safari'  >
			<div className={`${img[classNameBox]}`}>
				<img src={!image || image === '' ? dress : image}
					alt="itemContent" />
			</div>
		</Link>
	)
}
export default Image;