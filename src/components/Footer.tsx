import Link from 'next/link';
import { Twitter, Github, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-16 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 grid gap-12 md:grid-cols-4">
          <div className="space-y-6">
            <div className="text-xl font-light tracking-wide">
              MONAD<span className="font-normal text-blue-500">CHAIN</span>
            </div>
            <p className="text-sm leading-relaxed text-gray-400">
              The next generation blockchain infrastructure for decentralized applications.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: <Twitter className="h-4 w-4" />, href: '#' },
                { icon: <Github className="h-4 w-4" />, href: '#' },
                { icon: <MessageCircle className="h-4 w-4" />, href: '#' },
              ].map((social, i) => (
                <Link
                  key={i}
                  href={social.href}
                  className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/20 bg-gray-900/50 transition-all duration-300 hover:border-blue-400/50 hover:bg-blue-900/20"
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>
          {[
            { title: 'Platform', links: ['Documentation', 'API Reference', 'SDK', 'Testnet'] },
            { title: 'Community', links: ['Discord', 'Forum', 'Blog', 'Events'] },
            { title: 'Company', links: ['About', 'Careers', 'Press', 'Contact'] },
          ].map((section, i) => (
            <div key={i} className="space-y-6">
              <h3 className="text-sm uppercase tracking-wide text-gray-400">{section.title}</h3>
              <div className="space-y-3">
                {section.links.map((link, j) => (
                  <Link key={j} href="#" className="block text-sm text-gray-400 transition-colors hover:text-blue-400">
                    {link}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col items-center justify-between border-t border-white/10 pt-8 md:flex-row md:space-y-0">
          <div className="text-sm text-gray-400">© 2025 Monad Chain. All rights reserved.</div>
          <div className="flex space-x-8 text-sm text-gray-400">
            <Link href="#" className="transition-colors hover:text-blue-400">
              Privacy Policy
            </Link>
            <Link href="#" className="transition-colors hover:text-blue-400">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}