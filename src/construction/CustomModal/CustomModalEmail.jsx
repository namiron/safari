import React from "react";
import cm from "./../../modules/CustomModal.module.scss";
import { IoCloseSharp } from "react-icons/io5";
import EmailMassage from "../forms/EmailMassage";

const CustomModalEmail = ({ isOpen, onClose, emailUser }) => {


  return (
    <>
      {isOpen && (
        <div className={cm.modalEmail}>
          <div className={cm.modalWrapperEmail}>
            <div className={cm.modalContentEmail}>
              <button className={cm.modalCloseBtn} onClick={() => onClose()}>
                <IoCloseSharp />
              </button>
              <EmailMassage emailUser={emailUser} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CustomModalEmail;
