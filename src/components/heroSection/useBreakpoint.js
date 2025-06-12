import { useState, useEffect } from 'react';

const breakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
};

function useBreakpoint() {
  const [breakpoint, setBreakpoint] = useState('sm');

  useEffect(() => {
    const calcBreakpoint = () => {
      if (window.innerWidth < breakpoints.sm) {
        setBreakpoint('sm');
      } else if (window.innerWidth < breakpoints.md) {
        setBreakpoint('sm');
      } else {
        setBreakpoint('md');
      }
    };

    calcBreakpoint();

    window.addEventListener('resize', calcBreakpoint);
    return () => window.removeEventListener('resize', calcBreakpoint);
  }, []);

  return breakpoint;
}

export default useBreakpoint;
