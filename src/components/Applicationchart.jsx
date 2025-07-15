import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from 'recharts';

const data = [
  { date: 'Jul 1', applied: 3 },
  { date: 'Jul 2', applied: 5 },
  { date: 'Jul 3', applied: 2 },
  { date: 'Jul 4', applied: 6 },
  { date: 'Jul 5', applied: 4 },
];

export default function Applicationchart() {
  return (
    <div className="bg-white p-4 sm:p-6 rounded-xl shadow-md w-full">
      <h3 className="text-lg sm:text-xl font-semibold text-indigo-700 mb-4 text-center sm:text-left">
        📈 Applications Over Time
      </h3>

      <div className="w-full h-64 sm:h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 10, right: 20, left: 0, bottom: 5 }}>
            <CartesianGrid stroke="#e5e7eb" strokeDasharray="3 3" />
            <XAxis dataKey="date" tick={{ fontSize: 12 }} />
            <YAxis tick={{ fontSize: 12 }} />
            <Tooltip
              contentStyle={{ backgroundColor: '#fff', borderRadius: '8px', border: '1px solid #ccc' }}
              labelStyle={{ fontWeight: 'bold' }}
            />
            <Line
              type="monotone"
              dataKey="applied"
              stroke="#6366F1"
              strokeWidth={2.5}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
