// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBC_AIO04XSNroFXqlKRx5U3sdrfINgxG0",
  authDomain: "netflix-arfat-xyz.firebaseapp.com",
  projectId: "netflix-arfat-xyz",
  storageBucket: "netflix-arfat-xyz.appspot.com",
  messagingSenderId: "634192197784",
  appId: "1:634192197784:web:3efa00b5044a822c8cb8ed",
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
export { auth };
export default db;
