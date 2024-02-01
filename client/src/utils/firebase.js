// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB4w4d5jIJYTQoEWZFtovw6TxqZdKHa7gc",
  authDomain: "webflix-2b27f.firebaseapp.com",
  projectId: "webflix-2b27f",
  storageBucket: "webflix-2b27f.appspot.com",
  messagingSenderId: "1067068412030",
  appId: "1:1067068412030:web:cfe65ceeeb6c1bbb3c882f",
  measurementId: "G-LZ0BRFGL30",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
