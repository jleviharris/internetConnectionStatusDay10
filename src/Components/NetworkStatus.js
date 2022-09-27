import React from "react";
import { useEffect, useState } from "react";

const NetworkStatus = () => {
  const [status, setStatus] = useState(navigator.onLine);

  useEffect(() => {
    const setOnline = () => {
      setStatus(true);
    };
    const setOffline = () => {
      setStatus(false);
    };
    window.addEventListener("online", setOnline);
    window.addEventListener("offline", setOffline);

    return () => {
      window.addEventListener("online", setOnline);
      window.addEventListener("offline", setOffline);
    };
  }, []);

  return status;
};

export default NetworkStatus;
