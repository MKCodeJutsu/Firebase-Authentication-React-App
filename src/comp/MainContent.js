import React from 'react';
import "./MainContent.css"
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/config";


const MainContent = ({pageName, designer, date}) => {
  const [user] = useAuthState(auth);

  return (
    <div>
     <main>
      {pageName} 
      <br />
      Welcome : {user.displayName} Signed In {date}
    </main>
    
          
    </div>
  );
}

export default MainContent;
