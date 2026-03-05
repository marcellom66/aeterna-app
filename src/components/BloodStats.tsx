import { Dna, Info } from 'lucide-react';
import {
    SOGLIA_MAGNESIO_OTTIMALE_MIN,
    SOGLIA_CORTISOLO_OTTIMALE_MAX
} from '../utils/costanti_salute';

/**
 * Componente BloodStats (Verticale)
 * Rappresenta i dati "interni" (chimica del sangue).
 * Questi dati cambiano più lentamente rispetto ai wearable e richiedono analisi.
 */
export default function BloodStats() {
    // Mock data clinici - Basati sull'ultimo kit inviato (es. 1 mese fa)
    const magnesioLevel = 1.8; // mg/dL - Basso (ottimale > 2.0)
    const cortisoloLevel = 18.5; // mcg/dL - Alto (ottimale < 15.0)

    const magnesioAlert = magnesioLevel < SOGLIA_MAGNESIO_OTTIMALE_MIN;
    const cortisoloAlert = cortisoloLevel > SOGLIA_CORTISOLO_OTTIMALE_MAX;

    return (
        <div className="glass-card animate-fade-in delay-3">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--gap-lg)' }}>
                <h3 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Dna size={24} color="var(--accent-health-red)" /> Biomarcatori Interni
                </h3>
                <span className="badge">Kit: 12 Ott</span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--gap-md)' }}>

                <BiomarkerRow
                    label="Magnesio Intracellulare"
                    value={`${magnesioLevel} mg/dL`}
                    trend="↓ -0.2"
                    alert={magnesioAlert}
                    tooltip="Minerale cruciale per oltre 300 reazioni enzimatiche. Sotto 2.0 mg/dL si riduce la produzione di ATP (energia) e peggiora la qualità del sonno."
                />

                <BiomarkerRow
                    label="Cortisolo Mattutino"
                    value={`${cortisoloLevel} μg/dL`}
                    trend="↑ +3.5"
                    alert={cortisoloAlert}
                    tooltip="Ormone dello stress. Valori elevati al mattino (>18) correlano con infiammazione silente e inibizione del testosterone."
                />

                <BiomarkerRow
                    label="hs-CRP (Infiammazione)"
                    value="0.8 mg/L"
                    trend="Stabile"
                    alert={false}
                    tooltip="Proteina C-Reattiva ad alta sensibilità. È il marker primario per il rischio cardiovascolare e l'inflammaging. Ottimale < 1.0 mg/L."
                />

            </div>

            <button style={{
                marginTop: 'var(--gap-xl)',
                width: '100%',
                padding: '12px',
                background: 'rgba(59, 130, 246, 0.1)',
                border: '1px solid rgba(59, 130, 246, 0.3)',
                color: 'var(--accent-blue)',
                borderRadius: 'var(--radius-md)',
                cursor: 'pointer',
                fontWeight: 600,
                transition: 'all 0.2s ease'
            }}
                onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(59, 130, 246, 0.2)'}
                onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(59, 130, 246, 0.1)'}
            >
                Prenota Nuovo Kit a Domicilio
            </button>

        </div>
    );
}

// Helpers grafici
function BiomarkerRow({ label, value, trend, alert, tooltip }: { label: string, value: string, trend: string, alert: boolean, tooltip?: string }) {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '14px',
            background: alert ? 'rgba(255, 59, 48, 0.05)' : 'var(--bg-main)',
            border: '1px solid var(--border-light)',
            borderLeft: alert ? '4px solid var(--accent-health-red)' : '4px solid var(--accent-green)',
            borderRadius: '8px'
        }}>
            <span
                className={tooltip ? "has-tooltip" : ""}
                data-tooltip={tooltip}
                style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '4px' }}
            >
                {label}
                {tooltip && <Info size={14} style={{ opacity: 0.5 }} />}
            </span>
            <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                <span style={{ fontWeight: 600, color: alert ? 'var(--accent-health-red)' : 'var(--text-primary)' }}>{value}</span>
                <span style={{ color: alert ? 'var(--accent-health-red)' : 'var(--text-secondary)', fontWeight: 700 }}>{trend}</span>
            </div>
        </div>
    );
}
