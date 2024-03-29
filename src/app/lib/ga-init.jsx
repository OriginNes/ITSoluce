// lib/ga-init.js
import ReactGA from 'react-ga';

export const initGA = () => {
    console.log('GA init');
    ReactGA.initialize('GTM-M544XBK3'); // Remplacez 'YOUR_TRACKING_ID' par votre propre ID de suivi GA.
};

export const logPageView = () => {
    console.log(`Logging pageview for ${window.location.pathname}`);
    ReactGA.set({ page: window.location.pathname });
    ReactGA.pageview(window.location.pathname);
};
