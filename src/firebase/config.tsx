import firebase from "firebase"


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDveNTG0q79fMK76n_uIx-e8s0AWwgsdRo",
  authDomain: "quiz-wtech.firebaseapp.com",
  projectId: "quiz-wtech",
  storageBucket: "quiz-wtech.appspot.com",
  messagingSenderId: "816204686855",
  appId: "1:816204686855:web:09d836d8210ea00a66eca2"
};

// Initialize Firebase

function iniciaFirebase() {
  if (!firebase.apps.length) {
    return firebase.initializeApp(firebaseConfig);
  }
}
const db = firebase.firestore(iniciaFirebase())

export {firebase};
export default db;
