import React, { useEffect } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { RecoilRoot, useRecoilSnapshot } from 'recoil';

import App from '@/App';
import theme from '@/styles/theme';

import './styles/global.css';

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
const container = document.getElementById('root') as HTMLElement;

if (container.hasChildNodes()) {
  hydrateRoot(
    container,
    <React.Suspense>
      <RecoilRoot>
        {process.env.NODE_ENV === 'development' && <DebugObserver />}
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </RecoilRoot>
    </React.Suspense>
  );
} else {
  createRoot(container).render(
    <React.Suspense>
      <RecoilRoot>
        {process.env.NODE_ENV === 'development' && <DebugObserver />}
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </RecoilRoot>
    </React.Suspense>
  );
}
