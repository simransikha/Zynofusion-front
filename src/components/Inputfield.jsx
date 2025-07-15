import React from 'react';

export default function Inputfield({ label, name, type = "text", value, onChange }) {
  const inputId = `input-${name}`;

  return (
    <div className="mb-4 w-full">
      <label htmlFor={inputId} className="block mb-1 text-sm font-medium text-gray-700">
        {label}
      </label>
      <input
        id={inputId}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required
        className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
      />
    </div>
  );
}
