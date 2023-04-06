import React, { useState, useEffect } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import Dashboard from "./dashboard";
import {useNavigate} from "react-router-dom"
export const Login = (props) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [savePass, setSavePass] = useState(false);
  const [captchaToken, setCaptchaToken] = useState("");
const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);

      localStorage.setItem("email", email);
      localStorage.setItem("pass", pass);
    
    console.log("Captcha Token: ", captchaToken);
  };

  const handleSavePass = () => {
    setSavePass(!savePass);
  };

const handleRoute = () =>{
  navigate("/dashboard");
}

  const handleCaptchaChange = (token) => {
    setCaptchaToken(token);
    setTimeout(() => {
      setCaptchaToken("");
    }, 60000); // expire after 1 minute
  };

  return (
    <div className="auth-form-container">
      <h2>Login</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <label htmlFor="email">email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="youremail@gmail.com"
          id="email"
          name="email"
        />
        <label htmlFor="password">password</label>
        <input
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          type="password"
          placeholder="********"
          id="password"
          name="password"
        />
        <div>
          <input
            type="checkbox"
            id="save-password"
            name="save-password"
            checked={savePass}
            onChange={handleSavePass}
          />
          <label htmlFor="save-password">Save password</label>
        </div>
        <ReCAPTCHA
          sitekey="6LcXO2AlAAAAANN80vZT7Z8y9J4SfizEk5I8mE-y"
          onChange={handleCaptchaChange}
        />
        
          <input type="submit" onClick={()=>handleRoute()}  value="Log In" />
        
      </form>
      <button
        className="link-btn"
        onClick={() => props.onFormSwitch("register")}
      >
        Don't have an account? Register here.
      </button>
    </div>
  );
};
