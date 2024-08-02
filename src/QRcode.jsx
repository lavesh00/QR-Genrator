import React, { useEffect, useRef } from 'react';
import video from "./assets/bgvideo.mp4"
import './App.css'; 

function QRCode() {
  const qrImageRef = useRef(null);

  useEffect(() => {
    const qrImage = qrImageRef.current;
    const sapId = localStorage.getItem("sapId");

    if (sapId) {
      qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${sapId}`;
    } else {
      alert("No SAP ID found");
    }
  }, []);

  return (
    <>
      <video id="background-video" loop autoPlay muted>
        <source src={video} type="video/mp4" />
      </video>
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500&display=swap" rel="stylesheet" />

      <div className="container">
        <div className="drops">
          <p><b>Please Take a screenshot</b></p>
        </div>
        <div id="imgBox">
          <img src="" id="qrImage" alt="QR Code" ref={qrImageRef} />
        </div>
      </div>
    </>
  );
}

export default QRCode;
