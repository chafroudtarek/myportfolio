import React from "react";
import Logo from "../../assets/icons/logo-white.png";
const NotFound = () => {
  return (
    <div className="notFound_container">
      <img src={Logo} alt="logo" />
      <p>
        You are <span>LOST.</span> Go back to the homepage.
      </p>
    </div>
  );
};

export default NotFound;
