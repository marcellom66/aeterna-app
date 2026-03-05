/**
 * Costanti Cliniche e di Sistema
 * 
 * Secondo la "10-Year Rule": Nessun Magic Number nel codice.
 * Tutte le soglie cliniche (sangue) e biometriche (wearable) 
 * sono definite qui per facilitare la manutenzione futura.
 */

// --- SOGLIE BIOMETRICHE (Wearable: Oura, Apple Health) ---
export const RECUPERO_MINIMO_OTTIMALE = 75; // Punteggio su 100
export const RECUPERO_CRITICO = 50; // Sotto questa soglia servono interventi mirati
export const ORE_SONNO_MINIME = 7.0;

// --- SOGLIE EMATICHE (Analisi del Sangue) ---
// Valori di riferimento per Magnesio (mg/dL)
export const SOGLIA_MAGNESIO_CRITICA_MIN = 1.7;
export const SOGLIA_MAGNESIO_OTTIMALE_MIN = 2.0;

// Valori di riferimento per Cortisolo (mcg/dL - mattino)
export const SOGLIA_CORTISOLO_ALTO = 19.0;
export const SOGLIA_CORTISOLO_OTTIMALE_MAX = 15.0;

// --- ESG / SOSTENIBILITA' ---
// Limiti di impatto ambientale per i consigli nutrizionali
export const SOGLIA_MAX_IMPATTO_CO2_GIORNALIERO = 2.5; // kg CO2 equivalenti per integratori/cibo

// --- TIPI DI DATO (TypeScript) ---
export interface DatiUtente {
  longevityScore: number;
  inflamationLevel: "Basso" | "Medio" | "Alto";
  wearable: {
    recoveryScore: number;
    sleepHours: number;
    hrv: number;
  };
  blood: {
    magnesium: number;
    cortisol: number;
    lastTestDate: string;
  };
}
