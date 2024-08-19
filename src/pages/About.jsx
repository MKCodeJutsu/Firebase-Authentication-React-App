import Header from "../comp/header";
import Footer from "../comp/footer";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/config";
import { useNavigate } from "react-router-dom";
import Loading from "../comp/Loading";

import Error404 from "./error404";




export default function About() {
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  // Don't Show Html Page Untill The User Is Signed In
  useEffect(() => {
    auth.onAuthStateChanged(() => {
      if (!user && !loading) {
        navigate("/");
      }
      if (!user.emailVerified){
        navigate ("/")
     }
    });
  }); // Empty Dependency Array to Run Only Once
  //if user is not logged in then navigate to home page
  if (loading){
    return (
      <Loading/>
    );}



    if (error) {
      return <Error404/>;
    }







if (user) {
  if (user.emailVerified){
    return (
      <>
        <Helmet>
          <title>About Page</title>
          <meta name="description" content="About Page" />
        </Helmet>
        <Header />
        <main>
            <span className="account">Welcome, {user.displayName}! <span>
              <i className="fa-solid fa-heart"></i>
            </span></span>
          </main>
        <Footer />
      </>
    );}
    
}
  

  }