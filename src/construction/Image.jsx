import React from 'react';
import dress from '../image/dress.jpg'

import img from '../modules/images.module.scss'

const Image = ({ image, classNameBox }) => {
	return (
		<div  >
			<div className={`${img[classNameBox]}`}>
				<img src={!image || image === '' ? dress : image}
					alt="itemContent" />
			</div>
		</div>
	)
}
export default Image;