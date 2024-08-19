// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyChDXWM8xNRGuJNBeM4Od66halq9HL44jY",
  authDomain: "first-project-380b9.firebaseapp.com",
  projectId: "first-project-380b9",
  storageBucket: "first-project-380b9.appspot.com",
  messagingSenderId: "146531809179",
  appId: "1:146531809179:web:4e149a114086309aba933e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
