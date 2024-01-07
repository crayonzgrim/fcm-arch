importScripts("https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js",
);

const firebaseConfig = {
  apiKey: "AIzaSyDFya-Kniep_bAGTz-MT0eErx_MSP6OsxI",
  authDomain: "rt-noti.firebaseapp.com",
  projectId: "rt-noti",
  storageBucket: "rt-noti.appspot.com",
  messagingSenderId: "776860680644",
  appId: "1:776860680644:web:9ced382853c56fb61c2491",
  measurementId: "G-GRKFMXR9GM",
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();
console.log("JS >>> ", messaging);

messaging.onBackgroundMessage((payload) => {
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  console.log(payload);
  ServiceWorkerRegistration.showNotification(
    notificationTitle,
    notificationOptions,
  );
});
