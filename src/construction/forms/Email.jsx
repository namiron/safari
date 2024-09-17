import React, { useState } from "react";
import email from "../../modules/email.module.scss";
import CustomModalEmail from "../CustomModal/CustomModalEmail";

export const Email = (props) => {
  //-----------------------
  const [emailText, setEmailText] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const getData = () => {
    if (emailText.length > 0) {
      setIsOpen(!isOpen);
    } else {
      setIsOpen(false);
    }
  };
  const setStatusModal = () => {
    setIsOpen(false);
    setEmailText('')
  };
  //-----------------------

  return (
    <div className={email.emailBox}>
      <h2 className={email.subscribe}>Subscribe to our news letter</h2>
      <div className={email.email}>
        <input
          type="email"
          placeholder="Email Address"
          value={emailText}
          onChange={(e) => setEmailText(e.target.value)}
        />
        <button className={email.emailBtn} onClick={getData}>
          OK
        </button>
        <CustomModalEmail
          isOpen={isOpen}
          onClose={setStatusModal}
          emailUser={emailText}
        />
      </div>
    </div>
  );
};
