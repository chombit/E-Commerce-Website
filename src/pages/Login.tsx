import React, { useState } from 'react';
import Input from '../components/ui/Input';
import Button from '../components/ui/Button';
import { useUser } from '../context/UserContext';
import { useLocation, useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
  const { login } = useUser();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation() as { state: { from?: string } };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    try {
      await login(email, password);
      const to = (location as any).state?.from || '/';
      navigate(to, { replace: true });
    } catch (err: any) {
      setError(err?.response?.data?.message || 'Login failed');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-[calc(100vh-8rem)]">
      <div className="container mx-auto px-4 py-10">
        <form onSubmit={submit} className="max-w-md mx-auto bg-white dark:bg-gray-800 p-6 md:p-8 rounded-2xl shadow-lg space-y-5">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Welcome back</h1>
          <p className="text-sm text-gray-600 dark:text-gray-400">Login to continue</p>
          {error && <p className="text-sm text-red-600">{error}</p>}
          <Input label="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" required />
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 ring-brand dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
            />
          </div>
          <Button type="submit" isLoading={isLoading} className="w-full">Login</Button>
        </form>
      </div>
    </div>
  );
};

export default Login;
