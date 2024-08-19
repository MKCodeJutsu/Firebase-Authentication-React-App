import Header from "../comp/header";
import Footer from "../comp/footer";
import "./info.css";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase/config";
import { useAuthState } from "react-firebase-hooks/auth";
import { useEffect } from "react";
import Loading from "../comp/Loading";
import Moment from "react-moment";
import { deleteUser } from "firebase/auth";

import Error404 from "./error404";

export default function Profile() {
  const userS = auth.currentUser;
  const navigate = useNavigate();
  //function using userAuthState for all user , loading, error
  const [user, loading, error] = useAuthState(auth);
  useEffect(() => {
    if(!user && !loading) {
      navigate("/");
    }
    
    
  });

  // Delete Account Function For Delete Button
  const deleteAccBTN = (eo) => {
    eo.preventDefault();
    deleteUser(userS)
      .then(() => {
        // User deleted.
        console.log("User is deleted");
        navigate("/");
      })
      .catch((error) => {
        // An error ocurred
        console.error("Error deleting user:", error);
        // ...
      });
  };
  //if user is not logged in then navigate to home page
  if (loading) return <Loading />;
  if (error) {
    return <Error404/>;
  }

  if (user) {
    if (user.emailVerified) {
      return (
        <>
          <Header />
          <Helmet>
            <title>Profile </title>
            <meta name="description" content="JAVASCRIPT Page" />
          </Helmet>
          <main className="profile">
            <div  className="profile__container">
            <span style={{marginBottom:"35px"}} className="account">Welcome, {user.displayName}! <span>
              <i className="fa-solid fa-heart"></i>
            </span></span>
              <h6>Name : {user.displayName}</h6>

              <h6>Email : {user.email}</h6>

              <h6>
                Created At :
                <Moment fromNow date={user.metadata.creationTime} />
              </h6>

              <h6>
                Last Sign In At :
                <Moment fromNow date={user.metadata.lastSignInTime} />
              </h6>
            </div>
            {/* Delete Account Button */}
            <button className="delete" onClick={(eo) => {
              deleteAccBTN(eo)
            }}>
              Delete Account
            </button>
          </main>
          <Footer />
        </>
      );
    }

    //   <div>
    //     <Header />
    //     <main>
    //     <h1>Welcome {user.displayName} Email Verification is Required</h1>
    //     <p>Please Check Your Email and Verify Your Account</p>
    //       <button className="delete">
    //         Verify Email
    //         <a href={user.emailVerificationLink}>
    //           {" "}
    //           (link will expire in 24 hours)
    //         </a>

    //       </button>
    //     </main>
    //     <Footer />
    //   </div>
    //
  }
}
