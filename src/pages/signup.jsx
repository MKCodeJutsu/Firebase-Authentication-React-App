import Header from "../comp/header";
import Footer from "../comp/footer";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { auth } from "../firebase/config";

import { useState } from "react";

import {
  updateProfile,
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";

import { useNavigate } from "react-router-dom";

import { useAuthState } from "react-firebase-hooks/auth";
import { useEffect } from "react";

import Loading from "../comp/Loading";

import Error404 from "./error404";

export default function Signup() {
  const navigate = useNavigate();
  const [user, loading, error] = useAuthState(auth);

  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [hasError, sethasError] = useState();
  const [errorMessage, seterrorMessage] = useState();
  const [userName, setuserName] = useState();
  const [phone, setPhone] = useState();
  useEffect(() => {
    if (user) {
      navigate("/");
    }
    
    
  });


// Sign Up Function For The SignUp Button
  const signUpBTN = (eo) => { 
    eo.preventDefault();

                createUserWithEmailAndPassword(auth, email, password)
                  .then((userCredential) => {
                    // Signed up
                    const user = userCredential.user;
                    console.log(user);
                    sendEmailVerification(auth.currentUser).then(() => {
                      console.log("Email verification sent!");
                      // ...
                    });

                    updateProfile(auth.currentUser, {
                      displayName: userName,
                      phoneNumber: phone,
                    })
                      .then(() => {
                        // Profile updated!
                        // ...
                      })
                      .catch((error) => {
                        // An error occurred
                        // ...
                      });
                    console.log("Done");
                    

                    // ...
                  })
                  .catch((error) => {
                    const errorCode = error.code;
                    console.log(errorCode);
                    sethasError(true);
                    switch (errorCode) {
                      case "auth/invalid-email":
                        seterrorMessage("Invalid Email");

                        break;

                      case "auth/invalid-credential":
                        seterrorMessage("Invalid Email");
                        break;

                      case "auth/weak-password":
                        seterrorMessage("Weak Password");
                        break;

                      default:
                        seterrorMessage("Please Check Your Email/Password....");
                        break;
                    }
                    // ..
                  });
   }

  //Loading

  //Not Sign In

  //Sign in Without email verfication

  // sign in && email verified email  => navigate()
  if (loading) {
    return (
      <Loading/>
    );
  }
  if (error) {
    return <Error404/>;
  }

  if (!user) {
    return (
      <>
        <Header />
        <Helmet>
          <title>Sign Up Page </title>
        </Helmet>
        <main>
          <form action="">
            <p style={{ fontSize: "23px", marginBottom: "22px" }}>
              Create A New Account ...<span><i class="fa-solid fa-heart"></i></span>
            </p>
            <input
              onChange={(eo) => {
                setuserName(eo.target.value);
              }}
              id="username"
              placeholder="User Name..."
              type="text"
              required
            />
            <input
              onChange={(eo) => {
                setemail(eo.target.value);
              }}
              id="email"
              placeholder="Email..."
              type="email"
              required
            />
            <input
              onChange={(eo) => {
                setPhone(eo.target.value);
              }}
              id="phonenumber"
              placeholder="Phone..."
              type="number"
              required
            />
            <input
              onChange={(eo) => {
                setpassword(eo.target.value);
              }}
              id="password"
              placeholder="Password..."
              type="password"
              required
            />
            <button
              onClick={(eo) => {
                signUpBTN(eo)
              }}
            >
              Sign Up
            </button>
            {hasError && <p>{errorMessage}</p>}
            <p className="account">
              Already have an account ... <Link to={"/signin"}>Sign In</Link>{" "}
            </p>
          </form>
        </main>
        <Footer />
      </>
    );
  }
}
