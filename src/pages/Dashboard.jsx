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
  const [showSidebar, setShowSidebar] = useState(false);

  useEffect(() => {
    async function fetchDashboardData() {
      try {
        const profileRes = await api.get('/profile/me');
        setUserName(profileRes.data.name);

        const jobsRes = await api.get('/jobs');
        setJobs(jobsRes.data);

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
    <div className="flex min-h-screen bg-gray-50 text-gray-800 relative">
        {/* Sidebar */}
  <Sidebar isOpen={showSidebar} onClose={() => setShowSidebar(false)} />

  {/* Main Content */}
  <div className="flex-1 ml-0 lg:ml-[240px] transition-all duration-300"> {/* Use exact 240px */}
    <Header userName={userName} onToggleSidebar={() => setShowSidebar(!showSidebar)} />

    <main className="px-4 sm:px-6 lg:px-6 py-6 space-y-8"> {/* No mx-auto or max-w */}
      {/* Widgets */}
          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <WidgetCard title="Jobs Applied" value={stats.applied} icon="📄" />
            <WidgetCard title="Saved Jobs" value={stats.saved} icon="⭐" />
            <WidgetCard title="Profile Views" value={stats.views} icon="👀" />
          </section>

          {/* Application Chart */}
          <section className="bg-white rounded-xl shadow-md px-6 py-6 md:py-8">
            <h3 className="text-xl md:text-2xl font-semibold text-indigo-700 mb-6">
              📊 Application Insights
            </h3>
            <ApplicationChart />
          </section>

          {/* Recommended Jobs */}
          <section>
            <h3 className="text-2xl font-bold text-indigo-700 mb-6">
              🔥 Recommended Jobs
            </h3>
            {jobs.length === 0 ? (
              <p className="text-sm text-gray-500">No recommended jobs at the moment.</p>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {jobs.map((job) => (
                  <JobCard key={job._id} job={job} />
                ))}
              </div>
            )}
          </section>
        </main>
      </div>
    </div>
  );
}
