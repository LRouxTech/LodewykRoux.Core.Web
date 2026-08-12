import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { initializeFaro, getWebInstrumentations } from '@grafana/faro-react';

export const faro = initializeFaro({
    url: 'https://faro.lodewykroux.co.za/collect',
    app: {
        name: 'portfolio-app',
        version: '1.0.0',
        environment: 'production',
    },
    instrumentations: [
        ...getWebInstrumentations(),
    ],
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
