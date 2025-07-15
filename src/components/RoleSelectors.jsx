const roles = [
  { value: 'seeker', label: 'Job Seeker', icon: '🔍' },
  { value: 'employer', label: 'Employer', icon: '💼' }
];

export default function RoleSelectors({ selected, onSelect }) {
  return (
    <div className="mb-6">
      <p className="text-sm font-medium text-gray-700 mb-2">Select your role:</p>
      <div className="flex justify-between gap-4">
        {roles.map(role => (
          <button
            key={role.value}
            type="button"
            onClick={() => onSelect(role.value)}
            className={`flex-1 p-4 rounded-lg border ${selected === role.value ? 'border-blue-600 bg-blue-50' : 'border-gray-300'} text-center hover:bg-blue-100 transition`}
          >
            <span className="text-2xl">{role.icon}</span>
            <p className="mt-2 font-semibold text-gray-800">{role.label}</p>
          </button>
        ))}
      </div>
    </div>
  );
}