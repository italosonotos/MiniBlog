import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC4r8RGhiPYfMy5LlJ17aBSZiEwwX12lsE",
  authDomain: "miniblog-86168.firebaseapp.com",
  projectId: "miniblog-86168",
  storageBucket: "miniblog-86168.appspot.com",
  messagingSenderId: "972124571583",
  appId: "1:972124571583:web:d5e6d162c1a44d1a5b030a",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
