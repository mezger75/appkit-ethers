'use client';

import { type ReactNode } from 'react';

import { createAppKit } from '@reown/appkit/react';
import { EthersAdapter } from '@reown/appkit-adapter-ethers';
import { bsc } from '@reown/appkit/networks';
import { APPKIT_CUSTOM_RPC } from '@/app/config/rpc';

const projectId = process.env.NEXT_PUBLIC_PROJECT_ID;

if (!projectId) {
  throw new Error('NEXT_PUBLIC_PROJECT_ID is not set');
}

const metadata = {
  name: 'Next.js / Ethers / AppKit',
  description:
    'Connect to AppKit with Ethers Next App and read contract from BNB Chain',
  url: '', // origin must match your domain & subdomain
  icons: [''],
};

createAppKit({
  adapters: [new EthersAdapter()],
  metadata,
  networks: [bsc],
  projectId,
  customRpcUrls: APPKIT_CUSTOM_RPC,
  features: {
    emailShowWallets: false,
    email: false,
    socials: false,
  },
  allWallets: 'HIDE',
});

export function AppKitProvider({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
