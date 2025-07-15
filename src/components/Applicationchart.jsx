import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { date: 'Jul 1', applied: 3 },
  { date: 'Jul 2', applied: 5 },
  { date: 'Jul 3', applied: 2 },
  { date: 'Jul 4', applied: 6 },
  { date: 'Jul 5', applied: 4 }
];

export default function Applicationchart() {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <h3 className="text-lg font-semibold text-indigo-700 mb-4">Applications Over Time</h3>
      <ResponsiveContainer width="100%" height={200}>
        <LineChart data={data}>
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="applied" stroke="#6366F1" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}