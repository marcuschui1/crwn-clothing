import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyAEqv1T5_CVqfr3ud27PwXxJCzaUoKVZr0',
  authDomain: 'crwn-db-7524d.firebaseapp.com',
  databaseURL: 'https://crwn-db-7524d.firebaseio.com',
  projectId: 'crwn-db-7524d',
  storageBucket: '',
  messagingSenderId: '546784090554',
  appId: '1:546784090554:web:6374b2325a22a85a'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
