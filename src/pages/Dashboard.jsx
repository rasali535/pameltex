import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('overview');
    const [mood, setMood] = useState(null);
    const [userName, setUserName] = useState('Client');
    const [sessionData, setSessionData] = useState(null);

    // Simulate loading
    useEffect(() => {
        const storedName = localStorage.getItem('pameltex_user_name');
        if (storedName) setUserName(storedName);

        const storedMoods = JSON.parse(localStorage.getItem('pameltex_moods') || '[]');
        if (storedMoods.length > 0) {
            // Optional: load last mood state
        }

        const session = localStorage.getItem('pameltex_session');
        if (session) {
            setSessionData(JSON.parse(session));
        }
    }, []);

    const handleMoodSelect = (index) => {
        setMood(index);
        const newMoodEntry = {
            moodScore: index,
            timestamp: new Date().toISOString()
        };
        const currentMoods = JSON.parse(localStorage.getItem('pameltex_moods') || '[]');
        const updatedMoods = [newMoodEntry, ...currentMoods];
        localStorage.setItem('pameltex_moods', JSON.stringify(updatedMoods));
    };

    const handleLogout = () => {
        navigate('/login');
    };

    const handleResourceAccess = (title) => {
        // In a real app, this would open a URL or download a PDF
        alert(`Opening resource: ${title}`);
    };

    const initialResources = [
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

    // --- Tab Views ---

    const OverviewTab = () => (
        <div className="dash-container animate-fade-in">
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
                                onClick={() => handleMoodSelect(index)}
                            >
                                {emoji}
                            </button>
                        ))}
                    </div>
                    {mood !== null && (
                        <div className="mood-response animate-fade-in">
                            <p>Thanks for checking in. We've saved your response.</p>
                        </div>
                    )}
                </div>
            </section>

            {/* Resources Grid Preview */}
            <section className="dash-section">
                <div className="section-header">
                    <h2>Recommended Resources</h2>
                    <button className="view-all-btn" onClick={() => setActiveTab('resources')}>View All</button>
                </div>
                <div className="resources-grid">
                    {initialResources.map(resource => (
                        <div key={resource.id} className="resource-card" style={{ borderTopColor: resource.color }}>
                            <div className="resource-icon" style={{ background: resource.color }}>
                                {resource.type === 'Article' ? '📄' : resource.type === 'Audio' ? '🎧' : '💡'}
                            </div>
                            <div className="resource-content">
                                <span className="resource-tag">{resource.category}</span>
                                <h3>{resource.title}</h3>
                                <p>{resource.duration} • {resource.type}</p>
                            </div>
                            <button className="resource-action" onClick={() => handleResourceAccess(resource.title)}>Access</button>
                        </div>
                    ))}
                </div>
            </section>

            {/* Upcoming Session */}
            <section className="dash-section">
                <div className="session-card">
                    {sessionData ? (
                        <>
                            <div className="session-info">
                                <h3>Next Session</h3>
                                <p className="session-time">{sessionData.time}</p>
                                <p className="session-doc">with {sessionData.doctor}</p>
                            </div>
                            <div className="session-action">
                                <button className="btn btn-solid">Join Video Call</button>
                                <button className="btn btn-outline" style={{ borderColor: '#fff', color: '#fff' }}>Reschedule</button>
                            </div>
                        </>
                    ) : (
                        <div style={{ width: '100%', textAlign: 'center' }}>
                            <h3 style={{ marginBottom: '15px' }}>No upcoming sessions</h3>
                            <Link to="/contact" className="btn btn-solid" style={{ background: '#fff', color: 'var(--brand-teal)', border: 'none' }}>Book a Session</Link>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );

    const AssessmentTab = () => (
        <div className="dash-container animate-fade-in">
            <div className="dash-section">
                <div className="section-header">
                    <h2>Your Assignments</h2>
                </div>
                <div style={{ background: '#fff', padding: '40px', borderRadius: '12px', textAlign: 'center', boxShadow: '0 4px 10px rgba(0,0,0,0.05)' }}>
                    <div style={{ fontSize: '48px', marginBottom: '20px' }}>📝</div>
                    <h3>No pending assignments</h3>
                    <p style={{ color: '#666', marginBottom: '20px' }}>You're all caught up! Your therapist hasn't assigned any new tasks yet.</p>
                </div>
            </div>
            <div className="dash-section">
                <div className="section-header">
                    <h2>Past Assessments</h2>
                </div>
                {/* Mock past assessment */}
                <div style={{ background: '#fff', padding: '20px', borderRadius: '12px', border: '1px solid #eee', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                        <h4 style={{ marginBottom: '5px', color: 'var(--brand-purple)' }}>General Anxiety Scale (GAD-7)</h4>
                        <p style={{ fontSize: '13px', color: '#888' }}>Completed on Jan 10, 2026</p>
                    </div>
                    <span style={{ background: '#e8f5e9', color: 'var(--brand-green)', padding: '5px 10px', borderRadius: '4px', fontSize: '13px', fontWeight: '600' }}>Score: Mild</span>
                </div>
            </div>
        </div>
    );

    const ResourcesTab = () => (
        <div className="dash-container animate-fade-in">
            <div className="dash-section">
                <div className="section-header">
                    <h2>Help Materials Library</h2>
                </div>
                <p style={{ marginBottom: '30px', color: '#666' }}>Explore our curated collection of mental health resources.</p>

                <div className="resources-grid">
                    {/* Displaying initial resources + some duplicates to simulate a larger library */}
                    {[...initialResources, ...initialResources].map((resource, i) => (
                        <div key={i} className="resource-card" style={{ borderTopColor: resource.color }}>
                            <div className="resource-icon" style={{ background: resource.color }}>
                                {resource.type === 'Article' ? '📄' : resource.type === 'Audio' ? '🎧' : '💡'}
                            </div>
                            <div className="resource-content">
                                <span className="resource-tag">{resource.category}</span>
                                <h3>{resource.title}</h3>
                                <p>{resource.duration} • {resource.type}</p>
                            </div>
                            <button className="resource-action" onClick={() => handleResourceAccess(resource.title)}>Access</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );

    const MessagesTab = () => (
        <div className="dash-container animate-fade-in">
            <div className="dash-section">
                <div className="section-header">
                    <h2>Messages</h2>
                </div>
                <div style={{ background: '#fff', padding: '60px', borderRadius: '12px', textAlign: 'center', boxShadow: '0 4px 10px rgba(0,0,0,0.05)' }}>
                    <div style={{ fontSize: '48px', marginBottom: '20px' }}>💬</div>
                    <h3>No new messages</h3>
                    <p style={{ color: '#666', marginBottom: '30px' }}>Messages from your therapist or the support team will appear here.</p>
                    <button className="btn btn-solid" onClick={() => window.location.href = 'mailto:info@pameltex.com'}>Contact Support</button>
                </div>
            </div>
        </div>
    );

    return (
        <div className="dashboard-layout">
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
                        <span>📝</span> Assignments
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

            <main className="dash-content">
                <header className="dash-header">
                    <div className="dash-welcome">
                        <h1>{activeTab === 'overview' ? `Welcome back, ${userName}` :
                            activeTab === 'assessment' ? 'Assignments & Assessments' :
                                activeTab === 'resources' ? 'Resource Library' : 'Messages'}
                        </h1>
                        <p>{activeTab === 'overview' ? "Here's what's happening with your wellness journey today." : ''}</p>
                    </div>
                    <div className="dash-user-profile">
                        <div className="avatar">{userName.charAt(0)}</div>
                    </div>
                </header>

                {/* Conditional Rendering of Tabs */}
                {activeTab === 'overview' && <OverviewTab />}
                {activeTab === 'assessment' && <AssessmentTab />}
                {activeTab === 'resources' && <ResourcesTab />}
                {activeTab === 'messages' && <MessagesTab />}

            </main>
        </div>
    );
};

export default Dashboard;
