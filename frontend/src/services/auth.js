import firebaseConfig from "../config/firebaseConfig";
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { getMoralisAuth } from '@moralisweb3/client-firebase-auth-utils';
import { initializeApp } from 'firebase/app';

const app = initializeApp(firebaseConfig);
const moralisAuth = getMoralisAuth(app);
const auth = getAuth(app);

export const signUp = async (email, password) => {
    try {
        await firebaseConfig.auth().createUserWithEmailAndPassword(email, password);
        return { success: true };
    } catch (error) {
        return { success: false, error: error.message };
    }
}

export const signIn = async ({ email, password }) => {
    try {
        await firebaseConfig.auth().signInWithEmailAndPassword(email, password);
        return { success: true };
    } catch (error) {
        return { success: false, error: error.message };
    }
}

export const signInWithGoogle = async () => {
    const auth = getAuth(firebaseConfig);
    const provider = new GoogleAuthProvider();
    try {
        const result = await signInWithPopup(auth, provider);
        return { success: true, result };
    } catch (error) {
        return { success: false, error: error.message };
    }
};
