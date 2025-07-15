import { NavLink } from 'react-router-dom';

const navItems = [
  { name: 'Dashboard', path: '/dashboard', icon: '🏠' },
  { name: 'Jobs', path: '/jobs', icon: '💼' },
  { name: 'Applications', path: '/applications', icon: '📄' },
  { name: 'Profile', path: '/profile', icon: '🙍‍♀️' }
];

export default function Sidebar({ isOpen, onClose }) {
  return (
    <aside
      className={`fixed top-0 left-0 z-40 bg-white shadow-md w-60 h-full transform transition-transform duration-300
      ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 lg:static`}
    >
      <div className="flex justify-between items-center px-6 py-4 border-b lg:hidden">
        <h2 className="text-lg font-bold text-indigo-600">Zynofusion</h2>
        <button onClick={onClose} className="text-xl">✖</button>
      </div>
      <div className="px-6 py-8">
        <h2 className="text-xl font-bold text-indigo-600 hidden lg:block mb-8">Zynofusion</h2>
        <nav className="flex flex-col gap-4">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-2 rounded-lg text-sm font-medium ${
                  isActive
                    ? 'bg-indigo-100 text-indigo-700'
                    : 'text-gray-700 hover:bg-gray-100'
                }`
              }
            >
              <span>{item.icon}</span> {item.name}
            </NavLink>
          ))}
        </nav>
      </div>
    </aside>
  );
}
