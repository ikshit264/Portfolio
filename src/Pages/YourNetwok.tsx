import React, { useState, useEffect } from 'react';


const YourNetwork = () => {
  const [deviceInfo, setDeviceInfo] = useState({
    browserName: '',
    os: '',
    screenWidth: window.screen.width,
    screenHeight: window.screen.height,
    windowWidth: window.innerWidth,
    windowHeight: window.innerHeight,
    language: navigator.language,
    cookiesEnabled: navigator.cookieEnabled,
    online: navigator.onLine,
    platform: navigator.platform,
    deviceMemory: navigator.deviceMemory || 'Not supported',
    hardwareConcurrency: navigator.hardwareConcurrency || 'Not supported',
    touchSupport: 'ontouchstart' in window || navigator.maxTouchPoints > 0
  });

  useEffect(() => {
    const getBrowserInfo = async () => {
      const userAgent = navigator.userAgent;
      let browserName = '';
      let os = '';

      // Detecting the browser
      if (navigator.brave && (await navigator.brave.isBrave())) {
        browserName = 'Brave';
      } else if (userAgent.indexOf('Firefox') > -1) {
        browserName = 'Mozilla Firefox';
      } else if (userAgent.indexOf('SamsungBrowser') > -1) {
        browserName = 'Samsung Internet';
      } else if (userAgent.indexOf('Opera') > -1 || userAgent.indexOf('OPR') > -1) {
        browserName = 'Opera';
      } else if (userAgent.indexOf('Trident') > -1) {
        browserName = 'Microsoft Internet Explorer';
      } else if (userAgent.indexOf('Edg') > -1) {
        browserName = 'Microsoft Edge';
      } else if (userAgent.indexOf('Chrome') > -1) {
        browserName = 'Google Chrome';
      } else if (userAgent.indexOf('Safari') > -1) {
        browserName = 'Apple Safari';
      } else {
        browserName = 'Unknown Browser';
      }

      // Detecting the operating system
      if (userAgent.indexOf('Win') !== -1) {
        os = 'Windows';
      } else if (userAgent.indexOf('Mac') !== -1) {
        os = 'MacOS';
      } else if (userAgent.indexOf('Linux') !== -1) {
        os = 'Linux';
      } else if (userAgent.indexOf('Android') !== -1) {
        os = 'Android';
      } else if (userAgent.indexOf('like Mac') !== -1) {
        os = 'iOS';
      } else {
        os = 'Unknown OS';
      }

      setDeviceInfo(prev => ({
        ...prev,
        browserName,
        os
      }));
    };

    getBrowserInfo();

    const handleResize = () => {
      setDeviceInfo(prev => ({
        ...prev,
        windowWidth: window.innerWidth,
        windowHeight: window.innerHeight
      }));
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      <h1>Your Device Information</h1>
      <p>Browser: {deviceInfo.browserName}</p>
      <p>Operating System: {deviceInfo.os}</p>
      <p>Screen Width: {deviceInfo.screenWidth}px</p>
      <p>Screen Height: {deviceInfo.screenHeight}px</p>
      <p>Window Width: {deviceInfo.windowWidth}px</p>
      <p>Window Height: {deviceInfo.windowHeight}px</p>
      <p>Language: {deviceInfo.language}</p>
      <p>Cookies Enabled: {deviceInfo.cookiesEnabled ? 'Yes' : 'No'}</p>
      <p>Online: {deviceInfo.online ? 'Yes' : 'No'}</p>
      <p>Platform: {deviceInfo.platform}</p>
      <p>Device Memory: {deviceInfo.deviceMemory} GB</p>
      <p>Number of CPU Cores: {deviceInfo.hardwareConcurrency}</p>
      <p>Touch Support: {deviceInfo.touchSupport ? 'Yes' : 'No'}</p>
    </div>
  );
};

export default YourNetwork;
