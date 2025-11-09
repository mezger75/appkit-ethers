'use client';

import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/app/components/ui/dialog';
import { useAppKitAccount, useAppKitNetwork } from '@reown/appkit/react';
import { useGetContractData } from '@/app/hooks/useGetContractData';
import { useQueryClient } from '@tanstack/react-query';
import { fetchContractData } from '@/app/lib/fetchContractData';
import { Skeleton } from '@/app/components/ui/skeleton';

export default function ContractInfoModal() {
  const { isConnected } = useAppKitAccount();
  const { chainId, caipNetwork } = useAppKitNetwork();
  const [open, setOpen] = useState(false);

  const queryClient = useQueryClient();

  const contractAddress = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS;

  if (!contractAddress || !chainId) {
    throw new Error('Contract address or chain id not configured');
  }

  const prefetchContractData = async () => {
    await queryClient.prefetchQuery({
      queryKey: ['contract-info', contractAddress, chainId],
      queryFn: () => fetchContractData(contractAddress, chainId),
    });
  };

  const { data, isLoading, isError, error } = useGetContractData({
    contractAddress,
    chainId,
    isConnected,
    open,
  });

  return isConnected ? (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button
          onMouseEnter={prefetchContractData}
          className="flex h-12 w-full hover:cursor-pointer items-center justify-center rounded-full border border-solid border-black/8 px-5 transition-colors hover:border-transparent hover:bg-black/4 dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
        >
          Check Contract
        </button>
      </DialogTrigger>
      <DialogContent overlayClassName="bg-black/40 backdrop-blur-sm">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">
            Contract Details
          </DialogTitle>
          <DialogDescription>
            <strong>Chain:</strong> {caipNetwork?.name} ({chainId})
            <br />
            <strong>Contract Address:</strong> {contractAddress}
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-2">
          {isLoading ? (
            <>
              <div className="flex items-center gap-2">
                <strong>Token:</strong>
                <Skeleton className="w-full h-5" />
              </div>
              <div className="flex items-center gap-2">
                <strong>Start Date:</strong>
                <Skeleton className="w-60 h-5" />
              </div>
              <div className="flex items-center gap-2">
                <strong>Interval:</strong>
                <Skeleton className="w-24 h-5" />
              </div>
            </>
          ) : isError ? (
            <p className="text-red-500">Error: {error.message}</p>
          ) : data ? (
            <>
              <p>
                <strong>Token:</strong> {data.token}
              </p>
              <p>
                <strong>Start Date:</strong> {data.startDate}
              </p>
              <p>
                <strong>Interval:</strong> {data.interval}
              </p>
            </>
          ) : null}
        </div>
      </DialogContent>
    </Dialog>
  ) : null;
}
