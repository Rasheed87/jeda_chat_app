import Button from "../../components/Button";
import Input from "../../components/Input/input";
import "./index.css";
import { useState } from "react";

const Form = ({ isSignedInPage = false }) => {
  const [inputValue, setInputValue] = useState({
    ...(isSignedInPage && { fullName: "" }),
    email: "",
    password: "",
  });

  

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted:", inputValue);

    setInputValue({
      fullName: "",
      email: "",
      password: "",
    });
  };
  return (
    <>
      <div className="form">
        <div className="form1">
          <div className="h-p">
            <h1>Welcome {isSignedInPage && "back"}</h1>
            <p className="start">
              {isSignedInPage
                ? "Sign up to get explored"
                : "Sign up to get started"}
            </p>
          </div>
          <form onSubmit={handleSubmit} className="inputs">
            {!isSignedInPage && (
              <Input
                onChange={(e) => {
                  setInputValue({ ...inputValue, fullName: e.target.value });
                }}
                value={inputValue.fullName}
                id="Full name"
                name="Full name"
                type="text"
                placeholder="Enter your full name"
                isRequired={true}
              />
            )}
            <Input
              onChange={(e) => {
                setInputValue({ ...inputValue, email: e.target.value });
              }}
              id="Email address"
              value={inputValue.email}
              name="Email address "
              type="email"
              placeholder="Enter your email"
              isRequired={true}
            />
            <Input
              onChange={(e) => {
                setInputValue({ ...inputValue, password: e.target.value });
              }}
              id="Password"
              value={inputValue.password}
              name="Password"
              type="password"
              placeholder="Enter your password"
              isRequired={true}
            />

            <div className="bb">
              <Button
                type="submit"
                label={isSignedInPage ? "Sign in" : "Sign up"}
              />

              <div className="acc">
                {isSignedInPage
                  ? "Dont have an account?"
                  : "Already have an account? "}
                <span className="sign-up">
                  {" "}
                  {isSignedInPage ? "Sign up" : "Sign in"}{" "}
                </span>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Form;
