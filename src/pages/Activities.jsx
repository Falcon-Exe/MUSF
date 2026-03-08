import { activityData } from '../data/activities';
import '../styles/Pages.css';
import '../styles/ExtraPages.css';

const Activities = () => {
  const activities = activityData;

  return (
    <div className="activities-page section-bg-offwhite min-h-screen">
      <header className="page-header pattern-bg section-bg-green text-white">
        <div className="container relative z-10">
          <h1 className="page-title text-white">Our Activities</h1>
          <p className="page-subtitle text-white">Comprehensive programs for holistic development.</p>
        </div>
      </header>

      <div className="container section">
        <div className="grid grid-3">
          {activities.map(act => (
            <div key={act.id} className="activity-card">
              <div className="activity-icon-wrapper">
                {act.icon}
              </div>
              <div className="activity-content">
                <h3 className="activity-title">{act.title}</h3>
                <p className="activity-desc">{act.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Activities;
