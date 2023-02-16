import React from "react";
import { LoadingButton } from "@mui/lab";
const Button = ({ label, name, type, loading, classname, style, action }) => {
  return (
    <LoadingButton
      type="submit"
      id="clickableButton"
      className="btn__confirm"
      style={style}
      loading={loading}
      sx={{ ...style, textTransform: "none" }}
      name={name}
    >
      <span className={loading ? "isLoading" : ""} onClick={action}>
        {label}
      </span>
    </LoadingButton>
  );
};

export default Button;
