const firebase = require("firebase");
const dotenv = require("dotenv")
dotenv.config();
const firebaseConfig = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    projectId: process.env.PROJECT_ID,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGIN_SENDER_ID,
    appId: process.env.APP_ID
  };

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
module.exports = db;
