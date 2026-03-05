
import { Activity, Info } from 'lucide-react';
import { RECUPERO_CRITICO, ORE_SONNO_MINIME } from '../utils/costanti_salute';

/**
 * Componente WearableStats (Verticale)
 * Rappresenta i dati acquisiti "esternamente" (Oura, Apple Watch).
 * Mostra parametri giornalieri flessibili come Recupero e Sonno.
 */
export default function WearableStats() {
    // Mock data - In un'app reale arriverebbero via API
    const recoveryScore = 62;
    const sleepHours = 5.8;
    const hrv = 45; // ms

    const isRecoveryLow = recoveryScore <= RECUPERO_CRITICO;
    const isSleepLow = sleepHours < ORE_SONNO_MINIME;

    return (
        <div className="glass-card animate-fade-in delay-2">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--gap-lg)' }}>
                <h3 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Activity size={24} color="var(--accent-blue)" /> Dati Wearable
                </h3>
                <span className="badge warning">Sync: 1h fa</span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--gap-md)' }}>

                <StatRow
                    label="Recovery Score"
                    value={`${recoveryScore}/100`}
                    status={isRecoveryLow ? 'danger' : 'warning'}
                    tooltip="Indica quanto il tuo sistema nervoso autonomo è reattivo. Sotto 75, evita sforzi massimali."
                />
                <Progress value={recoveryScore} color={isRecoveryLow ? 'var(--danger)' : 'var(--warning)'} />

                <div style={{ height: '1px', background: 'var(--border-light)', margin: '8px 0' }} />

                <StatRow
                    label="Sonno Totale"
                    value={`${sleepHours}h`}
                    status={isSleepLow ? 'danger' : 'good'}
                    tooltip="Le ore di sonno effettivo (esclusi risvegli). Apple Health raccomanda >7 ore per la clearance delle tossine cerebrali."
                />

                <StatRow
                    label="HRV (Variabilità)"
                    value={`${hrv} ms`}
                    status="warning"
                    tooltip="Heart Rate Variability: più è alta, più sei resiliente allo stress cronico. Un calo indica potenziale infiammazione."
                />

            </div>
        </div>
    );
}

// Helpers grafici
function StatRow({ label, value, status, tooltip }: { label: string, value: string, status: 'good' | 'warning' | 'danger', tooltip?: string }) {
    const colorMap = {
        good: 'var(--accent-green)',
        warning: 'var(--warning)',
        danger: 'var(--accent-health-red)'
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span
                className={tooltip ? "has-tooltip" : ""}
                data-tooltip={tooltip}
                style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '4px' }}
            >
                {label}
                {tooltip && <Info size={14} style={{ opacity: 0.5 }} />}
            </span>
            <span style={{ fontWeight: 600, color: colorMap[status] }}>{value}</span>
        </div>
    );
}

function Progress({ value, color }: { value: number, color: string }) {
    return (
        <div style={{ width: '100%', height: '8px', background: 'var(--border-light)', borderRadius: '4px', overflow: 'hidden' }}>
            <div style={{ width: `${value}%`, height: '100%', background: color, transition: 'width 1s ease-out' }} />
        </div>
    );
}
