// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDGC-qbr_DC4AgU1z9VeFi-ns4SkZxhf10',
  authDomain: 'real-estate-marketplace-9b7fd.firebaseapp.com',
  projectId: 'real-estate-marketplace-9b7fd',
  storageBucket: 'real-estate-marketplace-9b7fd.appspot.com',
  messagingSenderId: '336223912459',
  appId: '1:336223912459:web:2838365e20531f265bfd0e'
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
