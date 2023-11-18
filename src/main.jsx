import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDJGE2E8xV7i9DRq2JkZvsPdDuJSN1Hqls",
  authDomain: "sector-games-tandil.firebaseapp.com",
  projectId: "sector-games-tandil",
  storageBucket: "sector-games-tandil.appspot.com",
  messagingSenderId: "134246043578",
  appId: "1:134246043578:web:dccf7176e9cba84acf5783"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// export const db = getFirestore(app);

ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraProvider>
    <App />
  </ChakraProvider>


)
