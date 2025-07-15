import React from 'react';

export default function SelectField({ label, name, value, onChange, options }) {
  return (
    <div className="mb-3">
      <label className="block mb-1 font-medium">{label}</label>
      <select
        name={name}
        value={value}
        onChange={onChange}
        className="w-full p-2 border rounded"
        required
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>{opt.label}</option>
        ))}
      </select>
    </div>
  );
}