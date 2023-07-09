import firebase from "../config/firebaseConfig";
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';


export const signUp = async (email, password) => {
    try {
        await firebase.auth().createUserWithEmailAndPassword(email, password);
        return { success: true };
    } catch (error) {
        return { success: false, error: error.message };
    }
}

export const signIn = async ({ email, password }) => {
    try {
        await firebase.auth().signInWithEmailAndPassword(email, password);
        return { success: true };
    } catch (error) {
        return { success: false, error: error.message };
    }
}

export const signInWithGoogle = async () => {
    const auth = getAuth(firebase);
    const provider = new GoogleAuthProvider();
    try {
        const result = await signInWithPopup(auth, provider);
        return { success: true, result };
    } catch (error) {
        return { success: false, error: error.message };
    }
};
