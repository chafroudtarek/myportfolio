import React from "react";
import AuthLayout from "../../layouts/AuthLayout/AuthLayout";
import { NavLink } from "react-router-dom";

import { PATH } from "../../router/path";
import InputText from "../../components/inputs/inputText/InputText";
import * as Yup from "yup";
import { Form, Formik } from "formik";
import Button from "../../components/Button/Button";

const Login = () => {
  const schema = Yup.object().shape({
    name: Yup.string()
      .trim()
      .min(3, "at least 6 characters")
      .required("name is required"),
    email: Yup.string().email("Email is invalid").required("Email is required"),
    password: Yup.string()
      .min(8, "Password must be at least 6 charaters")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()\-_=+{};:,<.>/?])/,
        " Uppercase, Lowercase, special caracter and numbers "
      )
      .required("Password is required"),
    confirm_password: Yup.string()
      .oneOf([Yup.ref("password")], "Password must match")
      .required("Confirm password is required"),
  });
  return (
    <AuthLayout
      title="Sign up"
      description="Let's get started! Please fill out the form to register for a new account"
    >
      <div>
        <Formik
          initialValues={{
            name: "",
            email: "",
            password: "",
            confirm_password: "",
          }}
          validationSchema={schema}
          onSubmit={(values) => {
            console.log("values Signup", values);
          }}
        >
          {(formik :any ) => (
            <div className="formcontainer">
              <Form>
                <div className="input-column-auth">
                  <InputText
                    name="name"
                    type="text"
                    label="username or email"
                    placeholder="enter your username "
                    reaquired={false}
                  />
                  <InputText
                    name="email"
                    type="text"
                    label="email"
                    placeholder="enter your email"
                    reaquired={false}
                  />
                  <InputText
                    name="password"
                    type="password"
                    label="password"
                    placeholder="Password"
                    reaquired={false}
                  />
                  <InputText
                    name="confirm_password"
                    type="password"
                    label="Confirm password"
                    placeholder="Password"
                    reaquired={false}
                  />
                </div>

                <div className="auth-button-container">
                  <Button
                    label="Sign up"
                    name="confirm"
                    //loading={loading}
                    type="submit"
                    className="btn__confirm"
                    // action={}
                  />
                </div>
                <div className="form-footer">
                  <p>You have an account?</p>
                  <p>
                    <NavLink to="/login">Login now</NavLink>
                  </p>
                </div>
              </Form>
            </div>
          )}
        </Formik>
      </div>
    </AuthLayout>
  );
};

export default Login;
