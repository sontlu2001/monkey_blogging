// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyCUmAMloQ_fibX6MBsPj2gjXt0UHiZT8tw',
  authDomain: 'monkey-blogging-53075.firebaseapp.com',
  projectId: 'monkey-blogging-53075',
  storageBucket: 'monkey-blogging-53075.appspot.com',
  messagingSenderId: '749201179490',
  appId: '1:749201179490:web:c5b255f8afd19e2f4ee23b'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
export const auth = getAuth(app)
