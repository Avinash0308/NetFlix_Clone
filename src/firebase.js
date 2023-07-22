import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyCD2_JRLls4x8MctbPex3lbFs2HXq86aUQ",
    authDomain: "netflix-clone-3777a.firebaseapp.com",
    projectId: "netflix-clone-3777a",
    storageBucket: "netflix-clone-3777a.appspot.com",
    messagingSenderId: "833883179597",
    appId: "1:833883179597:web:996a2796dddde16feb2a04",
    measurementId: "G-KQP9Y5N3S4"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export{auth};
  export default db;