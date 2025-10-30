"use client";
import { SignedIn, SignedOut, RedirectToSignIn } from '@clerk/nextjs';

export default function ProfilePage() {
  const publishableKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;
  return (
    <>
      {publishableKey ? (
        <>
          <SignedIn>
            <h1 className="p-6 text-3xl font-bold">Profile</h1>
          </SignedIn>
          <SignedOut>
            <RedirectToSignIn />
          </SignedOut>
        </>
      ) : (
        <h1 className="p-6 text-3xl font-bold">Profile</h1>
      )}
    </>
  );
}

