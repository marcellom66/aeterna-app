
import { Sparkles, Zap } from 'lucide-react';

/**
 * Componente AiInsights (Orizzontale / Full-Stack)
 * Questo è il "Cervello Aeterna". Unisce i puntini tra i deficit del wearable
 * e le carenze del sangue, risolvendo la "Subscription Fatigue" fornendo l'Azione chiara.
 */
export default function AiInsights() {
    return (
        <div className="glass-card animate-fade-in" style={{
            borderLeft: '4px solid var(--accent-purple)',
            background: 'linear-gradient(145deg, #ffffff, rgba(175, 82, 222, 0.05))'
        }}>

            <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <div style={{
                    fontSize: '2rem',
                    background: 'rgba(175, 82, 222, 0.15)',
                    width: '56px', height: '56px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    borderRadius: '16px' // Stile iOS icona squircle
                }}>
                    <Sparkles size={28} color="var(--accent-purple)" />
                </div>

                <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                        <h2 className="text-gradient">
                            Aeterna AI Protocol
                        </h2>
                        <span className="badge good">Integrazione Attiva</span>
                    </div>

                    <p style={{ color: 'var(--text-primary)', fontSize: '1.05rem', lineHeight: '1.6', marginBottom: '16px' }}>
                        <strong>Analisi:</strong> Sei stanco (Recupero basso: 62) E la tua analisi del sangue del mese scorso mostrava una tendenza alla carenza di Magnesio (1.8 mg/dL) con Cortisolo elevato.
                    </p>

                    <div style={{
                        background: 'var(--bg-main)',
                        padding: '16px',
                        borderRadius: 'var(--radius-md)',
                        border: '1px solid var(--border-light)'
                    }}>
                        <h4 style={{ color: 'var(--accent-green)', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <Zap size={18} /> Azione Raccomandata
                        </h4>
                        <ul style={{ color: 'var(--text-secondary)', marginLeft: '24px', lineHeight: '1.8' }}>
                            <li>Stasera evita carboidrati complessi per non gravare sul cortisolo serale.</li>
                            <li>Assumi <strong>300mg di Magnesio Bisglicinato</strong> 1 ora prima di dormire per facilitare il rilassamento neuromuscolare.</li>
                        </ul>
                    </div>

                    <div style={{ marginTop: '16px', display: 'flex', alignItems: 'center', gap: '12px', fontSize: '0.85rem' }}>
                        <span style={{ background: 'rgba(16, 185, 129, 0.1)', color: 'var(--accent-green)', padding: '4px 8px', borderRadius: '4px', fontWeight: 600 }}>
                            🌿 Focus ESG
                        </span>
                        <span style={{ color: 'var(--text-secondary)' }}>
                            Il Magnesio raccomandato previene da filiere sostenibili (Impatto CO2: 0.8kg).
                            Sostituire la carne rossa stasera con legumi riduce l'impronta di carbonio di 1.5kg.
                        </span>
                    </div>

                </div>
            </div>
        </div>
    );
}
