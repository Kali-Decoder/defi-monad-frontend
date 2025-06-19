'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { User } from '@privy-io/react-auth';

interface NavbarProps {
  user: User | null;
  logout: () => void;
  authenticated: boolean;
  openLogin: () => void;
}

export default function Navbar({ user, logout, authenticated, openLogin }: NavbarProps) {
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-gray-950/80 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-xl font-light tracking-wide">
            MONAD<span className="font-normal text-blue-500">CHAIN</span>
          </Link>
          <div className="hidden items-center space-x-12 md:flex">
            <Link href="#technology" className="text-sm tracking-wide text-gray-400 transition-colors hover:text-blue-400">
              TECHNOLOGY
            </Link>
            <Link href="#features" className="text-sm tracking-wide text-gray-400 transition-colors hover:text-blue-400">
              FEATURES
            </Link>
            <Link href="#roadmap" className="text-sm tracking-wide text-gray-400 transition-colors hover:text-blue-400">
              ROADMAP
            </Link>
            {authenticated ? (
              <div className="flex items-center space-x-4">
                <span className="text-sm text-gray-300">{user?.email?.address || user?.wallet?.address.slice(0, 6) + '...'}</span>
                <Button
                  variant="outline"
                  onClick={logout}
                  className="border-white/20 text-sm tracking-wide text-white transition-all duration-300 hover:border-blue-400/50 hover:bg-blue-500/10"
                >
                  LOGOUT
                </Button>
              </div>
            ) : (
              <Button
                variant="outline"
                onClick={openLogin}
                className="border-white/20 text-sm tracking-wide bg-black text-white transition-all duration-300 hover:border-blue-400/50 hover:bg-blue-500/10 hover:text-white"
              >
                CONNECT
              </Button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}