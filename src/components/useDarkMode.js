import { useEffect, useState } from 'react';
export const useDarkMode = () => {
  const [theme, setTheme] = useState('light');
  const [mountedComponent, setMountedComponent] = useState(false)

  const setMode = mode => {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem('theme', mode);
      setTheme(mode);
    }
  };

  const themeToggler = () => {
    if (typeof window !== 'undefined') {
      theme === 'light' ? setMode('dark') : setMode('light');
    }
  };

  useEffect(() => {
    const localTheme = typeof window === 'undefined' ? null : window.localStorage.getItem('theme');
    localTheme && setTheme(localTheme);
    setMountedComponent(true);
  }, []);
  return [theme, themeToggler, mountedComponent]
};
