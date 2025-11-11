export const RPC_URL: Record<number, string> = {
  56:
    process.env.NEXT_PUBLIC_BNB_RPC_URL ||
    'https://go.getblock.io/cc778cdbdf5c4b028ec9456e0e6c0cf3', // BNB Chain
};

export const APPKIT_CUSTOM_RPC = { 'eip155:56': [{ url: RPC_URL[56] }] };

export function getRpcUrl(chainId: number): string {
  const url = RPC_URL[chainId];
  if (!url) {
    throw new Error(`No RPC URL configured for chain ID: ${chainId}`);
  }
  return url;
}
