import React from "react";
import email from "../../modules/email.module.scss";

export const Email = (props) => {
  return (
    <div className={email.emailBox}>
      <h2 className={email.subscribe}>Subscribe to our news letter</h2>
      <div className={email.email}>
        <input type="email" placeholder="Email Address" />
        <button className={email.emailBtn}>OK</button>
      </div>
    </div>
  );
};
