import firebase from "firebase/app";
import 'firebase/firestore';
import firebaseConfig from './config';


//自分のセットしたデータベースを使うようにfirebaseを初期化

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();

