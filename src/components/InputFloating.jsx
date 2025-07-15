import React from 'react';

export default function InputFloating({
  label,
  name,
  value,
  onChange,
  type = 'text',
}) {
  return (
    <div className="relative mb-6 w-full">
      <input
        type={type}
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        placeholder=" "
        autoComplete="off"
        required
        className="peer w-full px-4 pt-6 pb-2 text-sm border border-gray-300 rounded-md bg-white text-gray-900 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
      />
      <label
        htmlFor={name}
        className="absolute left-4 top-2 text-sm text-gray-500 transition-all duration-200 ease-in-out
          peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400
          peer-focus:top-2 peer-focus:text-sm peer-focus:text-blue-600"
      >
        {label}
      </label>
    </div>
  );
}
