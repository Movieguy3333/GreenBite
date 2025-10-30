"use client";
import { SignedIn, SignedOut, RedirectToSignIn } from '@clerk/nextjs';
import AddMeal from '../../src/features/meal/AddMeal';

export default function AddMealPage() {
  const publishableKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;
  return (
    <>
      {publishableKey ? (
        <>
          <SignedIn>
            <AddMeal />
          </SignedIn>
          <SignedOut>
            <RedirectToSignIn />
          </SignedOut>
        </>
      ) : (
        <AddMeal />
      )}
    </>
  );
}

