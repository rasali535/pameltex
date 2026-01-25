import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('overview');
    const [mood, setMood] = useState(null);

    const resources = [
        {
            id: 1,
            title: "Understanding Anxiety",
            type: "Article",
            duration: "5 min read",
            category: "Mental Health",
            color: "#e8f5e9"
        },
        {
            id: 2,
            title: "Guided Meditation for Sleep",
            type: "Audio",
            duration: "15 min",
            category: "Wellness",
            color: "#e3f2fd"
        },
        {
            id: 3,
            title: "Coping with Stress at Work",
            type: "Guide",
            duration: "10 min read",
            category: "Work-Life",
            color: "#fff3e0"
        },
        {
            id: 4,
            title: "Daily Journaling Template",
            type: "Tool",
            duration: "Interactive",
            category: "Self-Care",
            color: "#f3e5f5"
        }
    ];

    const handleLogout = () => {
        // Clear any auth tokens here
        navigate('/login');
    };

    return (
        <div className="dashboard-layout">
            {/* Sidebar */}
            <aside className="dash-sidebar">
                <div className="dash-logo">
                    <h2>Pameltex</h2>
                </div>

                <nav className="dash-nav">
                    <button
                        className={`dash-nav-item ${activeTab === 'overview' ? 'active' : ''}`}
                        onClick={() => setActiveTab('overview')}
                    >
                        <span>📊</span> Overview
                    </button>
                    <button
                        className={`dash-nav-item ${activeTab === 'assessment' ? 'active' : ''}`}
                        onClick={() => setActiveTab('assessment')}
                    >
                        <span>📝</span> Assignments & Assessments
                    </button>
                    <button
                        className={`dash-nav-item ${activeTab === 'resources' ? 'active' : ''}`}
                        onClick={() => setActiveTab('resources')}
                    >
                        <span>📚</span> Help Materials
                    </button>
                    <button
                        className={`dash-nav-item ${activeTab === 'messages' ? 'active' : ''}`}
                        onClick={() => setActiveTab('messages')}
                    >
                        <span>💬</span> Messages
                    </button>
                </nav>

                <div className="dash-footer">
                    <button onClick={handleLogout} className="dash-logout">
                        <span>🚪</span> Log Out
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="dash-content">
                <header className="dash-header">
                    <div className="dash-welcome">
                        <h1>Welcome back, Sarah</h1>
                        <p>Here's what's happening with your wellness journey today.</p>
                    </div>
                    <div className="dash-user-profile">
                        <div className="avatar">SK</div>
                    </div>
                </header>

                <div className="dash-container">
                    {/* Quick Assessment Section */}
                    <section className="dash-section">
                        <div className="section-header">
                            <h2>Daily Check-in</h2>
                        </div>
                        <div className="mood-card">
                            <h3>How are you feeling right now?</h3>
                            <div className="mood-options">
                                {['😔', '😐', '🙂', '😊', '🤩'].map((emoji, index) => (
                                    <button
                                        key={index}
                                        className={`mood-btn ${mood === index ? 'selected' : ''}`}
                                        onClick={() => setMood(index)}
                                    >
                                        {emoji}
                                    </button>
                                ))}
                            </div>
                            {mood !== null && (
                                <div className="mood-response animate-fade-in">
                                    <p>Thanks for sharing! We've logged this in your journal.</p>
                                </div>
                            )}
                        </div>
                    </section>

                    {/* Resources Grid */}
                    <section className="dash-section">
                        <div className="section-header">
                            <h2>Recommended Resources</h2>
                            <button className="view-all-btn" onClick={() => setActiveTab('resources')}>View All</button>
                        </div>
                        <div className="resources-grid">
                            {resources.map(resource => (
                                <div key={resource.id} className="resource-card" style={{ borderTopColor: resource.color }}>
                                    <div className="resource-icon" style={{ background: resource.color }}>
                                        {resource.type === 'Article' ? '📄' : resource.type === 'Audio' ? '🎧' : '💡'}
                                    </div>
                                    <div className="resource-content">
                                        <span className="resource-tag">{resource.category}</span>
                                        <h3>{resource.title}</h3>
                                        <p>{resource.duration} • {resource.type}</p>
                                    </div>
                                    <button className="resource-action">Access</button>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Upcoming Session */}
                    <section className="dash-section">
                        <div className="session-card">
                            <div className="session-info">
                                <h3>Next Session</h3>
                                <p className="session-time">Tomorrow, 2:00 PM</p>
                                <p className="session-doc">with Dr. Maphanyane</p>
                            </div>
                            <div className="session-action">
                                <button className="btn btn-solid">Join Video Call</button>
                                <button className="btn btn-outline">Reschedule</button>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
        </div>
    );
};

export default Dashboard;
