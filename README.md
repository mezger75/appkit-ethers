# Web3 Contract Viewer

A modern Web3 application for viewing smart contract data with wallet integration.

## Technologies

- [Next.js 15](https://nextjs.org) - React framework with App Router
- [TypeScript](https://www.typescriptlang.org) - Type-safe JavaScript
- [Ethers.js v6](https://docs.ethers.org/v6/) - Ethereum library for contract interaction
- [Reown AppKit](https://docs.reown.com/appkit/overview) - Web3 wallet connection (formerly WalletConnect)
- [TanStack Query](https://tanstack.com/query) - Data fetching and caching
- [Tailwind CSS](https://tailwindcss.com) - Utility-first CSS framework
- [shadcn/ui](https://ui.shadcn.com) - Component library

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Create `.env` file:

```env
NEXT_PUBLIC_CONTRACT_ADDRESS=0xYourContractAddress
NEXT_PUBLIC_PROJECT_ID=your_reown_project_id
```

# Example for localhost testing:

# NEXT_PUBLIC_PROJECT_ID=b56e18d47c72ab683b10814fe9495694

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000)

## Features

### Smart Contract Integration

- Reads data from deployed Ethereum smart contracts
- Displays token address, start date, and vesting interval
- Parses uint256 timestamps to readable dates (24-hour format)
- Converts uint32 interval seconds to human-readable format (days, hours, minutes, seconds)

### Performance Optimizations

- **Query Prefetching**: Contract data prefetches on button hover for instant display
- **Caching**: TanStack Query caches contract data to avoid redundant RPC calls
- **Conditional Fetching**: Query only executes when modal is open and wallet is connected

### User Experience

- **Skeleton Loaders**: Animated placeholders during data loading
- **Error Handling**: Clear error messages for failed requests
- **Wallet Integration**: Connect with any wallet via Reown AppKit
- **Responsive Design**: Works on desktop and mobile devices
- **Dark Mode**: Full dark mode support

### Code Architecture

- **Custom Hooks**: Reusable `useGetContractData` hook
- **Utility Functions**: Shared parsing logic for timestamps and intervals
- **Type Safety**: Full TypeScript coverage
- **Component Separation**: Clean separation of fetching logic and UI components

## Project Structure

```
app/
├── components/         # React components
│   ├── ui/            # shadcn/ui components
│   └── ContractInfoModal.tsx
├── hooks/             # Custom React hooks
├── lib/               # Utility functions and constants
│   ├── fetchContractData.ts
│   ├── utils.ts
│   └── constants.ts (ABI)
├── config/            # Configuration files
└── providers/         # React context providers
```

## Environment Variables

- `NEXT_PUBLIC_CONTRACT_ADDRESS` - Your deployed contract address
- `NEXT_PUBLIC_PROJECT_ID` - Reown (WalletConnect) project ID from [cloud.reown.com](https://cloud.reown.com)
