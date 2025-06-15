'use client';

import { useState, useEffect } from 'react';
import { usePrivy } from '@privy-io/react-auth';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Statistics from '../components/Statistics';
import Technology from '../components/Technology';
import Features from '../components/Features';
import Roadmap from '../components/Roadmap';
import Team from '../components/Team';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import LoginModal from '../components/LoginModal';

export default function Home() {
  const { ready, authenticated, user, login, logout } = usePrivy();
  const [scrollY, setScrollY] = useState(0);
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {ready ? (
        <>
          <Navbar 
            user={user} 
            logout={logout} 
            authenticated={authenticated} 
            openLogin={() => setIsLoginOpen(true)}
          />
          <Hero scrollY={scrollY} />
          <Statistics />
          <Technology />
          <Features />
          <Roadmap />
          <Team />
          <Newsletter />
          <Footer />
          {isLoginOpen && !authenticated && (
            <LoginModal onClose={() => setIsLoginOpen(false)} login={login} />
          )}
        </>
      ) : (
        <div className="flex min-h-screen items-center justify-center bg-gray-950">
          <div className="rounded-lg bg-gray-800 p-6">
            <div className="mx-auto h-8 w-8 animate-spin rounded-full border-2 border-t-white border-gray-600"></div>
            <p className="mt-3 text-center text-gray-300">Loading...</p>
          </div>
        </div>
      )}
    </div>
  );
}