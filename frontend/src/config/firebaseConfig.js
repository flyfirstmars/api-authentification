import {initializeApp} from "firebase/app";
import {getAnalytics} from "firebase/analytics";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
getAnalytics(app);
export default firebaseConfig;