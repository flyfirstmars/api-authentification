// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCxTlhZtqkzuvoYxuhPc99dssuCXjYfsTc",
    authDomain: "api-authentification-89d43.firebaseapp.com",
    projectId: "api-authentification-89d43",
    storageBucket: "api-authentification-89d43.appspot.com",
    messagingSenderId: "822762045614",
    appId: "1:822762045614:web:204a8743c842aadcfa6d3f",
    measurementId: "G-FHYZCX3DC3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default firebaseConfig;