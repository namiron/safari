import React from 'react';
import { skeletonComponents } from '../../common/variables';
import skeleton from '../../modules/skeleton.module.scss'

export const SkeletonItem = () => {

	return (
		<div className={skeleton.itemBody}>
			<div className={skeleton.boxImage}>
			</div>
			<div className={skeleton.contentBox}>
				<h2 className={skeleton.text}></h2>
				<h3 className={skeleton.text}></h3>
			</div>
		</div>
	)
}




export const Skeleton = (props) => {
	const skeletonListQuantity = 16


	return (
		<section className={skeleton.skeletonHome}>
			<div className={skeleton.skeletonContainer}>
				<div className={skeleton.skeletonHeading}>
					<h2 className={`${skeleton.title} ${skeleton.skeletonLoader}`}></h2>
					<h3 className={`${skeleton.subTitle} ${skeleton.skeletonLoader}`}></h3>
				</div>
				<div className={skeleton.skeletonList}>
					{
						skeletonComponents(skeletonListQuantity, <SkeletonItem />)
					}
				</div>
			</div>
		</section>
	)
}


export const SkeletonCart = () => {

	return (
		<section className={skeleton.skeletonCart}>
			<div className={skeleton.skeletonCartContainer}>
				<h2 className={skeleton.skeletonCartTitleMain}></h2>
				<div className={skeleton.skeletonCartBody}>
					<article className={skeleton.skeletonCartItem} ></article>
					<article className={skeleton.skeletonCartItem}></article>
				</div>

				<div className={skeleton.skeletonCartPrices}>
					<div className={skeleton.skeletonCartTitle}></div>
					<div className={skeleton.skeletonCartNumber}></div>
				</div>
			</div>
		</section>
	)
}