
import firebase from 'firebase/compat/app'
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";







// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBcFyIUSDftLenHJ7ehS8KKsSx5fu45Hgg",
  authDomain: "test-2fbb5.firebaseapp.com",
  databaseURL: "https://test-2fbb5-default-rtdb.firebaseio.com",
  projectId: "test-2fbb5",
  storageBucket: "test-2fbb5.appspot.com",
  messagingSenderId: "891178227327",
  appId: "1:891178227327:web:b9e7c0449c2f6b0e38114a"

}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)



const auth=firebase.auth()
const db=firebase.firestore()
const storage=firebase.storage()


export{db,storage,auth}
