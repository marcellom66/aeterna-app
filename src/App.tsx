import { useState } from 'react';
import { LayoutDashboard, Dna, Activity, Leaf, Settings, ShieldCheck } from 'lucide-react';
import Dashboard from './components/Dashboard';
import PrivacyDashboard from './components/PrivacyDashboard';

type ViewType = 'Dashboard' | 'Blood & DNA' | 'Wearables' | 'ESG Nutrition' | 'Privacy & Security' | 'Settings';

function App() {
  const [activeView, setActiveView] = useState<ViewType>('Dashboard');
  return (
    <div className="app-container">
      {/* Sidebar - Menu Navigazione Orizzontale (Full Stack Longevity) */}
      <aside className="sidebar animate-fade-in delay-1">
        <h1 className="text-gradient">Aeterna.</h1>
        <p className="subtitle" style={{ marginBottom: 'var(--gap-xl)' }}>Longevity Intelligence</p>

        <nav style={{ display: 'flex', flexDirection: 'column', gap: 'var(--gap-sm)' }}>
          <SidebarItem icon={<LayoutDashboard size={20} />} label="Dashboard" active={activeView === 'Dashboard'} onClick={() => setActiveView('Dashboard')} />
          <SidebarItem icon={<Dna size={20} />} label="Blood & DNA" active={activeView === 'Blood & DNA'} onClick={() => setActiveView('Blood & DNA')} />
          <SidebarItem icon={<Activity size={20} />} label="Wearables" active={activeView === 'Wearables'} onClick={() => setActiveView('Wearables')} />
          <SidebarItem icon={<Leaf size={20} />} label="ESG Nutrition" active={activeView === 'ESG Nutrition'} onClick={() => setActiveView('ESG Nutrition')} />
          <SidebarItem icon={<ShieldCheck size={20} />} label="Privacy & Security" active={activeView === 'Privacy & Security'} onClick={() => setActiveView('Privacy & Security')} />
          <SidebarItem icon={<Settings size={20} />} label="Settings" active={activeView === 'Settings'} onClick={() => setActiveView('Settings')} />
        </nav>

        <div style={{ marginTop: 'auto', padding: '16px', background: 'rgba(52, 199, 89, 0.1)', borderRadius: 'var(--radius-md)' }}>
          <p style={{ fontSize: '0.8rem', color: 'var(--accent-green)', fontWeight: 600 }}>Plan: Aeterna Premium</p>
          <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>Next blood kit: 12 Nov</p>
        </div>
      </aside>

      {/* Main Content */}
      <main className="main-content animate-fade-in delay-2">
        <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <h2>Bentornato, Marcello</h2>
            <p className="subtitle">Ecco il tuo stato di salute integrato di oggi.</p>
          </div>
          <div className="badge good">🟢 Sincronizzato con Oura & Apple Health</div>
        </header>

        {activeView === 'Dashboard' && <Dashboard />}
        {activeView === 'Privacy & Security' && <PrivacyDashboard />}
        {activeView !== 'Dashboard' && activeView !== 'Privacy & Security' && (
          <div className="glass-card animate-fade-in delay-3" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '300px', gap: 'var(--gap-md)' }}>
            <span style={{ fontSize: '3rem' }}>🚧</span>
            <h3 style={{ color: 'var(--text-primary)' }}>Sezione {activeView} in Sviluppo</h3>
            <p style={{ color: 'var(--text-secondary)' }}>Questa funzione fa parte della Roadmap dell'MVP Aeterna e sarà sbloccata a breve.</p>
          </div>
        )}
      </main>
    </div>
  );
}

// Sub-component per i link della Sidebar
interface SidebarItemProps {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  onClick?: () => void;
}

function SidebarItem({ icon, label, active = false, onClick }: SidebarItemProps) {
  return (
    <div
      onClick={onClick}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        padding: '12px 16px',
        borderRadius: 'var(--radius-md)',
        cursor: 'pointer',
        background: active ? 'rgba(0,0,0,0.04)' : 'transparent',
        color: active ? 'var(--text-primary)' : 'var(--text-secondary)',
        fontWeight: active ? 600 : 400,
        transition: 'all 0.2s ease'
      }}
      onMouseEnter={(e) => {
        if (!active) e.currentTarget.style.color = 'var(--text-primary)';
      }}
      onMouseLeave={(e) => {
        if (!active) e.currentTarget.style.color = 'var(--text-secondary)';
      }}
    >
      <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{icon}</span>
      <span>{label}</span>
    </div>
  );
}

export default App;
