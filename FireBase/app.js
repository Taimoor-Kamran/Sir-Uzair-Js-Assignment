// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";
import {
  getAuth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut 
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyAgv8ZN_wVVQOWHkk2n7RbecSgoOOBLnAc",
  authDomain: "my-first-projext-688aa.firebaseapp.com",
  projectId: "my-first-projext-688aa",
  storageBucket: "my-first-projext-688aa.appspot.com",
  messagingSenderId: "348377380039",
  appId: "1:348377380039:web:a4e91644f1aef4e5e6fae2",
  measurementId: "G-D0JZDVL16T",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

const signup_email = document.getElementById("signup_email")
const signup_password = document.getElementById("signup_password")
const signup_btn = document.getElementById("signup_btn")


const signin_email = document.getElementById("signin_email")
const signin_password = document.getElementById("signin_password")
const signin_btn = document.getElementById("signin_btn")

const auth_container = document.getElementById('auth_container')
const user_container = document.getElementById('user_container')

const logout_btn = document.getElementById("logout_btn")
const user_email = document.getElementById("user_email")

signup_btn.addEventListener("click", createUserAccount)
signin_btn.addEventListener("click", signIn)
logout_btn.addEventListener('click', logout)

onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log("User is logged in");
    const uid = user.uid;
    auth_container.style.display = "none"
    user_container.style.display = "block"
    user_email.innerHTML = user.email;
  } else {
    console.log("User is not logged in");
    auth_container.style.display = "block"
    user_container.style.display = "none"
  }
});

function createUserAccount(){
  // console.log("email==>", signup_email.value)
  // console.log("password==>", signup_password.value)
  createUserWithEmailAndPassword(auth, signup_email.value, signup_password.value)
  .then((userCredential) => {
    const user = userCredential.user;
    console.log("user=>", user)
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage)
    // ..
  });

}


function signIn(){
  signInWithEmailAndPassword(auth, signin_email.value, signin_password.value)
  .then((userCredential) => {
    const user = userCredential.user;
    console.log("user")
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage)
  });
 
}

function logout(){
  signOut(auth).then(() => {
    // Sign-out successful.
  }).catch((error) => {
    // An error happened.
  });
  
}