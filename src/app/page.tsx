'use client';

import { usePrivy } from '@privy-io/react-auth';

export default function LoginWithPrivy() {
  const { ready, authenticated, user, login, logout } = usePrivy();

  // Show loading state while Privy initializes
  if (!ready) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-900">
        <div className="bg-gray-800 p-6 rounded-lg">
          <div className="w-8 h-8 border-2 border-gray-600 border-t-white rounded-full animate-spin mx-auto"></div>
          <p className="text-center mt-3 text-gray-300">Loading...</p>
        </div>
      </div>
    );
  }

  // Show user info if authenticated
  if (authenticated) {
    return (
      <div className="min-h-screen bg-gray-900 p-8">
        <div className="max-w-md mx-auto bg-gray-800 rounded-lg p-6">
          <h1 className="text-xl font-semibold text-white mb-4">Welcome Back</h1>
          
          <div className="mb-6">
            <p className="text-gray-300 text-sm">User ID:</p>
            <p className="text-gray-100 text-xs font-mono break-all">{user?.id}</p>
          </div>

          {user?.email && (
            <div className="mb-6">
              <p className="text-gray-300 text-sm">Email:</p>
              <p className="text-gray-100">{user.email.address}</p>
            </div>
          )}

          {user?.wallet && (
            <div className="mb-6">
              <p className="text-gray-300 text-sm">Wallet:</p>
              <p className="text-gray-100 text-xs font-mono break-all">{user.wallet.address}</p>
            </div>
          )}

          <button 
            onClick={logout}
            className="w-full bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded transition-colors"
          >
            Logout
          </button>
        </div>
      </div>
    );
  }

  // Show login modal
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
      <div className="bg-gray-800 rounded-lg p-6 w-full max-w-sm">
        <h1 className="text-xl font-semibold text-white mb-6 text-center">Sign In</h1>
        
        <button
          onClick={login}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded transition-colors"
        >
          Sign In with Privy
        </button>
      </div>
    </div>
  );
}