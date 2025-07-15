export default function InputFloating({ label, name, value, onChange, type = 'text' }) {
  return (
    <div className="relative mb-6">
      <input
        type={type}
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        className="peer w-full px-4 pt-6 pb-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-transparent"
        placeholder={label}
      />
      <label
        htmlFor={name}
        className="absolute left-4 top-2 text-sm text-gray-500 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-blue-600"
      >
        {label}
      </label>
    </div>
  );
}