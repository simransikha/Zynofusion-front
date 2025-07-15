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
    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition duration-200 p-5 flex flex-col justify-between min-h-[230px]">
      {/* Job Info */}
      <div>
        <h3 className="text-lg sm:text-xl font-bold text-indigo-700 mb-1">{job.title}</h3>
        <p className="text-sm text-gray-600">
          {job.company} • {job.location}
        </p>
        <p className="mt-2 text-sm text-gray-500">💰 Salary: {job.salary}</p>
        <p className="text-xs text-gray-400 mt-1">
          🗓️ Posted on: {new Date(job.posted).toLocaleDateString()}
        </p>
      </div>

      {/* Action Buttons */}
      <div className="mt-4 flex flex-wrap gap-2">
        <button
          onClick={handleApply}
          className="flex-1 sm:flex-none px-4 py-2 text-sm font-medium rounded-md bg-blue-600 text-white hover:bg-blue-700 transition"
        >
          Apply
        </button>
        <button
          className="flex-1 sm:flex-none px-4 py-2 text-sm font-medium rounded-md border border-gray-300 text-gray-700 hover:bg-gray-100 transition"
        >
          Save
        </button>
      </div>
    </div>
  );
}
