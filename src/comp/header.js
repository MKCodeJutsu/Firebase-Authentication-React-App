import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";
import "../comp/theme.css";
import { useContext } from "react";
import DataContext from "../context/Datacontext";

import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase/config';
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom"


const Header = () => {

  const navigate = useNavigate();

  const [user] = useAuthState(auth);



  
  const {
    changeTheme,
    theme,
    
  } = useContext(DataContext);
  

  return (
    <div className="myheader">
      
      <header className="hide-when-mobile">
        <h1>
          <Link to="/">Muhammed Kamel</Link>
        </h1>

        <button onClick={() => { changeTheme(theme === "Light" ? "Dark" : "Light")}}  className="theme-btn moon" type="button">
    🌙
  </button>
  <button onClick={() => { changeTheme(theme === "Light" ? "Dark" : "Light")}} className="theme-btn sun" type="button">☀️</button>
        
        <ul className="flex">


        {!user && <li className="main-list">
            <NavLink className="main-link" to="/signin">
              Sign In
            </NavLink>
            
          </li>}
          {!user && <li className="main-list">
            <NavLink className="main-link" to="/signup">
              Signup
            </NavLink>
            
          </li>}
          

          {user && <li onClick={() => { 
            signOut(auth).then(() => {
              navigate("/");
              // Sign-out successful.
            }).catch((error) => {
              // An error happened.
            });
           }} className="main-list">
            <button className="main-link signout" >
              Signout
            </button>
            
          </li>}


          {user && <li className="main-list">
            <NavLink className="main-link" to="/about">
              About
            </NavLink>
            
          </li>}
          
          {user && <li className="main-list">
            <NavLink className="main-link" to="/Profile">
              Profile
            </NavLink>
            
          </li>}
        </ul>
      </header>
      
    </div>
  );
};

export default Header;
