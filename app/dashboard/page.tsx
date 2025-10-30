"use client";
import { SignedIn, SignedOut, RedirectToSignIn } from '@clerk/nextjs';
import Dashboard from '../../src/features/dashboard/Dashboard';

export default function DashboardPage() {
  const publishableKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;
  return (
    <>
      {publishableKey ? (
        <>
          <SignedIn>
            <Dashboard />
          </SignedIn>
          <SignedOut>
            <RedirectToSignIn />
          </SignedOut>
        </>
      ) : (
        <Dashboard />
      )}
    </>
  );
}

