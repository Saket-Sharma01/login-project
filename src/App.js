import React, { useState } from "react";
import logo from './logo.svg';
import './App.css';
import { Login } from "./Login";
import { SignUp } from "./SignUp";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./dashboard";

function App() {
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  return (

    <div className="App">
      {/* {
        currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <SignUp onFormSwitch={toggleForm} />
      } */}


<BrowserRouter>
      <Routes>
        <Route>
          <Route path="" element={<Login/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="" element={<Login/>} />
        </Route>
      </Routes>
    </BrowserRouter>
    </div>


  );
}

export default App;