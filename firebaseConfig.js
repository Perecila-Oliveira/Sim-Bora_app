import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDLqqFGQeNS1PYdnDt1LvxdLc-B1mZYxzQ",
  authDomain: "simbora-51646.firebaseapp.com",
  projectId: "simbora-51646",
  storageBucket: "simbora-51646.firebasestorage.app",
  messagingSenderId: "836083337562",
  appId: "1:836083337562:web:a57077a363f8911bfdcb63"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;