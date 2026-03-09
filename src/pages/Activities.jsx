import { activityData } from '../data/activities.jsx';
import { useScrollReveal } from '../hooks/useScrollReveal';
import '../styles/Pages.css';
import '../styles/ExtraPages.css';

const Activities = () => {
  useScrollReveal();
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
            <div key={act.id} className="activity-card vm-card pattern-bg light-pattern reveal-on-scroll">
              <div className="activity-icon">
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
