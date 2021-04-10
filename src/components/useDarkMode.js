import { useEffect, useState } from 'react';
export const useDarkMode = () => {
  const [theme, setTheme] = useState('light');
  const [mountedComponent, setMountedComponent] = useState(false)

  const setMode = mode => {
    window.localStorage.setItem('theme', mode);
    setTheme(mode);
  };

  const themeToggler = () => {
    if (typeof window !== 'undefined') {
      theme === 'light' ? setMode('dark') : setMode('light');
    }
  };

  useEffect(() => {
    const localTheme = typeof window === 'undefined' ? null : window.localStorage.getItem('theme');

    window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches && !localTheme ?
      setMode('dark') :
      localTheme ?
        setTheme(localTheme) :
        setMode('light');

    setMountedComponent(true);
  }, []);

  return [theme, themeToggler, mountedComponent]
};
