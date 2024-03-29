// components/GaInitializer.js
"use client";
import { useEffect } from 'react';
import ReactGA from 'react-ga4';

const GaInitializer = () => {

    useEffect(() => {
        ReactGA.initialize('GTM-M544XBK3'); // Remplacez par votre ID de suivi GA4
        ReactGA.send('pageview'); // Ou utilisez ReactGA.pageview(window.location.pathname) pour Universal Analytics
    }, []);

    return null; // Ce composant n'affiche rien
};

export default GaInitializer;
