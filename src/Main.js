import './index.css';
import fire from './fire';
import React,{useState,useEffect} from 'react';
import Signin from './Signin';
import Home from './Home';
 
const Main=()=> {
  const [user,setuser]=useState("");
  const [email,setemail]=useState("");
  const [password,setpassword]=useState("");
  const [emailError,setemailError]=useState("");
  const [passwordError,setpasswordError]=useState("");
    const clearInput =()=>{
    setemail('');
    setpassword('');
  }
  const clearError =()=>{
    setemailError('');
    setpasswordError('');
  }
  const handleLogin=()=>{
    clearError();
    fire
    .auth()
    .signInWithEmailAndPassword(email,password)
    .catch(err=>{
      switch(err.code){
        case "auth/invalid-email":
        case "auth/user-disabled":
        case "auth/user-not-found":
        setemailError(err.message);
        break;
        case "auth/wrong-password":
        setpasswordError(err.message);
        break;
      }
    });
  };
  
  const handleLogout=()=>{
fire.auth().signOut();
  };
  const authListener=()=>{
    fire.auth().onAuthStateChanged(user=>{
if(user){
  clearInput();
  setuser(user);
 } else{
    setuser("");
  }
}
  );
      };
useEffect(()=>{
authListener();
      },[]);
  return (
    <div className="App">
    {user ? (
      <><Home handleLogout={handleLogout}/>
       
      </>):(
    <Signin   
    email={email}
    setemail={setemail}
    password={password}
    setpassword={setpassword}
    emailError={emailError}
    passwordError={passwordError}
    handleLogin={handleLogin}/>
    )}
  
    </div>
   
  );
};

export default Main;
