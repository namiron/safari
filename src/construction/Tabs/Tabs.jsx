import React, { useState } from 'react';
import tabs from '../../modules/tabs.module.scss'
import TabOne from './TabOne';
import TabTwo from './TabTwo';
import TabsThree from './TabsThree';
import { GENERAL_INFO, PRODUCT_DETAILS, REVIEWS, TABS_1, TABS_2, TABS_3 } from '../../common/constants';

const Tabs = ({ image = [], size, color, price, id, rating, comments = [], title }) => {

	const [activeTab, setActiveTab] = useState(TABS_1);

	const handleTabClick = (tab) => {
		setActiveTab(tab);
	};

	return (
		<div className={tabs.tabsContainer}>
			<div className={tabs.tabButtons}>
				<button onClick={() => handleTabClick(TABS_1)} className={`${tabs.tabBtn} ${activeTab === TABS_1 ? tabs.active : ''}`}>
					{GENERAL_INFO}
				</button>
				<button onClick={() => handleTabClick(TABS_2)} className={`${tabs.tabBtn} ${activeTab === TABS_2 ? tabs.active : ''}`}>
					{REVIEWS}
				</button>
				<button onClick={() => handleTabClick(TABS_3)} className={`${tabs.tabBtn} ${activeTab === TABS_3 ? tabs.active : ''}`}>
					{PRODUCT_DETAILS}
				</button>
			</div>
			<div className={tabs.tabContent}>
				{activeTab === TABS_1 && <TabOne image={image} size={size} color={color} price={price} id={id} rating={rating} title={title} />}
				{activeTab === TABS_2 && <TabTwo image={image} rating={rating} comments={comments} id={id} />}
				{activeTab === TABS_3 && <TabsThree title={title} />}
			</div>
		</div>
	);
};

export default Tabs;
