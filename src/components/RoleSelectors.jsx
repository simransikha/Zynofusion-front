const roles = [
  { value: 'seeker', label: 'Job Seeker', icon: '🔍' },
  { value: 'employer', label: 'Employer', icon: '💼' }
];

export default function RoleSelectors({ selected, onSelect }) {
  return (
    <div className="mb-6 w-full">
      <p className="text-sm font-semibold text-gray-700 mb-3">Select your role:</p>
      <div className="flex flex-col sm:flex-row gap-4">
        {roles.map((role) => (
          <button
            key={role.value}
            type="button"
            onClick={() => onSelect(role.value)}
            className={`flex-1 flex flex-col items-center justify-center p-4 rounded-lg border text-center transition duration-200 ${
              selected === role.value
                ? 'border-blue-600 bg-blue-50 text-blue-700'
                : 'border-gray-300 hover:bg-gray-100 text-gray-800'
            }`}
          >
            <span className="text-3xl">{role.icon}</span>
            <span className="mt-2 font-medium">{role.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
