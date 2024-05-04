import React, { useState } from 'react';
import tabForm from '../../modules/tabsForm.module.scss'
import { CREATE_ACCOUNT_BTN, LOG_IN_CONSTANTA, TABS_1, TABS_2 } from '../../common/constants';
import CreateAccount from '../forms/CreateAccount';
import CreateLogIn from '../forms/CreateLogIn';

const TabsUserForm = ({ handleSetUser, onClose, handleLogInUser }) => {
	const [activeTab, setActiveTab] = useState(TABS_1);

	const handleTabClick = (tab) => {
		setActiveTab(tab);
	};

	return (
		<div className={tabForm.tabsContainer}>
			<div className={tabForm.tabButtons}>
				<button onClick={() => handleTabClick(TABS_1)} className={`${tabForm.tabBtn} ${activeTab === TABS_1 ? tabForm.active : ''}`}>
					{LOG_IN_CONSTANTA}
				</button>
				<button onClick={() => handleTabClick(TABS_2)} className={`${tabForm.tabBtn} ${activeTab === TABS_2 ? tabForm.active : ''}`}>
					{CREATE_ACCOUNT_BTN}
				</button>
			</div>
			<div className={tabForm.tabContent}>
				{activeTab === TABS_1 && <CreateLogIn handleLogInUser={handleLogInUser} onClose={onClose} />}
				{activeTab === TABS_2 && <CreateAccount handleSetUser={handleSetUser} onClose={onClose} />}

			</div>
		</div>
	);
};

export default TabsUserForm;