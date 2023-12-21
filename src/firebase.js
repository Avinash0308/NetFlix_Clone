import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyC4QZUXRO904g4SOhVZfFfGFvj9d1Q21DI",
  authDomain: "tumin-0308.firebaseapp.com",
  projectId: "tumin-0308",
  storageBucket: "tumin-0308.appspot.com",
  messagingSenderId: "1008714146714",
  appId: "1:1008714146714:web:670b07c01ad7a5a7435023",
  measurementId: "G-991KRSLVTW"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export{auth};
  export default db;
