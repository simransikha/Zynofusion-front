import { NavLink } from 'react-router-dom';

const navItems = [
  { name: 'Dashboard', path: '/dashboard', icon: '🏠' },
  { name: 'Jobs', path: '/jobs', icon: '💼' },
  { name: 'Applications', path: '/applications', icon: '📄' },
  { name: 'Profile', path: '/profile', icon: '🙍‍♀️' }
];

export default function Sidebar() {
  return (
    <aside className="bg-white shadow-md w-60 h-screen px-6 py-8 fixed">
      <h2 className="text-xl font-bold text-indigo-600 mb-8">Zynofusion</h2>
      <nav className="flex flex-col gap-4">
        {navItems.map(item => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-2 rounded-lg text-sm font-medium ${
                isActive ? 'bg-indigo-100 text-indigo-700' : 'text-gray-700 hover:bg-gray-100'
              }`
            }
          >
            <span>{item.icon}</span> {item.name}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}