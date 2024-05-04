import React from 'react';
import cm from '../../modules/CustomModal.module.scss'
import logIn from '../../image/logInImage.jpeg'
import { IoMdClose } from "react-icons/io";
import TabsUserForm from '../Tabs/TabsUserForm';


const CustomModalUser = ({ isModalWindow, handleCloseWindow, handleSetUser, handleLogInUser }) => {

	return (
		<>
			{
				isModalWindow && (
					<div className={cm.modal} >
						<div className={cm.modalWrapper}>
							<div className={cm.modalContent}>
								<button className={cm.modalCloseBtn} onClick={handleCloseWindow}><IoMdClose className={cm.close} /></button>
								<div className={cm.modalImage}>
									<img src={logIn} alt="" />
								</div>
								<div className={cm.modalFormCreateAccountWrapper}>
									<TabsUserForm handleSetUser={handleSetUser} onClose={handleCloseWindow} handleLogInUser={handleLogInUser} />
								</div>
							</div>
						</div>
					</div>
				)}
		</>

	)
}
export default CustomModalUser;

