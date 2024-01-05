import Button from "../../components/Button";
import Input from "../../components/Input/input";
import "./index.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Form = ({ isSignedInPage = false }) => {

  
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    ...(!isSignedInPage && {
      fullName: "",
    }),
    email: "",
    password: "",
  });
  

  const handleSubmit = async (e) => {
    console.log("data :>> ", inputValue);
    e.preventDefault();
    const res = await fetch(
      `http://localhost:8000/api/${isSignedInPage ? "login" : "register"}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(inputValue),
      }
    );

    if (res.status === 400) {
      alert("Invalid credentials");
    } else {
      const resInputValue = await res.json();
      if (resInputValue.token) {
        localStorage.setItem("user:token", resInputValue.token);
        localStorage.setItem("user:detail", JSON.stringify(resInputValue.user));
        navigate("/");
      }
    }
  };

   
  const handleClick = () => {
    navigate(`/users/${isSignedInPage ? "Sign_up" : "Sign_in"}`);
  };
 
  return (
    <>
      <div className="form">
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
            <form onSubmit={(e) => handleSubmit(e)} className="inputs">
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
                  <span className="sign-up" onClick={handleClick}>
                    {isSignedInPage ? "Sign up" : "Sign in"}
                  </span>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;
