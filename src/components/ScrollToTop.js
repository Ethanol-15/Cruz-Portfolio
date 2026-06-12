import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  // Gets the current URL path, like "/" or "/projects/coach-e"
  const { pathname } = useLocation();

  useEffect(() => {
    // Every time the path changes, scroll the page back to the top
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant',
    });
  }, [pathname]); // Runs again whenever the route/path changes

  // This component does not render anything visually
  return null;
}

export default ScrollToTop;