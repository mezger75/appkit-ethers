export const RPC_URL: Record<number, string> = {
  56: 'https://binance.llamarpc.com', // BNB Chain
};

export const APPKIT_CUSTOM_RPC = { 'eip155:56': [{ url: RPC_URL[56] }] };

export function getRpcUrl(chainId: number): string {
  const url = RPC_URL[chainId];
  if (!url) {
    throw new Error(`No RPC URL configured for chain ID: ${chainId}`);
  }
  return url;
}
