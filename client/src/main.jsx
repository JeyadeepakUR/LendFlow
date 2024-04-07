import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Home from "./pages/Home.jsx";
import LatestBorrowers from "./pages/LatestBorrowers.jsx";
import LatestLendings from "./pages/LatestLendings.jsx";
import CreditScore from "./pages/CreditScore.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import NeedMoney from "./pages/NeedMoney.jsx";
import '@rainbow-me/rainbowkit/styles.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import { router } from './router';
import {
  getDefaultConfig,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { WagmiProvider } from 'wagmi';
import {
  QueryClientProvider,
  QueryClient,
} from "@tanstack/react-query";

const polygonTestnet = {
  id: 80001,
  name: 'Mumbai polygon',
  nativeCurrency: { name: 'MATIC', symbol: 'MATIC', decimals: 18 },
  rpcUrls: {
    default: { http: ['https://polygon-mumbai-bor-rpc.publicnode.com'] },
  },
  
};

const config = getDefaultConfig({
  appName: 'BlockBorrow',
  projectId: '0044f7eb66c046b9970b6735dfb4a91c',
  chains: [polygonTestnet],
  ssr: true, // If your dApp uses server side rendering (SSR)
});
const queryClient = new QueryClient();

<Router>
  <Routes>
    <Route path="/" component={Home} />
    <Route path="/LatestBorrowers" component={LatestBorrowers} />
    <Route path="/LatestLendings" component={LatestLendings} />
    {/* <Route path="/creditscore" component={CreditScore} /> */}
    {/* <Route path="/borrowers" component={NeedMoney} /> */}
  </Routes>
</Router>

ReactDOM.createRoot(document.getElementById("root")).render(
  <WagmiProvider config={config}>
    <QueryClientProvider client={queryClient}>
      <RainbowKitProvider>
        <React.StrictMode>
          <RouterProvider router={router} />
        </React.StrictMode>
      </RainbowKitProvider>
    </QueryClientProvider>
  </WagmiProvider>
);
