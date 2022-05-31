import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDG3P_NbqMpuwt_6H_-j8pncXBLKsqgeR0",
  authDomain: "job-portal-5c7c8.firebaseapp.com",
  projectId: "job-portal-5c7c8",
  storageBucket: "job-portal-5c7c8.appspot.com",
  messagingSenderId: "509366975500",
  appId: "1:509366975500:web:0a4dca2f21af22b7d68229",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { app, db };
