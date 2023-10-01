import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
// import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: 'AIzaSyDYVucjp_G02bl4mXgLtepxtJkzQaGjMzI',
  authDomain: 'chatroom-b7aea.firebaseapp.com',
  databaseURL: 'https://chatroom-b7aea-default-rtdb.firebaseio.com',
  projectId: 'chatroom-b7aea',
  storageBucket: 'chatroom-b7aea.appspot.com',
  messagingSenderId: '25935307053',
  appId: '1:25935307053:web:dfa41cfab6a175400cf3a4',
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
export const auth = getAuth()
export const storage = getStorage()
export const db = getFirestore()
