import React from "react";
import { GrStatusGood } from "react-icons/gr";
import { EMAIL_MESSAGE, THANK_YOU } from "../../common/constants";
import messem from "../../modules/messem.module.scss";

const EmailMassage = ({ emailUser }) => {
  return (
    <div className={messem.messageWrapper}>
      <GrStatusGood className={messem.thankYou} />
      <h2 className={messem.thankYouTitle}>{THANK_YOU}</h2>
      <p className={messem.thankText}>
        {EMAIL_MESSAGE} <span>{emailUser}</span>
      </p>
    </div>
  );
};

export default EmailMassage;
