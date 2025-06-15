import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function Newsletter() {
  return (
    <section className="relative border-t border-white/10 py-32 px-6">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 to-transparent"></div>
      <div className="relative z-10 mx-auto max-w-4xl text-center space-y-12">
        <div className="space-y-6">
          <h2 className="text-5xl font-light lg:text-6xl">Stay informed</h2>
          <p className="text-xl font-light text-gray-300">
            Get the latest updates on protocol development, ecosystem growth, and partnership announcements.
          </p>
        </div>
        <div className="mx-auto flex max-w-md flex-col gap-4 sm:flex-row">
          <Input
            type="email"
            placeholder="Enter your email"
            className="border-white/20 bg-gray-900/50 text-white placeholder:text-gray-500 focus:border-blue-400 focus:bg-blue-900/20"
          />
          <Button className="bg-gradient-to-r from-blue-500 to-blue-600 px-8 text-white shadow-lg shadow-blue-500/20 transition-all duration-300 hover:from-blue-600 hover:to-blue-700">
            SUBSCRIBE
          </Button>
        </div>
      </div>
    </section>
  );
}