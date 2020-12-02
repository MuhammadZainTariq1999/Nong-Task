import './index.css';
import React,{useState,useEffect} from 'react';
const Signin=(props)=> {
  return (
   <section className="login">
      <div className="loginContainer">
      <h1>Nong Login</h1>
          <label>Username</label>
          <input type="text"
          autoFocus
          required
          value={props.email} onChange={(e)=>props.setemail(e.target.value)}
          />
          <p className="errorMsg">{props.emailError}</p>
          <label>Password</label>
          <input type="password"
          required
          value={props.password} onChange={(e)=>props.setpassword(e.target.value)}
          />
          <p className="errorMsg">{props.passwordError}</p>
          <div className="btnContainer">
         
            <button onClick={props.handleLogin}>Sign in </button>
           
           
          </div>
      </div>
   </section>
  );
};

export default Signin;
