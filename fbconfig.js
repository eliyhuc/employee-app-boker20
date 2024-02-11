import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAAw_6-XbQJZRdHj_3MH8fwL6rkbCN-GBA",
  authDomain: "carsapp-boker20.firebaseapp.com",
  projectId: "carsapp-boker20",
  storageBucket: "carsapp-boker20.appspot.com",
  messagingSenderId: "156842163213",
  appId: "1:156842163213:web:d7ecf049647c8c80cfe944"
};

const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);