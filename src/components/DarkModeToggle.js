'use client';

import { useEffect } from 'react';
import Darkmode from 'darkmode-js';

const DarkModeToggle = () => {
  useEffect(() => {
    const darkmode = new Darkmode({
      bottom: '64px', // default: '32px'
      right: '32px', // default: '32px'
      left: 'unset', // default: 'unset'
      time: '0.5s', // default: '0.3s'
      label: '🌓', // default: ''
      autoMatchOsTheme: true, // default: true
    });
    darkmode.showWidget();
  }, []);

  return null;
};

export default DarkModeToggle;
