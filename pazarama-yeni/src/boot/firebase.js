import { boot } from "quasar/wrappers";

import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCdz1pD4Z9FeuAQkIyMKEG4OYzZReuEMI8",
  authDomain: "pazarama-f2d1a.firebaseapp.com",
  projectId: "pazarama-f2d1a",
  storageBucket: "pazarama-f2d1a.appspot.com",
  messagingSenderId: "347355719890",
  appId: "1:347355719890:web:7b4336ef83d2742a9f250b",
};

const fapp = initializeApp(firebaseConfig);

const db = getFirestore(fapp);

export default boot(async ({ app }) => {
  app.config.globalProperties.$db = db;

  app.config.globalProperties.$Firebaseapp = fapp;
});
export { fapp };
