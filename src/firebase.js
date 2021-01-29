import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBiHQ6yB-fbqEDPIefP1ea5LR82K2ltWqU',
  authDomain: 'clone-49432.firebaseapp.com',
  projectId: 'clone-49432',
  storageBucket: 'clone-49432.appspot.com',
  messagingSenderId: '1061041991018',
  appId: '1:1061041991018:web:149bf8655d70f148718913',
};
firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
export const auth = firebase.auth();
