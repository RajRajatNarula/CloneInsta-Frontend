import { initializeApp } from 'firebase/app';
import {getAuth} from "firebase/auth";
import {getStorage,ref} from "firebase/storage";


// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyCpJ695KdVK23NgYeij5SD-2S9gnxE_UvQ",
    authDomain: "instaclone-50374.firebaseapp.com",
    projectId: "instaclone-50374",
    storageBucket: "instaclone-50374.appspot.com",
    messagingSenderId: "926244185198",
    appId: "1:926244185198:web:6715323be4a57204bc727f",
    measurementId: "G-TP83E6GXZ2"
};

const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
const storage=getStorage(app);
export {auth,storage};
