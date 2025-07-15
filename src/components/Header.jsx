export default function Header({ userName, onToggleSidebar }) {
  return (
    <header className="w-full bg-indigo-50 py-4 px-4 sm:px-6 flex justify-between items-center shadow-sm">
      <div className="flex items-center gap-4">
        <button
          onClick={onToggleSidebar}
          className="text-2xl lg:hidden focus:outline-none"
        >
          ☰
        </button>
        <h1 className="text-lg font-semibold text-indigo-700">
          Welcome back, {userName} 👋
        </h1>
      </div>

      <div className="flex items-center gap-3">
        <span className="text-sm text-gray-600 hidden sm:block">
          Let’s build your future today
        </span>
        <img
          src={`https://ui-avatars.com/api/?name=${userName}&background=indigo&color=fff&rounded=true`}
          alt="Avatar"
          className="w-8 h-8 rounded-full"
        />
      </div>
    </header>
  );
}
