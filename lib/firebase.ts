// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDKS_QziUxaxKp9XxEKmDCC2wiKhFEuyEk",
  authDomain: "musica-de-presente.firebaseapp.com",
  projectId: "musica-de-presente",
  storageBucket: "musica-de-presente.firebasestorage.app",
  messagingSenderId: "364977489253",
  appId: "1:364977489253:web:958ec924627d0bc3804d8c",
  measurementId: "G-3G921SCGFV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export { db }