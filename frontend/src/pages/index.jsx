import "../styles/globals.css";
import '@rainbow-me/rainbowkit/styles.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { WagmiProvider, http } from 'wagmi'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RainbowKitProvider, getDefaultConfig, darkTheme } from '@rainbow-me/rainbowkit';
import {
  mainnet,
  sepolia,
  polygon,
  polygonMumbai,
  optimism,
  arbitrum,
  base,
  zora,
} from 'wagmi/chains';
import MainLayout from "../layout/mainLayout";

/* New API that includes Wagmi's createConfig and replaces getDefaultWallets and connectorsForWallets */
const config = getDefaultConfig({
  appName: 'MITLAB',
  projectId: import.meta.env.VITE_PROJECT_ID,
  chains: [mainnet, sepolia, polygon, polygonMumbai, optimism, arbitrum, base, zora],
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
    [polygon.id]: http(),
    [polygonMumbai.id]: http(),
    [optimism.id]: http(),
    [arbitrum.id]: http(),
    [base.id]: http(),
    [zora.id]: http(),
  },
})

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
          <RainbowKitProvider 
            modalSize="compact"
            theme={darkTheme({
              accentColor: '#FF9933',
              borderRadius: 'medium',
            })}
          >
            <MainLayout>
              <App />
            </MainLayout>
          </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  </React.StrictMode>
);
