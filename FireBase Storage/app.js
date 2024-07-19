import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
} from "https://www.gstatic.com/firebasejs/10.12.4/firebase-firestore.js";
import {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
} from "https://www.gstatic.com/firebasejs/10.12.4/firebase-storage.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
const db = getFirestore(app);
const storage = getStorage(app);
console.log(storage);

const carCollection = collection(db, "car");
// console.log(storage);

const car_img = document.getElementById("car_img");
const save_file = document.getElementById("save_file");
const container = document.getElementById("container");

getImagesFromDB();

save_file.addEventListener("click", () => {
  console.log(car_img.files[0]);

  const carStorageRef = ref(storage, car_img.files[0].name);

  save_file.disabled = true;
  uploadBytes(carStorageRef, car_img.files[0])
    .then((snapshot) => {
      console.log("Uploaded a blob or file!");
      getDownloadURL(carStorageRef)
        .then((url) => {
          console.log("url==>", url);

          addDoc(carCollection, { url, category: "car" }).then(() => {
            console.log("Document Updated to db");
            save_file.disabled = false;
          });
        })
        .catch(
          (err) => console.log("Error in Download", err),
          (save_file.disabled = false)
        );
    })
    .catch((err) => console.log(err), (save_file.disabled = false));
});

async function getImagesFromDB() {
  const querySnapshot = await getDocs(carCollection);

  container.innerHTML += "";

  querySnapshot.forEach((doc) => {
    console.log(`${doc.id} =>`);
    console.log(doc.data());

    const img = `<img src= ${doc.data().url}
     style="height: 300px; width: 300px; border-radius: 12px; margin: 30px;">`
        container.innerHTML += img;
  });
}
