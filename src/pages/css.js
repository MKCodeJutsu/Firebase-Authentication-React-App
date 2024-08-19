import Header from "../comp/header";
import Footer from "../comp/footer";
import MainContent from "../comp/MainContent";
import { Helmet, HelmetProvider } from "react-helmet-async";

export default function Css() {
  return (
    <>
      <Helmet>
        <title>CSS Page</title>
        <meta name="description" content=" CSS Page" />
        <style type="text/css">
          {`
        h1 {
        color: red;
        font-size: 2rem;
        }
        
        
        `}
        </style>
      </Helmet>
      <Header />
      <h1>Mo Kamelllllllllllllllllll</h1>
      <MainContent pageName="CSS" designer=" Mo Kamel" />
      <Footer />
    </>
  );
}
