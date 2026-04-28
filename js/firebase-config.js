import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyCIJ69P-g8Ff8iJat5A1tz8wM6KoSnXuoo",
  authDomain: "pospro-ee7ec.firebaseapp.com",
  databaseURL: "https://pospro-ee7ec-default-rtdb.firebaseio.com",
  projectId: "pospro-ee7ec",
  storageBucket: "pospro-ee7ec.firebasestorage.app",
  messagingSenderId: "793339452148",
  appId: "1:793339452148:web:bc3950ae001b89b67f1ca1",
  measurementId: "G-LWQJ5Y9FZ1"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage, firebaseConfig };