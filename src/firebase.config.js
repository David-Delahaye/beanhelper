import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyCBgyKrrofq7p03d5CzZ_4KeEzWi6x4Q3M",
  authDomain: "beanhelper-c8b6a.firebaseapp.com",
  projectId: "beanhelper-c8b6a",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
console.log(firebase);
const db = firebase.firestore();

export default db;
