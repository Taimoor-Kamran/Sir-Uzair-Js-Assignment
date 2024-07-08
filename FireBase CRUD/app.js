import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-analytics.js";
import {
  getFirestore,
  collection,
  addDoc,
} from "https://www.gstatic.com/firebasejs/10.12.3/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCFH9GfXyia2SnC_I8DLjcujfNs78J_huA",
  authDomain: "my-frist-practice.firebaseapp.com",
  projectId: "my-frist-practice",
  storageBucket: "my-frist-practice.appspot.com",
  messagingSenderId: "973129599242",
  appId: "1:973129599242:web:46650f6987da1a7a1192f3",
  measurementId: "G-DL555JD629",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

async function addNumberToDB(){
    try {
        const docRef = await addDoc(collection(db, "users"), {
          first: "Ada",
          last: "Lovelace",
          born: 1815
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
      
}