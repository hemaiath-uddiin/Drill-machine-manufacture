
import { initializeApp } from "firebase/app"; 
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCgBY96tC2XLf8Snr7mPfcLCsKOaCumalw",
  authDomain: "final-project-dda07.firebaseapp.com",
  projectId: "final-project-dda07",
  storageBucket: "final-project-dda07.appspot.com",
  messagingSenderId: "1027154767646",
  appId: "1:1027154767646:web:a8c71465798dbb8fac230f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); 
const auth = getAuth(app) ; 
export default auth