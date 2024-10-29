'use client';

import { useEffect } from 'react';
import Darkmode from 'darkmode-js';

const DarkModeToggle = () => {
  useEffect(() => {
    const darkmode = new Darkmode({
      left: 'unset',
      time: '0.5s',
      label: '🌓',
      autoMatchOsTheme: true,
    });
    darkmode.showWidget();

    // Add CSS override to ignore dark mode for certain elements
    const style = document.createElement('style');
    style.innerHTML = `
      body.darkmode--activated .response-dark-mode {
        color: darkcyan !important;
      }
    `;
    document.head.appendChild(style);

    // Cleanup the style tag on component unmount
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return null;
};

export default DarkModeToggle;
