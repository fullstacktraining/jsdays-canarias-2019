import firebase from 'firebase/app';
import 'firebase/auth'
import 'firebase/firestore';

const config = {

};

export default !firebase.apps.length ? firebase.initializeApp(config).firestore() : firebase.app().firestore();
export const EmailAuthProvider = new firebase.auth.EmailAuthProvider();
export const auth = firebase.auth();
export const firestore = firebase.firestore;