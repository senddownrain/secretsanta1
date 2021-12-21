import firebase from "firebase/app";
import "firebase/firestore";

// Get a Firestore instance

const firebaseConfig = {
  apiKey: "AIzaSyAzE7O0hBqEl7PgzlUKL21sfuhjtlE1jMw",
  authDomain: "secretsanta-2aa7f.firebaseapp.com",
  projectId: "secretsanta-2aa7f",
  storageBucket: "secretsanta-2aa7f.appspot.com",
  messagingSenderId: "813142300525",
  appId: "1:813142300525:web:ff6f4012ef8d873de82c64"
};

export const db = firebase.initializeApp(firebaseConfig).firestore();

// Export types that exists in Firestore
// This is not always necessary, but it's used in other examples
const { Timestamp, GeoPoint } = firebase.firestore;
export { Timestamp, GeoPoint };
