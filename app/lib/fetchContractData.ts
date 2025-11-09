import { getRpcUrl } from '@/app/config/rpc';
import { CONTRACT_ABI } from '@/app/lib/constants';
import { parseInterval, parseTimestamp } from '@/app/lib/utils';
import { JsonRpcProvider, Contract } from 'ethers';

export async function fetchContractData(
  contractAddress: string,
  chainId: string | number
) {
  if (!contractAddress || !chainId) {
    throw new Error('Contract address or chain id not configured');
  }

  const chainIdNumber =
    typeof chainId === 'string' || typeof chainId === 'number'
      ? parseInt(String(chainId))
      : chainId;
  const rpcUrl = getRpcUrl(chainIdNumber);
  const provider = new JsonRpcProvider(rpcUrl);

  const contract = new Contract(contractAddress, CONTRACT_ABI, provider);

  const interval = await contract.interval();
  const startDate = await contract.startDate();
  const token = await contract.token();

  return {
    interval: parseInterval(interval),
    startDate: parseTimestamp(startDate),
    token,
  };
}
