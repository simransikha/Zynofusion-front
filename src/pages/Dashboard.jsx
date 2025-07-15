import { useEffect, useState } from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import WidgetCard from '../components/Wideget';
import JobCard from '../components/JobCart';
import ApplicationChart from '../components/Applicationchart';
import api from '../utils/api';

export default function Dashboard() {
  const [userName, setUserName] = useState('');
  const [jobs, setJobs] = useState([]);
  const [stats, setStats] = useState({ applied: 0, saved: 0, views: 0 });

  useEffect(() => {
    async function fetchDashboardData() {
      try {
        // Fetch user profile
        const profileRes = await api.get('/profile/me');
        setUserName(profileRes.data.name);

        // Fetch job list
        const jobsRes = await api.get('/jobs');
        setJobs(jobsRes.data);

        // Fetch application stats
        const statsRes = await api.get('/applications/stats');
        setStats(statsRes.data);
      } catch (err) {
        console.error('Dashboard fetch error:', err);
        alert('Session expired or error occurred. Please login again.');
        localStorage.removeItem('token');
        window.location.href = '/';
      }
    }

    fetchDashboardData();
  }, []);

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <div className="ml-60 flex flex-col w-full">
        <Header userName={userName} />

        <main className="p-6 space-y-6">
          {/* Widget stats */}
          <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <WidgetCard title="Jobs Applied" value={stats.applied} icon="📄" />
            <WidgetCard title="Saved Jobs" value={stats.saved} icon="⭐" />
            <WidgetCard title="Profile Views" value={stats.views} icon="👀" />
          </section>

          {/* Chart */}
          <section>
            <ApplicationChart />
          </section>

          {/* Recommended Jobs */}
          <section>
            <h3 className="text-xl font-bold text-indigo-700 mb-4">Recommended Jobs</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {jobs.map((job) => (
                <JobCard key={job._id} job={job} />
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
