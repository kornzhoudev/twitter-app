// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyCCcQFbe_0kVhHEE2MEY5r7YIF32gcdb_I',
  authDomain: 'twitter-app-ee837.firebaseapp.com',
  projectId: 'twitter-app-ee837',
  storageBucket: 'twitter-app-ee837.appspot.com',
  messagingSenderId: '751948035090',
  appId: '1:751948035090:web:c134bd7ef84080716754cb',
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };