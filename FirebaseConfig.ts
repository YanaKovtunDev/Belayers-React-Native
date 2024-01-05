import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDchpHzL1IebXVmLCSkJgearcExkd-VuPs',
  authDomain: 'belayers-20416.firebaseapp.com',
  projectId: 'belayers-20416',
  storageBucket: 'belayers-20416.appspot.com',
  messagingSenderId: '449052956025',
  appId: '1:449052956025:web:871c2e9a338d4da5b64ba8',
  measurementId: 'G-2J3MR8QB59',
  databaseURL: 'https://belayers-20416.firebaseio.com',
};

export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIRESTORE_DB = getFirestore(FIREBASE_APP);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
