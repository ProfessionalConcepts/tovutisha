// Firebase Configuration and Initialization
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

// We will use the Firebase Compat SDK for easier integration with static HTML scripts
// This allows us to use the 'firebase' global object across all pages.
document.write('<script src="https://www.gstatic.com/firebasejs/10.8.0/firebase-app-compat.js"></script>');
document.write('<script src="https://www.gstatic.com/firebasejs/10.8.0/firebase-auth-compat.js"></script>');
document.write('<script src="https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore-compat.js"></script>');

window.addEventListener('load', () => {
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    }
    console.log("Firebase initialized successfully.");
});