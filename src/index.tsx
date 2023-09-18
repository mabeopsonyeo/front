import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { RecoilRoot, useRecoilSnapshot } from 'recoil';

import App from '@/App';
import theme from '@/styles/theme';

import './styles/global.css';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

function DebugObserver() {
  const snapshot = useRecoilSnapshot();
  useEffect(() => {
    console.log('The following atoms were modified:');
    for (const node of snapshot.getNodes_UNSTABLE({ isModified: true })) {
      console.log(node.key, snapshot.getLoadable(node));
    }
  }, [snapshot]);

  return null;
}

root.render(
  <React.StrictMode>
    <RecoilRoot>
      <DebugObserver />
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </RecoilRoot>
  </React.StrictMode>
);
