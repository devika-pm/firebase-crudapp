import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyAjPmQUiw7hDqNO3Pdn5V2QN6ZUC7W-rCE",
  authDomain: "fir-2-253ca.firebaseapp.com",
  projectId: "fir-2-253ca",
  storageBucket: "fir-2-253ca.appspot.com",
  messagingSenderId: "233602527663",
  appId: "1:233602527663:web:3ff4194480fa7fbb6c3f5a",
  measurementId: "G-HTW29MPW7B"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
