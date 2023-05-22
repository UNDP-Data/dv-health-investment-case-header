import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const getEl = (embedSelector: string) => {
  if (typeof embedSelector === 'string') {
    const el = document.querySelector(embedSelector);
    if (!el) {
      // eslint-disable-next-line no-console
      console.warn(`No div matching selector "${embedSelector}"`);
      return null;
    }
    return el;
  }
  return embedSelector;
};

const getFocusArea = (embedSelector: string) => {
  const el = document.querySelector(embedSelector);
  if (!el) {
    return undefined;
  }
  const elClass: string[] = el.className.split('~');
  if (elClass[0] === 'focusArea') return elClass[1].replaceAll('+', ' ');
  return undefined;
};

const containerEmbed = getEl('[data-bucket-top-graphs-embed]');
if (containerEmbed) {
  const rootEmbed = ReactDOM.createRoot(containerEmbed);
  rootEmbed.render(
    <React.StrictMode>
      <App focusArea={getFocusArea('[data-bucket-top-graphs-embed]') || ''} />
    </React.StrictMode>,
  );
}
