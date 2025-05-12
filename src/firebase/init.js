// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyADeDiDkcW-olmPGNWl8Sid6sAsR7X2vQs",
    authDomain: "bot-comms-d4053.firebaseapp.com",
    projectId: "bot-comms-d4053",
    storageBucket: "bot-comms-d4053.firebasestorage.app",
    messagingSenderId: "409289648434",
    appId: "1:409289648434:web:84b717a346b13c7df60f2b",
    measurementId: "G-VEL2P4W6BH"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);


export default db;