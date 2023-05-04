import firebase from 'firebase/app';
import 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyAFRUo80abuYQTFLfH4lmqrNvkvKu3ME2c",
  authDomain: "account-a104c.firebaseapp.com",
  projectId: "account-a104c",
  storageBucket: "account-a104c.appspot.com",
  messagingSenderId: "446517167274",
  appId: "1:446517167274:web:b97efb6b8d124ae6f27cd3",
  measurementId: "G-EQ7GXFTL7S"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
