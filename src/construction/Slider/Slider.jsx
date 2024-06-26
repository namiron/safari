import React from 'react';
import Flickity from 'react-flickity-component';
import logoSlider from '../../image/LogoSlider.png'
import './slider.scss'
import girlOne from '../../image/girls-1.jpg'
import girlsTwo from '../../image/image-girl-home-1.png'
import girlsThree from '../../image/image-girl-home-2.png'
import iconsArrow from '../../image/iconSlider.png'
import flickity from '../../modules/flickity.module.scss'
import { EXPLORE_OUR_COLLECTION } from './../../common/constants'

const Slider = () => {
	const flickityOptions = {
		initialIndex: 0,
	};

	const girls = {
		id: [1, 2, 3],
		image: [girlOne, girlsTwo, girlsThree]
	}
	return (
		<div className={flickity.sliderBody}>
			<div className={flickity.container}>
				<div className={flickity.SliderTextBg}><img src={logoSlider} alt="" /></div>
				<Flickity
					className={'Slider'}
					elementType={'div'}
					disableImageLoaded={false}
					options={flickityOptions}
					reloadOnUpdate
					static
				>
					{girls['id'].map((i) => {
						return (
							<div key={i} className={flickity.slide}>
								<img src={`${girls['image'][i - 1]}`} alt="girls" />
							</div>
						)
					})}
				</Flickity >
				<div className={flickity.exploreBlock}>
					<p className={flickity.explore}>{EXPLORE_OUR_COLLECTION}</p>
					<img src={iconsArrow} alt="" />
				</div>

			</div>
		</div>

	);
};

export default Slider;