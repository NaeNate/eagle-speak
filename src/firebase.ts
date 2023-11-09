import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

const app = initializeApp({
  apiKey: "AIzaSyC9QfHkLDQFLHhB4hk3NBcTrG67ohfFApk",
  authDomain: "eagle-speak.firebaseapp.com",
  projectId: "eagle-speak",
  storageBucket: "eagle-speak.appspot.com",
  messagingSenderId: "32910754493",
  appId: "1:32910754493:web:91720eb20cfbf269b5add4",
})

export const auth = getAuth(app)
export const db = getFirestore(app)
