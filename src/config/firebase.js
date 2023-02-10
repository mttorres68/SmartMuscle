import firebase from "firebase"
import "firebase/storage"

// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAvD7b1xxzo59OyFF1h8C4656kDWT9JMyU",
  authDomain: "smartmuscle-bd.firebaseapp.com",
  projectId: "smartmuscle-bd",
  storageBucket: "smartmuscle-bd.appspot.com",
  messagingSenderId: "726873918621",
  appId: "1:726873918621:web:8397f9566bf67381345874"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
