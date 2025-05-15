"use client";

import React, { Suspense } from 'react';
import { ThemeProvider } from 'next-themes'; 
import { Toaster } from 'react-hot-toast';
import { Spinner } from '@/components/ui/Spinner';

interface AppProvidersProps {
  children: React.ReactNode;
}

export function AppProviders({ children }: AppProvidersProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      <Toaster 
        position="bottom-right" 
        toastOptions={{
          duration: 5000,
          className: 'text-sm font-medium',
          success: {
            style: {
              background: 'hsl(var(--color-primary))',
              color: 'hsl(var(--color-neutral-lightest))',
            },
            iconTheme: {
              primary: 'hsl(var(--color-neutral-lightest))',
              secondary: 'hsl(var(--color-primary))',
            },
          },
          error: {
            style: {
              background: 'hsl(var(--color-red-500, 0 84% 60%))', 
              color: 'hsl(var(--color-neutral-lightest))',
            },
            iconTheme: {
              primary: 'hsl(var(--color-neutral-lightest))',
              secondary: 'hsl(var(--color-red-500, 0 84% 60%))',
            },
          },
        }}
      />
      <Suspense fallback={
        <div className="flex justify-center items-center min-h-screen bg-background">
          <Spinner size="lg" />
        </div>
      }>
        {children}
      </Suspense>
    </ThemeProvider>
  );
}