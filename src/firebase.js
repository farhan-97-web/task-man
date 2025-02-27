// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC0lqbBAqD5DIQqSZ4v4N-QuVZMdu4kSGk",
  authDomain: "fir-project-77830.firebaseapp.com",
  projectId: "fir-project-77830",
  storageBucket: "fir-project-77830.firebasestorage.app",
  messagingSenderId: "165751150390",
  appId: "1:165751150390:web:f66f3412f6dc91d1794597"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();