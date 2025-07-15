export default function Wideget({ title, value, icon }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 flex items-center justify-between hover:shadow-lg transition">
      <div>
        <p className="text-sm text-gray-500">{title}</p>
        <h3 className="text-xl font-bold text-indigo-600">{value}</h3>
      </div>
      <div className="text-2xl">{icon}</div>
    </div>
  );
}