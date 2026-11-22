// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import {
  getFirestore, doc, collection, getDoc, getDocs, setDoc, addDoc,
  updateDoc, deleteDoc, onSnapshot, query, orderBy, where,
  serverTimestamp, writeBatch
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";
import {
  getAuth, signInWithEmailAndPassword, signOut, onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDFQyjcwhkwD_ykPP1Lc80P2wZ10hUCtjc",
  authDomain: "ishraqpestournment.firebaseapp.com",
  projectId: "ishraqpestournment",
  storageBucket: "ishraqpestournment.firebasestorage.app",
  messagingSenderId: "98447904890",
  appId: "1:98447904890:web:fd02babcdac80343b1ebc3"
};

const app  = initializeApp(firebaseConfig);
export const db   = getFirestore(app);
export const auth = getAuth(app);

const TID = "main";

export const refs = {
  tournament: doc(db, "tournament", TID),
  players:    collection(db, "tournament", TID, "players"),
  matches:    collection(db, "tournament", TID, "matches"),
  awards:     doc(db, "tournament", TID, "awards", "main")
};

export {
  doc, collection, getDoc, getDocs, setDoc, addDoc, updateDoc, deleteDoc,
  onSnapshot, query, orderBy, where, serverTimestamp, writeBatch,
  signInWithEmailAndPassword, signOut, onAuthStateChanged
};