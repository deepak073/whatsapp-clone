import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDp_DORd8CXX3tv4kq0-JF--9QtG8HAidM",
  authDomain: "talkfest-36ce7.firebaseapp.com",
  projectId: "talkfest-36ce7",
  storageBucket: "talkfest-36ce7.appspot.com",
  messagingSenderId: "881768485427",
  appId: "1:881768485427:web:3822cfdf65de7ccb044946",
  measurementId: "G-SW40CR3956",
};

const app =initializeApp(firebaseConfig);
export const firebaseAuth =getAuth(app);