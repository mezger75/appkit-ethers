'use client';

import { useAppKitAccount } from '@reown/appkit/react';

export default function HelloSection() {
  const { isConnected } = useAppKitAccount();

  return isConnected ? (
    <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
      <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
        Welcome! Let's check the contract details.
      </h1>
    </div>
  ) : (
    <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
      <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
        To get started, connect your wallet.
      </h1>
    </div>
  );
}
