import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserRound, Mail, Smartphone, Lock, CalendarCheck } from 'lucide-react';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [age, setAge] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [check, setCheckbox] = useState(false);

  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [mobileError, setMobileError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [repeatPasswordError, setRepeatPasswordError] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    setNameError(name && name.trim().length < 2 ? 'Name must be at least 2 characters' : '');
  }, [name]);

  useEffect(() => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setEmailError(email && !regex.test(email) ? 'Invalid email format' : '');
  }, [email]);

  useEffect(() => {
    setMobileError(mobile && mobile.length !== 10 ? 'Mobile number must be 10 digits' : '');
  }, [mobile]);

  useEffect(() => {
    const regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&^_-])[A-Za-z\d@$!%*#?&^_-]{6,}$/;
    setPasswordError(password && !regex.test(password)
      ? 'Password must contain letter, number, special char, and be 6+ characters'
      : '');
  }, [password]);

  useEffect(() => {
    setRepeatPasswordError(repeatPassword && repeatPassword !== password
      ? 'Passwords do not match'
      : '');
  }, [repeatPassword, password]);

  const signupHandler = async (e) => {
    e.preventDefault();

    if (nameError || emailError || mobileError || passwordError || repeatPasswordError) return;

    if (!check) {
      alert('Please accept Terms and Conditions');
      return;
    }

    try {
      const res = await axios.post('http://localhost:8000/user/signup', {
        email, password, name, mobile, age,
      });
      if (res.data.user) {
        alert('Signup Successful');
        navigate('/login');
      }
    } catch (error) {
      alert('Email already exists');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center" style={{
      backgroundImage: "url('/abc.jpg')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}>
      <div className="w-full max-w-md bg-white bg-opacity-90 backdrop-blur-md rounded-2xl shadow-xl px-8 py-10">
        <div className="flex justify-center mb-6">
          <div className="bg-gradient-to-tr from-purple-500 to-blue-500 rounded-full p-4">
            <UserRound size={40} color="white" />
          </div>
        </div>

        <h2 className="text-2xl font-bold text-center text-gray-800 mb-2">Create Account</h2>
        <p className="text-center text-gray-600 mb-6">Join us by creating your profile</p>

        <form onSubmit={signupHandler} className="space-y-4">
          <Field icon={<UserRound size={18} />} value={name} onChange={setName} placeholder="Enter your name" label="Name" error={nameError} />
          <Field icon={<Mail size={18} />} value={email} onChange={setEmail} placeholder="Enter your email" label="Email" error={emailError} />
          <Field icon={<Smartphone size={18} />} value={mobile} onChange={setMobile} placeholder="Enter mobile number" label="Mobile" error={mobileError} type="number" />
          <Field icon={<CalendarCheck size={18} />} value={age} onChange={setAge} placeholder="Enter age" label="Age" type="number" />
          <Field icon={<Lock size={18} />} value={password} onChange={setPassword} placeholder="Create password" label="Password" error={passwordError} type="password" />
          <Field icon={<Lock size={18} />} value={repeatPassword} onChange={setRepeatPassword} placeholder="Repeat password" label="Repeat Password" error={repeatPasswordError} type="password" />

          <div className="flex items-center gap-2 text-sm mt-1 text-gray-700">
            <input type="checkbox" checked={check} onChange={(e) => setCheckbox(e.target.checked)} />
            <label>I agree to the <span className="text-blue-600 font-semibold">Terms & Conditions</span></label>
          </div>

          <button
            type="submit"
            disabled={nameError || emailError || mobileError || passwordError || repeatPasswordError}
            className="w-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold py-2 rounded-md hover:from-indigo-600 hover:to-purple-600 active:scale-95 transition"
          >
            Sign Up
          </button>

          <p className="text-sm text-center text-gray-600 mt-4">
            Already have an account?{' '}
            <Link to="/login" className="text-blue-600 hover:underline font-medium">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

const Field = ({ icon, value, onChange, placeholder, label, error, type = 'text' }) => (
  <div>
    <label className="text-sm font-medium text-gray-700">{label}</label>
    <div className="flex items-center mt-1 border rounded-md px-3 py-2 bg-white shadow-sm">
      <span className="text-gray-400 mr-2">{icon}</span>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full outline-none text-sm"
      />
    </div>
    {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
  </div>
);

export default Signup;
