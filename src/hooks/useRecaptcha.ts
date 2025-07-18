import { useEffect } from 'react';

export const useRecaptcha = (siteKey: string, callback: (token: string) => void) => {
  useEffect(() => {
    const loadScript = () => {
      const script = document.createElement('script');
      script.src = `https://www.google.com/recaptcha/api.js?render=${siteKey}`;
      script.async = true;
      script.onload = () => {
        if (window.grecaptcha) {
          window.grecaptcha.ready(() => {
            window.grecaptcha.execute(siteKey, { action: 'submit' }).then(callback);
          });
        }
      };
      document.body.appendChild(script);
    };

    if (!window.grecaptcha) loadScript();
  }, [siteKey, callback]);
};
