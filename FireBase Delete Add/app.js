import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-analytics.js";
import { getFirestore,
  collection,
  addDoc,
  getDocs,
  doc,
  deleteDoc,
  updateDoc,
  } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-firestore.js";


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
const analytics = getAnalytics(app);
const db = getFirestore(app);

// console.log(db)

const numbers_list = document.getElementById("numbers_list")
const add_number = document.getElementById("add_number")

const numbersCollection = collection(db, "number")

getNumbersFromDb()

add_number.addEventListener('click', async ()=>{
const number = Math.round(Math.random() * 10000)
console.log(number)
try {
  add_number.disabled = true;
  const docRef = await addDoc(numbersCollection, {
    number,
  });
  add_number.disabled = false
  getNumbersFromDb()
  console.log("Document written with ID: ", docRef.id);
} catch (e) {
  add_number.disabled = false;
  console.error("Error adding document: ", e);
}
});

async function getNumbersFromDb() {
  const querySnapshot = await getDocs(numbersCollection);
  numbers_list.innerHTML = "";
  querySnapshot.forEach((doc) => {
    var obj = doc.data();
    const li = `<li id= ${doc.id}> <b>${obj.number}</b>  <button> Edit </button> <button> Delete </button>  </li>`;
    numbers_list.innerHTML += li;
  });

  numbers_list.childNodes.forEach((node) => {
    node.children[1].addEventListener("click", async function () {
      const docRef = doc(db, "number", this.parentNode.id);
      const newNumber = prompt("New Number");

      await updateDoc(docRef, {
        number: newNumber,
      });
      console.log("Document update hogya he");
      getNumbersFromDb();
    });

    node.children[2].addEventListener("click", async function () {
      const docRef = doc(db, "number", this.parentNode.id);
      await deleteDoc(docRef);
      console.log("Doc deleted");
      getNumbersFromDb();
    });
  });
}