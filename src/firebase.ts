import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getMessaging, onMessage } from "firebase/messaging";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDFya-Kniep_bAGTz-MT0eErx_MSP6OsxI",
  authDomain: "rt-noti.firebaseapp.com",
  projectId: "rt-noti",
  storageBucket: "rt-noti.appspot.com",
  messagingSenderId: "776860680644",
  appId: "1:776860680644:web:9ced382853c56fb61c2491",
  measurementId: "G-GRKFMXR9GM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const messaging = getMessaging(app);
export const clientKey =
  "BBtxJxIJf60r16wlsKGbJkZl5E-3H_tPElxH5xNgDTNqQLGl32urVEoJDPO5HsibOCDZbT8_soXGTxkf0wG2rGI";

export const onMessageListener = () => {
  return new Promise((resolve) => {
    onMessage(messaging, (payload) => {
      resolve(payload);
    });
  });
};
