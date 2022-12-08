// firebase config setup

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAIznDbMKNH476jykGk7jagq-4EyN64QoQ",
    authDomain: "alunsina-c5368.firebaseapp.com",
    projectId: "alunsina-c5368",
    storageBucket: "alunsina-c5368.appspot.com",
    messagingSenderId: "496535685996",
    appId: "1:496535685996:web:4338f9b6429de830a5c149",
    measurementId: "G-8GMLD5DSN5"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };

