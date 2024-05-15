import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBG9Q_qc_-MCHmnjGHb6cCy5JNwOmMBu90",
  authDomain: "concesionario-souka.firebaseapp.com",
  projectId: "concesionario-souka",
  storageBucket: "concesionario-souka.appspot.com",
  messagingSenderId: "87738000963",
  appId: "1:87738000963:web:3e3e1093038b8311ab96f6",
  measurementId: "G-QMHNJ8Y531"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore()

export default { firebase, db }