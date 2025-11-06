import { useState, useEffect } from 'react';

function useDeviceSize() {
  const [device, setDevice] = useState("desktop");

  useEffect(() => {
    const checkDevice = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setDevice("mobile");
      } else if (width < 1100) {
        setDevice("tablet");
      } else {
        setDevice("desktop");
      }
    };

    checkDevice();
    window.addEventListener('resize', checkDevice);
    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  return device; // returns "mobile" | "tablet" | "desktop"
}

export default useDeviceSize;
