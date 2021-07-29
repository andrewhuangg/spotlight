import firebase from 'firebase';

const apiKey = process.env.REACT_APP_firebaseApiKey;
const domain = process.env.REACT_APP_firebaseDomain;
const projectId = process.env.REACT_APP_firebaseProjectId;
const storageBucket = process.env.REACT_APP_firebaseStorageBucket;
const messagingSenderId = process.env.REACT_APP_firebaseMessagingSenderId;
const appId = process.env.REACT_APP_firebaseAppId;
const measurementId = process.env.REACT_APP_firebaseMeasurementId;

const firebaseConfig = {
  apiKey: apiKey,
  authDomain: domain,
  projectId: projectId,
  storageBucket: storageBucket,
  messagingSenderId: messagingSenderId,
  appId: appId,
  measurementId: measurementId,
};

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
export default storage;
