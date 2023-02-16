import React from "react";
import AuthLayout from "../../layouts/AuthLayout/AuthLayout";
import { NavLink } from "react-router-dom";

import { PATH } from "../../router/path";
import InputText from "../../components/inputs/inputText/InputText";
import * as Yup from "yup";
import { Form, Formik } from "formik";
import Button from "components/Button/Button";

const ResetPassword = () => {
  const schema = Yup.object().shape({
    password: Yup.string()
      .min(8, "Password must be at least 6 charaters")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()\-_=+{};:,<.>/?])/,
        " Uppercase, Lowercase, special caracter and numbers "
      )
      .required("Password is required"),
    confirm_password: Yup.string()
      .oneOf([Yup.ref("password"), null], "Password must match")
      .required("Confirm password is required"),
  });
  return (
    <AuthLayout
      title="Reset your password"
      description="Your account has been verified. Please enter a new password to reset your account."
    >
      <div>
        <Formik
          initialValues={{
            password: "",
            confirm_password: "",
          }}
          validationSchema={schema}
          onSubmit={() => {}}
        >
          {({ formik }) => (
            <div className="formcontainer">
              <Form>
                <div className="input-column-auth">
                  <InputText
                    name="password"
                    type="password"
                    label="new password"
                    placeholder="enter your new password"
                    reaquired={false}
                  />
                  <InputText
                    name="confirm_password"
                    type="password"
                    label="confirm your password"
                    placeholder="repeat your password"
                    reaquired={false}
                  />
                </div>

                <div className="auth-button-container">
                  <Button
                    label="reset"
                    name="confirm"
                    //loading={loading}
                    type="submit"
                    classname="btn__confirm"
                    // action={}
                  />
                </div>
              </Form>
            </div>
          )}
        </Formik>
      </div>
    </AuthLayout>
  );
};

export default ResetPassword;
