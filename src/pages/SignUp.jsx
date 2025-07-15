import React, { useState } from 'react';
import InputFloating from '../components/InputFloating'; // Assumes it's a custom input
import RoleSelector from '../components/RoleSelectors';  // Assumes role selection buttons
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

  const handleRoleSelect = (role) => setFormData({ ...formData, role });

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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 to-blue-100 px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md relative"
      >
        <h2 className="text-2xl font-bold text-center mb-6 text-blue-700">
          Signup - Step {step}
        </h2>

        {/* Step 1: Name */}
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
              className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md transition"
              onClick={() => setStep(2)}
            >
              Next
            </button>
          </>
        )}

        {/* Step 2: Email and Password */}
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
            <div className="flex justify-between mt-4">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="text-blue-600 hover:underline"
              >
                Back
              </button>
              <button
                type="button"
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md"
                onClick={() => setStep(3)}
              >
                Next
              </button>
            </div>
          </>
        )}

        {/* Step 3: Role selection */}
        {step === 3 && (
          <>
            <RoleSelector selected={formData.role} onSelect={handleRoleSelect} />
            <div className="flex justify-between mt-4">
              <button
                type="button"
                onClick={() => setStep(2)}
                className="text-blue-600 hover:underline"
              >
                Back
              </button>
              <button
                type="submit"
                className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md"
              >
                Submit
              </button>
            </div>
          </>
        )}

        {/* Success message overlay */}
        {showSuccess && (
          <div className="absolute inset-0 bg-white bg-opacity-90 flex flex-col items-center justify-center text-center p-6 rounded-xl">
            <div className="text-4xl mb-2 animate-bounce">✅</div>
            <p className="text-green-600 text-lg font-semibold">
              Signup Successful!
            </p>
            <p className="text-sm mt-2 text-gray-600">
              Redirecting to Dashboard...
            </p>
          </div>
        )}
      </form>
    </div>
  );
}
