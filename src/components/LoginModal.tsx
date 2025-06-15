'use client';

interface LoginModalProps {
  onClose: () => void;
  login: () => void;
}

export default function LoginModal({ onClose, login }: LoginModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="w-full max-w-sm rounded-lg bg-gray-800 p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-xl font-semibold text-white">Sign In to Monad Chain</h1>
          <button onClick={onClose} className="text-gray-400 hover:text-white">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <button
          onClick={login}
          className="w-full rounded-lg bg-blue-600 px-4 py-3 text-white transition-colors hover:bg-blue-700"
        >
          Sign In with Privy
        </button>
      </div>
    </div>
  );
}