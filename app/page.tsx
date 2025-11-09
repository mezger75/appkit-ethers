import Image from 'next/image';
import ConnectButton from './components/ConnectButton';
import ContractInfoModal from '@/app/components/ContractInfoModal';
import HelloSection from '@/app/components/HelloSection';
import { DOCUMENTATION_URL } from '@/app/lib/constants';

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <div className="flex items-center gap-8">
          <Image
            className="dark:invert"
            src="/next.svg"
            alt="Next.js logo"
            width={100}
            height={20}
            priority
          />
          <Image
            className="dark:invert"
            src="/ethers.svg"
            alt="Ethers logo"
            width={50}
            height={20}
            priority
          />
          <Image
            className="dark:invert"
            src="/reown.svg"
            alt="Reown logo"
            width={100}
            height={20}
            priority
          />
        </div>
        <HelloSection />
        <ContractInfoModal />
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <ConnectButton />
          <a
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/8 px-5 transition-colors hover:border-transparent hover:bg-black/4 dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
            href={DOCUMENTATION_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Documentation
          </a>
        </div>
      </main>
    </div>
  );
}
