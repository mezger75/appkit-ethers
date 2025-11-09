import { useQuery } from '@tanstack/react-query';
import { fetchContractData } from '@/app/lib/fetchContractData';

export function useGetContractData({
  contractAddress,
  chainId,
  isConnected,
  open,
}: {
  contractAddress: string;
  chainId: string | number;
  isConnected: boolean;
  open: boolean;
}) {
  return useQuery({
    queryKey: ['contract-info', contractAddress, chainId],
    queryFn: () => fetchContractData(contractAddress, chainId),
    enabled: !!contractAddress && !!chainId && isConnected && open,
  });
}
