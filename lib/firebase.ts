import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDKS_QziUxaxKp9XxEKmDCC2wiKhFEuyEk",
  authDomain: "musica-de-presente.firebaseapp.com",
  projectId: "musica-de-presente",
  storageBucket: "musica-de-presente.firebasestorage.app",
  messagingSenderId: "364977489253",
  appId: "1:364977489253:web:958ec924627d0bc3804d8c",
  measurementId: "G-3G921SCGFV"
};

// Inicializa o Firebase (com a trava de segurança para o Next.js não duplicar)
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// Inicializa o Banco de Dados (Firestore)
const db = getFirestore(app);

export { db };