import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Mail, Lock, UserRound } from 'lucide-react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await axios.post('http://localhost:8000/user/login', { email, password });
      if (response.data.user) {
        localStorage.setItem('user', JSON.stringify(response.data.user));
        alert('Login Successful');
        navigate('/');
      } else {
        setError('Login Failed, Please check your credentials');
        alert('Login Failed');
      }
    } catch (error) {
      console.error('Login error:', error);
      if (error.response) {
        setError(error.response.data.msg || 'An error occurred during login');
      } else if (error.request) {
        setError('No response from server. Please try again later.');
      } else {
        setError('An unexpected error occurred.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{
        backgroundImage: "url('/abc.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="w-full max-w-md bg-white bg-opacity-90 rounded-2xl shadow-xl px-8 py-10">
        <div className="flex justify-center mb-6">
          <div className="bg-gradient-to-tr from-purple-500 to-blue-500 rounded-full p-4">
            <UserRound size={40} color="white" />
          </div>
        </div>

        <h2 className="text-2xl font-bold text-center text-gray-800 mb-2">Welcome Back!</h2>
        <p className="text-center text-gray-600 mb-6">Please sign in to your account</p>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="text-sm font-medium text-gray-700">Email Address</label>
            <div className="flex items-center mt-1 border rounded-md px-3 py-2 bg-white shadow-sm">
              <Mail className="text-gray-400 mr-2" size={18} />
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full outline-none text-sm"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">Password</label>
            <div className="flex items-center mt-1 border rounded-md px-3 py-2 bg-white shadow-sm">
              <Lock className="text-gray-400 mr-2" size={18} />
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full outline-none text-sm"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="text-right mt-1">
              <Link
                to="/forgot-password"
                className="text-sm text-blue-600 hover:underline"
              >
                Forgot Password?
              </Link>
            </div>
          </div>

          {error && <p className="text-sm text-red-500 text-center">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold py-2 rounded-md hover:from-indigo-600 hover:to-purple-600 active:scale-95 transition"
          >
            {loading ? 'Signing in...' : 'Sign In'}
          </button>
        </form>

        <p className="text-sm text-center text-gray-600 mt-6">
          Don’t have an account?{' '}
          <Link to="/signup" className="text-blue-600 hover:underline font-medium">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
