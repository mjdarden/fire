import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBjtpaqPaBmv6yYIxz2AU5rENyXfkRiej8",
    authDomain: "fire-8fc19.firebaseapp.com",
    projectId: "fire-8fc19",
    storageBucket: "fire-8fc19.appspot.com",
    messagingSenderId: "911291480911",
    appId: "1:911291480911:web:da674fcd2205fcc600e33a",
    measurementId: "G-CB0ZYZNVCS"
  };

const app = firebase.initializeApp(firebaseConfig)

export const auth = app.auth()
export default app