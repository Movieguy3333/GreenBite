"use client";
import { SignIn } from '@clerk/nextjs';

export default function LoginCatchAllPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Sign in to your account
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">Welcome back to GreenBites</p>
        </div>
        <div className="flex justify-center">
          <SignIn
            appearance={{
              elements: {
                formButtonPrimary: 'bg-green-600 hover:bg-green-700 text-sm normal-case',
                card: 'shadow-lg',
                headerTitle: 'text-gray-900',
                headerSubtitle: 'text-gray-600',
                socialButtonsBlockButton: 'border border-gray-300 hover:bg-gray-50',
                formFieldInput: 'border border-gray-300 focus:border-green-500 focus:ring-green-500',
                footerActionLink: 'text-green-600 hover:text-green-700',
              },
            }}
            redirectUrl="/dashboard"
            signUpUrl="/sign-up"
          />
        </div>
      </div>
    </div>
  );
}

