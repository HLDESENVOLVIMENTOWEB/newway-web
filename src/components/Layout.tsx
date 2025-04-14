import { ReactNode } from 'react';

export const Layout = ({ children }: { children: ReactNode }) => (
  <div className="min-h-screen bg-gray-100 p-6">
    <main className="max-w-4xl mx-auto">{children}</main>
  </div>
);
