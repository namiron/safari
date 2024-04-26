
import React from 'react';
import cm from './../../modules/CustomModal.module.scss';
import CreateComments from '../review/CreateComments';
import { IoCloseSharp } from "react-icons/io5";


const CustomModal = ({
	isOpen,
	onClose,
	rating,
	id,
	comments
}) => {

	return (
		<>
			{isOpen && (
				<div className={cm.modal}>
					<div className={cm.modalWrapper}>
						<div className={cm.modalContent}>
							<button className={cm.modalCloseBtn} onClick={() => onClose()}><IoCloseSharp /></button>
							<CreateComments
								rating={rating}
								id={id}
								comments={comments}
								onClose={onClose}
							/>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default CustomModal;