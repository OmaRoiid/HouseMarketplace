import { initializeApp } from "firebase/app";
import { getFireStore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAE94LZ4eBHT-22_a8xhFczoLCfsPSGbts",
  authDomain: "house-marketplace-6272f.firebaseapp.com",
  projectId: "house-marketplace-6272f",
  storageBucket: "house-marketplace-6272f.appspot.com",
  messagingSenderId: "302329824533",
  appId: "1:302329824533:web:e3bbfe6511915ba591951c",
};

const app = initializeApp(firebaseConfig);
export const db = getFireStore();
