import firebase from 'firebase'

const main = Vue.createApp()

main.mount('#head')


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBxyM1ptOVfEHLUyoaWID-ehF_ExDSdoag",
  authDomain: "smetslijst.firebaseapp.com",
  projectId: "smetslijst",
  storageBucket: "smetslijst.appspot.com",
  messagingSenderId: "962140082112",
  appId: "1:962140082112:web:d619d20ede03fbd1e4c225",
  measurementId: "G-CVDZNKSPQP"
};

const db = firebase.firestore()

export {db}
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);