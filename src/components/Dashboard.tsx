
import WearableStats from './WearableStats';
import BloodStats from './BloodStats';
import AiInsights from './AiInsights';
import { Activity, ShieldCheck, HeartPulse, Info } from 'lucide-react';

/**
 * Componente Dashboard
 * Funge da orchestrator principale, mostrando i dati verticali 
 * (Wearable e Sangue) e integrandoli orizzontalmente in AI Insights.
 */
export default function Dashboard() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--gap-xl)' }}>

            {/* Overview Cards (High Level Metrics) */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 'var(--gap-lg)' }}>
                <OverviewCard
                    title="Longevity Score"
                    value="84"
                    subtext="+2 da ieri"
                    icon={<HeartPulse size={32} color="var(--text-primary)" />}
                    gradient="var(--text-primary)"
                    className="delay-1"
                    tooltip="Il punteggio algoritmico proprietario di Aeterna. Combina età biologica, VO2 Max e HRV per prevedere anni di vita in salute."
                />
                <OverviewCard
                    title="System Recovery"
                    value="62%"
                    subtext="Sub-ottimale"
                    icon={<Activity size={32} color="var(--warning)" />}
                    gradient="var(--warning)"
                    className="delay-2"
                    tooltip="Rapporto tra carico metabolico (allenamento/stress) e capacità di riposo (SNA). Essenziale per la neuro-plasticità."
                />
                <OverviewCard
                    title="Infiammazione (hs-CRP)"
                    value="Bassa"
                    subtext="Range ottimale"
                    icon={<ShieldCheck size={32} color="var(--accent-green)" />}
                    gradient="var(--accent-green)"
                    className="delay-3"
                    tooltip="La proteina C-reattiva è prodotta dal fegato. Misurare livelli sensibili (hs-CRP) ti salva dalle infiammazioni asintomatiche."
                />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'revert', gap: 'var(--gap-lg)' }}>
                {/* Layout Principale: Insight a tutta larghezza sopra, fonti dati sotto */}
                <AiInsights />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--gap-lg)' }}>
                <WearableStats />
                <BloodStats />
            </div>

        </div>
    );
}

// Piccolo sub-componente per le metriche sommarie
interface CardProps {
    title: string;
    value: string;
    subtext: string;
    icon: React.ReactNode;
    gradient: string;
    className?: string;
    tooltip?: string;
}

function OverviewCard({ title, value, subtext, icon, gradient, className, tooltip }: CardProps) {
    return (
        <div className={`glass-card animate-fade-in ${className}`}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div>
                    <div
                        className={tooltip ? "has-tooltip subtitle" : "subtitle"}
                        data-tooltip={tooltip}
                        style={{ display: 'flex', alignItems: 'center', gap: '4px', width: 'fit-content' }}
                    >
                        {title}
                        {tooltip && <Info size={14} style={{ opacity: 0.5 }} />}
                    </div>
                    <h3 style={{ fontSize: '2.5rem', marginTop: '8px', color: gradient }}>{value}</h3>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{icon}</div>
            </div>
            <p style={{ marginTop: '16px', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>{subtext}</p>
        </div>
    );
}
