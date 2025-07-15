export default function Wideget({ title, value, icon }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition duration-300 flex items-center justify-between gap-4 p-5 w-full min-w-[200px]">
      <div className="flex-1">
        <p className="text-sm sm:text-base text-gray-500">{title}</p>
        <h3 className="text-xl sm:text-2xl font-semibold text-indigo-700 mt-1">{value}</h3>
      </div>
      <div className="text-3xl sm:text-4xl text-indigo-500">{icon}</div>
    </div>
  );
}
