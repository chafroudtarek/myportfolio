import React from "react";

import logo from "../../assets/icons/logo-white.png";

function AuthLayout({ children, title, description }) {
  return (
    <div className="authlayout">
      <div className="authlayout__content">
        <div className="authlayout__content-section-one">
          <div className="authlayout__content-section-one--logo">
            <img src={logo}  height={500} />
          </div>

          <div className="authlayout__content-section-one--description">
            <p>Welcome!</p>
            <p>
              To stay in touch with us, please log in with your personal
              information.
            </p>
          </div>
        </div>
        <div className="authlayout__content-section-two">
          <div className="authlayout__content-header">
            <p className="authlayout__content-header-title">{title}</p>
          </div>
          <div className="authlayout__content-form">{children}</div>
        </div>
      </div>
    </div>
  );
}

export default AuthLayout;
