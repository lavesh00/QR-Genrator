import React, { useRef, useEffect } from 'react';
import video from "./assets/bgvideo.mp4"
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import QRCode from './QRcode';
import './App.css';

function App() {
  const qrSapRef = useRef(null);
  const formRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const form = formRef.current;
    const qrSap = qrSapRef.current;

    const handleSubmit = (event) => {
      event.preventDefault();
      if (qrSap.value.length === 11) {
        localStorage.setItem('sapId', qrSap.value);
        navigate('/qr-code'); // Navigate to QRCode component
      } else {
        qrSap.classList.add('error');
        setTimeout(() => {
          qrSap.classList.remove('error');
        }, 1000);
      }
    };

    form.addEventListener('submit', handleSubmit);

    return () => {
      form.removeEventListener('submit', handleSubmit);
    };
  }, [navigate]);

  return (
    <>
      <video id="background-video" loop autoPlay muted>
        <source src={video} type="video/mp4" />
      </video>
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500&display=swap" rel="stylesheet" />

      <div className="container">
        <form id="form" ref={formRef}>
          <p>Welcome</p>
          <input type="text" placeholder="Name" />
          <input type="number" placeholder="Sap id" id="qrSap" ref={qrSapRef} />
          <input type="email" placeholder="ABC@gmail.com" /><br />
          <input type="submit" value="Sign in" /><br />
        </form>

        <div className="drops">
          <div className="drop drop-1"></div>
          <div className="drop drop-2"></div>
          <div className="drop drop-3"></div>
          <div className="drop drop-4"></div>
          <div className="drop drop-5"></div>
        </div>
      </div>
    </>
  );
}

export default function Main() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/qr-code" element={<QRCode />} />
      </Routes>
    </Router>
  );
}
