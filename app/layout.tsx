"use client";
import { ClerkProvider } from '@clerk/nextjs';
import UserContextProvider from '../src/context/user-context';
import Header from './_components/Header';
import '../src/index.css';
import '../src/App.css';
import type { ReactNode } from 'react';

export default function RootLayout({ children }: { children: ReactNode }) {
  const publishableKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;
  return (
    <html lang="en">
      <body>
        {publishableKey ? (
          <ClerkProvider publishableKey={publishableKey}>
            <UserContextProvider>
              <Header />
              {children}
            </UserContextProvider>
          </ClerkProvider>
        ) : (
          <UserContextProvider>
            <Header />
            {children}
          </UserContextProvider>
        )}
      </body>
    </html>
  );
}

