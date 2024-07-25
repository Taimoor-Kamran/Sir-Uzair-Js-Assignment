import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-analytics.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyCFH9GfXyia2SnC_I8DLjcujfNs78J_huA",
  authDomain: "my-frist-practice.firebaseapp.com",
  projectId: "my-frist-practice",
  storageBucket: "my-frist-practice.appspot.com",
  messagingSenderId: "973129599242",
  appId: "1:973129599242:web:46650f6987da1a7a1192f3",
  measurementId: "G-DL555JD629"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app)
const storage = getStorage(app)
const analytics = getAnalytics(app);

console.log(auth)

export {auth, db, storage};