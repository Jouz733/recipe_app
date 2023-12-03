
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import 'firebase/database';
import firebase from 'firebase/app';
import axios from 'axios';

const firebaseConfig = {
  apiKey: "AIzaSyBfJRgQEIOMTgiFz6DMkl7tRUqP7Ag_W0E",
  authDomain: "recipe-cat-e4f3a.firebaseapp.com",
  projectId: "recipe-cat-e4f3a",
  storageBucket: "recipe-cat-e4f3a.appspot.com",
  messagingSenderId: "839581671527",
  appId: "1:839581671527:web:356e06e66921c2f2e874c2",
  measurementId: "G-1MYST8ZSK3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = firebase.firestore(app);



