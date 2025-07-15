import React, { useState } from 'react';
import InputFloating from '../components/InputFloating'; // Custom styled input
import RoleSelector from '../components/RoleSelectors';  // Custom role selection buttons
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function SignUp() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: 'seeker',
  });
  const [showSuccess, setShowSuccess] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleRoleSelect = (role) =>
    setFormData({ ...formData, role });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/auth/signup', formData);
      setShowSuccess(true);
      setTimeout(() => navigate('/dashboard'), 2000);
    } catch (err) {
      alert(err.response?.data?.message || 'Signup failed');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 via-blue-100 to-purple-100 px-4 py-8">
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-3xl shadow-2xl px-6 py-8 w-full max-w-lg relative transition-all duration-300"
      >
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-8 text-blue-700">
          Sign Up <span className="text-sm block text-gray-500">Step {step} of 3</span>
        </h2>

        {/* Step 1: Full Name */}
        {step === 1 && (
          <>
            <InputFloating
              label="Full Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <button
              type="button"
              className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition"
              onClick={() => setStep(2)}
            >
              Next
            </button>
          </>
        )}

        {/* Step 2: Email & Password */}
        {step === 2 && (
          <>
            <InputFloating
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <InputFloating
              label="Password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <div className="flex justify-between mt-6">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="text-blue-600 hover:underline text-sm"
              >
                ← Back
              </button>
              <button
                type="button"
                className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg transition"
                onClick={() => setStep(3)}
              >
                Next →
              </button>
            </div>
          </>
        )}

        {/* Step 3: Role Selector */}
        {step === 3 && (
          <>
            <RoleSelector selected={formData.role} onSelect={handleRoleSelect} />
            <div className="flex justify-between mt-6">
              <button
                type="button"
                onClick={() => setStep(2)}
                className="text-blue-600 hover:underline text-sm"
              >
                ← Back
              </button>
              <button
                type="submit"
                className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-lg transition"
              >
                Submit ✅
              </button>
            </div>
          </>
        )}

        {/* Success Overlay */}
        {showSuccess && (
          <div className="absolute inset-0 bg-white bg-opacity-90 flex flex-col items-center justify-center text-center p-6 rounded-3xl z-10">
            <div className="text-4xl mb-2 animate-bounce">🎉</div>
            <p className="text-green-600 text-lg font-semibold">
              Signup Successful!
            </p>
            <p className="text-sm mt-1 text-gray-500">
              Redirecting to Dashboard...
            </p>
          </div>
        )}
      </form>
    </div>
  );
}
