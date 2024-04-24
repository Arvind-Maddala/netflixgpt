import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC1xRUl-J6cq-Dqal1UTIU7gD5OdRgHnqw",
  authDomain: "netflix-gpt-23996.firebaseapp.com",
  projectId: "netflix-gpt-23996",
  storageBucket: "netflix-gpt-23996.appspot.com",
  messagingSenderId: "963990375937",
  appId: "1:963990375937:web:38d0b773df72d0da96ba00",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
