import Header from "../comp/header";
import Footer from "../comp/footer";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/config";

import { useNavigate } from "react-router-dom";

import { useEffect } from "react";

import { sendEmailVerification } from "firebase/auth";

import Loading from "../comp/Loading";
import Error404 from "./error404";

const Home = () => {
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  console.log(user);
  // Show Home Page Untill The User Is Signed In
  useEffect(() => {
    auth.onAuthStateChanged(() => {
      if (!user && !loading) {
        navigate("/");
      }
    });
  }); // Empty Dependency Array to Run Only Once


// Verify Email Function For Verify email Button
  const verifyEmailBTN = (second) => {
    sendEmailVerification(auth.currentUser).then(() => {
      // Email verification sent!

      console.log("Email Verification Sent!");
      // ...
    });
  };

  // Show Loading While User Is Authenticating
  if (loading) {
    return <Loading />;
  }
  if (!user) {
    return (
      <div>
        <Header />

        <main>
          <span className="account">
            Welcome To My React Project  <span>
              <i className="fa-solid fa-heart"></i>
            </span>
          </span>
          <p>
            Please <span />
              <Link
                style={{
                  color: "teal",
                  textDecoration: "underline",
                  cursor: "pointer",
                }}
                to={"/signin"}
              >
                Sign In
              </Link>{" "}
              <span />
              to view the home page content.{" "}
              <span>
                <i className="fa-solid fa-heart"></i>
              </span>
          </p>
        </main>
        <Footer />
      </div>
    );
  }
  if (user) {
    if (user.emailVerified) {
      return (
        <div>
          <Header />
          <main>
            <span className="account">Welcome, {user.displayName}! <span>
              <i className="fa-solid fa-heart"></i>
            </span></span>
            <h1>Thanks For Using Our Services <span>
              <i className="fa-solid fa-heart"></i>
            </span></h1>
          </main>
          <Footer />
        </div>
      );
    }
    if (!user.emailVerified) {
      return (
        <div>
          <Helmet>
            <title>Home Page</title>
            <meta name="description" content="Home Page" />
          </Helmet>
          <Header />
          <main>
            <h1>Welcome {user.displayName} <span>
              <i className="fa-solid fa-heart"></i>
            </span> <span>
              <i className="fa-solid fa-heart"></i>
            </span>  Email Verification is Required</h1>
            <span>Please Check Your Email and Verify Your Account</span>
            <button
              className="delete"
              onClick={() => {
                verifyEmailBTN();
              }}
            >
              Verify Email
              <a href={user.emailVerificationLink}>
                {" "}
                (link will expire in 24 hours)
              </a>
            </button>
          </main>
          <Footer />
        </div>
      );
    }
  }

  // Show Error If User Authentication Fails
  if (error) {
    return <Error404/>;
  }
};

export default Home;
