import Header from "../comp/header";
import Footer from "../comp/footer";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import "./info.css";
import {
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";
import { auth } from "../firebase/config";
import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "../comp/Loading";

import Error404 from "./error404";

export default function Signin() {
  const [user, loading, error] = useAuthState(auth);
  const [email, setemail] = useState("");
  const [resetPass, setresetPass] = useState("");
  const [password, setpassword] = useState("");
  const [errorMessage, seterrorMessage] = useState();
  const [hasError, sethasError] = useState();
  const [showSendEmailMsg, setshowSendEmailMsg] = useState(false);
  const [show, setShow] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    if (user) {
      navigate("/");
    }
  });

  // Forgot Password Function For Forgot passowrd Button
  const forgotPassBTN = () => {
    sendPasswordResetEmail(auth, resetPass)
      .then(() => {
        // Password reset email sent!
        setshowSendEmailMsg(true);
        console.log("Email sent!");
        //..
        // ..
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(errorCode, errorMessage);
      });
  };


  // Signin Function For Signin Button

  const signInBTN = (eo) => {
    eo.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // navigate("/");
        console.log(user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        sethasError(true);
        switch (errorCode) {
          case "auth/invalid-email":
            seterrorMessage("Invalid Email");

            break;

          case "auth/invalid-credential":
            seterrorMessage("Invalid Email");
            break;

          case "auth/user-not-found":
            seterrorMessage("User Not Found");
            break;

          default:
            seterrorMessage("Please Check Your Email/Password....");
            break;
        }
      });
  };

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error404/>;
  }

  if (!user) {
    return (
      <>
        <Header />
        <Helmet>
          <title>Sign in Page </title>
        </Helmet>
        <main>
          <form action="">
            <input
              onChange={(eo) => {
                setemail(eo.target.value);
              }}
              placeholder="Email..."
              type="email"
              required
            />
            <input
              onChange={(eo) => {
                setpassword(eo.target.value);
              }}
              placeholder="Password..."
              type="password"
              required
            />
            <button onClick={(eo) => {
              signInBTN(eo)
            }}>Sign In</button>
            {user && <p> Succefully Logged In</p>}
            {hasError && <p>{errorMessage}</p>}

            <p className="account">
              Don't Have An Account <Link to={"/signup"}>Sign Up</Link>{" "}
            </p>
            <p
              onClick={() => {
                setShow("show");
              }}
              className="forgot-pass"
            >
              Forgot Password !
            </p>
          </form>

          <form className={`popup-forgot-password ${show}`}>
            <div className="close">
              <i
                onClick={() => {
                  setShow("");
                }}
                className="fa-solid fa-xmark"
              ></i>
            </div>
            <input
              onChange={(eo) => {
                setresetPass(eo.target.value);
              }}
              type="email"
              placeholder="Email..."
              required
            />
            <button
              onClick={() => {
                forgotPassBTN();
              }}
            >
              Forgot Password
            </button>
            {showSendEmailMsg && (
              <p className="msg">
                Please check your email to reset your password
              </p>
            )}
          </form>
        </main>
        <Footer />
      </>
    );
  }
}
