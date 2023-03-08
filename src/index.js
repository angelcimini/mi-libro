import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { EscenariosProvider } from './context/EscenariosContext';
import { MagiaProvider } from './context/MagiaContext';
import { MaravillasProvider } from './context/MaravillasContext';
import { PersonajesProvider } from './context/PersonajesContext';
import { RazasProvider } from './context/RazasContext';
import { PoliticaProvider } from './context/PoliticaContext';
import { ReligionesProvider } from './context/ReligionesContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <RazasProvider>
        <PersonajesProvider>
          <EscenariosProvider>
            <MaravillasProvider>
              <MagiaProvider>
                <ReligionesProvider>
                  <PoliticaProvider>
                    <App />
                  </PoliticaProvider>
                </ReligionesProvider>
              </MagiaProvider>
            </MaravillasProvider>
          </EscenariosProvider>
        </PersonajesProvider>
      </RazasProvider>
  </React.StrictMode>
);
