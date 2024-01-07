import { useEffect, useState } from "react";
import { onMessageListener, messaging } from "../firebase";
import { getToken } from "firebase/messaging";

export const NotiComp = () => {
  const [notification, setNotification] = useState<
    {
      title: string;
      body: string;
    }[]
  >([]);

  const requestForToken = async () => {
    // Backend request section
    return await getToken(messaging, {
      vapidKey:
        "BBtxJxIJf60r16wlsKGbJkZl5E-3H_tPElxH5xNgDTNqQLGl32urVEoJDPO5HsibOCDZbT8_soXGTxkf0wG2rGI",
    })
      .then((curToken) => {
        if (curToken) {
          console.log("Client TOKEN >> ", curToken);
        } else {
          console.log(
            "No registration token available. Request permission to generate one.",
          );
        }
      })
      .catch((err) => console.log("ERROR > ", err));
  };

  onMessageListener()
    .then((payload) => {
      if (payload && payload?.notification) {
        setNotification((prev) => [
          ...prev,
          {
            title: payload.notification.title,
            body: payload.notification.body,
          },
        ]);
      }
    })
    .catch((err) => console.log("onMessageListner - Notification >> ", err));

  useEffect(() => {
    requestForToken();
  }, []);

  return (
    <>
      <h1>NOTIFICATION APP</h1>
      <div>
        {notification?.map((noti, index) => (
          <div key={index}>
            <h1>TITLE : {noti.title}</h1>
            <p>BODY : {noti.body}</p>
          </div>
        ))}
      </div>
    </>
  );
};
