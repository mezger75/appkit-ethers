'use client';

import { useAppKit, useAppKitAccount } from '@reown/appkit/react';

export default function ConnectButton() {
  const { open } = useAppKit();
  const { address, isConnected } = useAppKitAccount();

  const formattedAddress = address
    ? `${address.slice(0, 6)}...${address.slice(-4)}`
    : '';

  return (
    <button
      onClick={() => {
        open();
      }}
      className="flex h-12 w-full hover:cursor-pointer items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
    >
      {isConnected ? formattedAddress : 'Connect Wallet'}
    </button>
  );
}
