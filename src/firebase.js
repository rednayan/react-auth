import firebase from 'firebase/compat/app'
 import "firebase/compat/auth"

 const app = firebase.initializeApp({
    apiKey: "AIzaSyBucfyRHQwhxk5yUS1YPf6QcOapENeSiHc",
    authDomain: "auth-dev-2497c.firebaseapp.com",
    projectId: "auth-dev-2497c",
    storageBucket: "auth-dev-2497c.appspot.com",
    messagingSenderId: "631296540059",
    appId: "1:631296540059:web:f842e7f95d38188f97753e"
 })

 export const auth = app.auth()
 export default app;