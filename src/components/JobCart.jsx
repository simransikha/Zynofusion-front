import api from '../utils/api';

export default function JobCart({ job }) {
  const handleApply = async () => {
    try {
      await api.post(`/jobs/apply/${job._id}`);
      alert('Applied successfully ✅');
    } catch (err) {
      alert('Application failed');
      console.error(err);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
      <h3 className="text-lg font-bold text-indigo-700">{job.title}</h3>
      <p className="text-sm text-gray-600">{job.company} • {job.location}</p>
      <p className="mt-2 text-sm text-gray-500">Salary: {job.salary}</p>
      <p className="text-xs text-gray-400">Posted {new Date(job.posted).toLocaleDateString()}</p>
      <div className="mt-4 flex gap-2">
        <button onClick={handleApply} className="px-4 py-1 text-sm rounded bg-blue-600 text-white hover:bg-blue-700 transition">Apply</button>
        <button className="px-4 py-1 text-sm rounded border border-gray-300 text-gray-700 hover:bg-gray-100 transition">Save</button>
      </div>
    </div>
  );
}