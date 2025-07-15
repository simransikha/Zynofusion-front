import React from 'react';

export default function Inputfield({ label, name, type = "text", value, onChange }) {
  return (
    <div className="mb-3">
      <label className="block mb-1 font-medium">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className="w-full p-2 border rounded"
        required
      />
    </div>
  );
}