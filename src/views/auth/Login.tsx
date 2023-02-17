import React from "react";
import AuthLayout from "../../layouts/AuthLayout/AuthLayout";
import { NavLink } from "react-router-dom";


import InputText from "../../components/inputs/inputText/InputText";
import * as Yup from "yup";
import { Form, Formik } from "formik";
import Button from "../../components/Button/Button";
import useAuth from "../../core/auth/useAuth";
import { toast } from "react-toastify";

const Login = () => {
  const { jwt } = useAuth({})
  const schema = Yup.object().shape({
    email: Yup.string().email().required("Email is required"),
    password: Yup.string()
      .min(1, "Password must be at least 6 charaters")
      .required("Password is required"),
  });
  return (
    <AuthLayout
      title="Log in"
      description="Good to see you again! Please enter your username and password to log in."
    >
      <div>
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={schema}
          onSubmit={(values) => {
            jwt.login(values).then(()=> {
              toast.success('Login successfully',{ autoClose: 500 })
            }).catch((e)=> { console.log('error here',e)
            toast.error(e.response.data.message,{ autoClose: 500 })})
           
          }}
        >
          {(formik :any) => (
            <div className="formcontainer">
              <Form>
                <div className="input-column-auth">
                  <InputText
                    name="email"
                    type="text"
                    label=" email"
                    placeholder="enter your email "
                    reaquired={false}
                  />
                  <InputText
                    name="password"
                    type="password"
                    label="password"
                    placeholder="Password"
                    reaquired={false}
                  />
                </div>
                <div className="auth-options">
                  <div className="remember-me">
                    <input type="checkbox" />
                    <label>Remeber me</label>
                  </div>
                  <span className="forget-password ">
                    <NavLink to="/forgetpassword">forget password ?</NavLink>
                  </span>
                </div>
                <div className="auth-button-container">
                  <Button
                    label="Log in"
                    name="confirm"
                    //loading={loading}
                    type="submit"
                    className="btn__confirm"
                    // action={}
                  />
                </div>
                <div className="form-footer">
                  <p>Dont have an account?</p>
                  <p>
                    <NavLink to="/signup">Create an account</NavLink>
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
