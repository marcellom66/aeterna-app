import { useState } from 'react';
import { ShieldCheck, Smartphone, CloudOff, Database, Key, Trash2, Download, Lock, CheckCircle2 } from 'lucide-react';
import '../index.css';

export default function PrivacyDashboard() {
    const [cloudBackup, setCloudBackup] = useState(false); // Default false
    const [aiAnalytics, setAiAnalytics] = useState(false);
    const [isLocked, setIsLocked] = useState(true);
    const [pin, setPin] = useState('');

    // Simulazione sblocco biometrico/PIN
    if (isLocked) {
        return (
            <div className="glass-card animate-fade-in" style={{
                display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                minHeight: '60vh', textAlign: 'center', gap: 'var(--gap-lg)'
            }}>
                <div style={{
                    width: '80px', height: '80px', borderRadius: '50%', background: 'rgba(0,0,0,0.05)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 'var(--gap-md)'
                }}>
                    <Lock size={40} color="var(--text-primary)" />
                </div>

                <div>
                    <h2 style={{ marginBottom: '8px' }}>Security Vault</h2>
                    <p className="subtitle">Area protetta. Inserisci il PIN o usa FaceID per accedere ai dati sensibili.</p>
                </div>

                <div style={{ display: 'flex', gap: '12px', marginBottom: 'var(--gap-md)' }}>
                    {[1, 2, 3, 4].map((i) => (
                        <div key={i} style={{
                            width: '16px', height: '16px', borderRadius: '50%',
                            background: pin.length >= i ? 'var(--text-primary)' : 'rgba(0,0,0,0.1)',
                            transition: 'all 0.2s ease'
                        }} />
                    ))}
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', maxWidth: '250px' }}>
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
                        <button
                            key={num}
                            onClick={() => {
                                const newPin = pin + num;
                                setPin(newPin);
                                if (newPin.length === 4) {
                                    setTimeout(() => setIsLocked(false), 300); // Sblocca dopo 4 cifre simulate
                                }
                            }}
                            style={{
                                width: '60px', height: '60px', borderRadius: '50%',
                                background: 'rgba(0,0,0,0.03)', border: 'none',
                                fontSize: '1.2rem', fontWeight: 500, cursor: 'pointer',
                                color: 'var(--text-primary)'
                            }}
                        >
                            {num}
                        </button>
                    ))}
                    <div /> {/* Empty cell */}
                    <button
                        onClick={() => {
                            const newPin = pin + '0';
                            setPin(newPin);
                            if (newPin.length === 4) {
                                setTimeout(() => setIsLocked(false), 300);
                            }
                        }}
                        style={{
                            width: '60px', height: '60px', borderRadius: '50%',
                            background: 'rgba(0,0,0,0.03)', border: 'none',
                            fontSize: '1.2rem', fontWeight: 500, cursor: 'pointer',
                            color: 'var(--text-primary)'
                        }}
                    >
                        0
                    </button>
                    <button
                        onClick={() => setPin(pin.slice(0, -1))}
                        style={{
                            width: '60px', height: '60px', borderRadius: '50%',
                            background: 'transparent', border: 'none',
                            fontSize: '1rem', fontWeight: 500, cursor: 'pointer',
                            color: 'var(--text-secondary)'
                        }}
                    >
                        Canc
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="animate-fade-in delay-1" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--gap-xl)' }}>

            {/* Header Privacy */}
            <div className="glass-card" style={{ background: 'linear-gradient(135deg, rgba(52, 199, 89, 0.1) 0%, rgba(255, 255, 255, 0.8) 100%)', border: '1px solid rgba(52, 199, 89, 0.2)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
                    <div style={{ background: 'var(--accent-green)', color: 'white', padding: '12px', borderRadius: '50%', display: 'flex' }}>
                        <ShieldCheck size={28} />
                    </div>
                    <div>
                        <h2 style={{ margin: 0, color: 'var(--text-primary)' }}>Privacy by Design</h2>
                        <p className="subtitle" style={{ margin: 0 }}>Conforme al GDPR (Art. 9). I tuoi dati sanitari ti appartengono.</p>
                    </div>
                </div>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.5 }}>
                    Aeterna utilizza un'architettura <strong>Local-First</strong> e crittografia End-to-End.
                    Nessun dato biometrico o genetico viene venduto a terzi o salvato sui nostri server senza il tuo esplicito consenso granulare.
                </p>
            </div>

            {/* Sezione Consensi Granulari */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--gap-lg)' }}>

                {/* Local Storage - Obbligatorio */}
                <div className="glass-card">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                            <Smartphone size={24} color="var(--accent-green)" />
                            <h3 style={{ margin: 0 }}>Archiviazione Locale</h3>
                        </div>
                        <CheckCircle2 size={24} color="var(--accent-green)" />
                    </div>
                    <p className="subtitle" style={{ fontSize: '0.85rem' }}>
                        I biometrici vengono salvati solo fisicamente su questo dispositivo. (Requisito di base)
                    </p>
                </div>

                {/* Cloud E2EE - Opzionale */}
                <div className="glass-card">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                            {cloudBackup ? <Database size={24} color="var(--accent-blue)" /> : <CloudOff size={24} color="var(--text-secondary)" />}
                            <h3 style={{ margin: 0 }}>Backup Cloud Europeo</h3>
                        </div>
                        <Toggle isOn={cloudBackup} onToggle={() => setCloudBackup(!cloudBackup)} />
                    </div>
                    <p className="subtitle" style={{ fontSize: '0.85rem' }}>
                        Cifra i dati sul dispositivo (E2EE) ed effettua un backup sicuro su server residenti in Europa (Francoforte). Noi non possediamo le chiavi di lettura.
                    </p>
                </div>

                {/* AI Analytics - Opzionale */}
                <div className="glass-card">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                            <Key size={24} color={aiAnalytics ? "var(--text-primary)" : "var(--text-secondary)"} />
                            <h3 style={{ margin: 0 }}>Analisi AI Anonima</h3>
                        </div>
                        <Toggle isOn={aiAnalytics} onToggle={() => setAiAnalytics(!aiAnalytics)} />
                    </div>
                    <p className="subtitle" style={{ fontSize: '0.85rem' }}>
                        Condividi dati vitali <strong>pseudonimizzati</strong> per permettere all'AI di Aeterna di fornirti insights predittivi avanzati (Art. 32 GDPR).
                    </p>
                </div>

            </div>

            {/* Diritto all'Oblio & Portabilità */}
            <div>
                <h3 style={{ marginBottom: '16px', paddingLeft: '8px' }}>I tuoi diritti (Art. 17 e 20 GDPR)</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>

                    <button style={{
                        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                        padding: '16px 24px', background: 'white', border: '1px solid rgba(0,0,0,0.05)',
                        borderRadius: 'var(--radius-md)', cursor: 'pointer', transition: 'all 0.2s',
                        boxShadow: 'var(--shadow-sm)'
                    }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                            <Download size={20} color="var(--text-primary)" />
                            <div style={{ textAlign: 'left' }}>
                                <div style={{ fontWeight: 600, color: 'var(--text-primary)' }}>Esporta i miei dati</div>
                                <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Scarica un archivio .JSON con tutta la tua storia medica (Portabilità)</div>
                            </div>
                        </div>
                    </button>

                    <button style={{
                        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                        padding: '16px 24px', background: 'rgba(255, 59, 48, 0.05)', border: '1px solid rgba(255, 59, 48, 0.2)',
                        borderRadius: 'var(--radius-md)', cursor: 'pointer', transition: 'all 0.2s'
                    }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                            <Trash2 size={20} color="#FF3B30" />
                            <div style={{ textAlign: 'left' }}>
                                <div style={{ fontWeight: 600, color: '#FF3B30' }}>Elimina account e dati</div>
                                <div style={{ fontSize: '0.8rem', color: '#FF3B30', opacity: 0.8 }}>Distruggi istantaneamente ogni record locale e cloud (Diritto all'Oblio)</div>
                            </div>
                        </div>
                    </button>

                </div>
            </div>

        </div>
    );
}

// Simple Toggle Component
function Toggle({ isOn, onToggle }: { isOn: boolean, onToggle: () => void }) {
    return (
        <div
            onClick={onToggle}
            style={{
                width: '46px', height: '26px',
                background: isOn ? 'var(--accent-green)' : 'rgba(0,0,0,0.15)',
                borderRadius: '13px', padding: '3px',
                cursor: 'pointer', transition: 'background 0.3s ease',
                display: 'flex', alignItems: 'center',
                justifyContent: isOn ? 'flex-end' : 'flex-start'
            }}
        >
            <div style={{
                width: '20px', height: '20px',
                background: 'white', borderRadius: '50%',
                boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
                transition: 'transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
            }} />
        </div>
    );
}
