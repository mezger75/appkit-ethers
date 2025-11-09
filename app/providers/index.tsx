import { ReactNode } from 'react';
import { AppKitProvider } from '@/app/providers/AppKitProvider';
import { QueryProvider } from '@/app/providers/QueryProvider';

export function Providers({ children }: { children: ReactNode }) {
  return (
    <AppKitProvider>
      <QueryProvider>{children}</QueryProvider>
    </AppKitProvider>
  );
}
