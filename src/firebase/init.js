import firebase from 'firebase';
import firestore from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDGbx_Oy6-7GhwPd_Cn5BKT4bqpKWPyfs0',
  authDomain: 'the-experiment-c852d.firebaseapp.com',
  databaseURL: 'https://the-experiment-c852d.firebaseio.com',
  projectId: 'the-experiment-c852d',
  storageBucket: '',
  messagingSenderId: '512356942420',
  appId: '1:512356942420:web:6c7087b5cf7e8d0f',
};
// Initialize Firebase

const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp.firestore();
