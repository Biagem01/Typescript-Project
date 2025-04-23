# Typescript-Project


link codepen: https://codepen.io/Biagio-Cubisino-the-lessful/pen/azzBLpy?editors=1111


# 1. Utilizzo delle interfacce (interface)
Le interfacce IPartecipante, ICorso e IAzienda sono state introdotte per:
* Definire un contratto chiaro tra struttura dati e comportamenti richiesti.
* Garantire che ogni classe che le implementa rispetti una struttura coerente.
* Facilitare l’estendibilità futura (es. nuovi tipi di corsi, nuovi tipi di aziende o partecipanti specializzati).
✅ Scelta motivata dalla volontà di mantenere un’architettura modulare e scalabile.

 # 👤 2. Modellazione dei partecipanti (Partecipante)
Nella classe Partecipante abbiamo incluso:
* Proprietà personali (nome, cognome, paese di origine...) per rappresentare ogni migrante in modo realistico.
* Competenze linguistiche come array di stringhe, per permettere flessibilità (es. multilinguismo).
* Il metodo iscrivitiCorso() chiama internamente corso.aggiungiPartecipante(this) per:
    * Rispettare l’integrità dei dati (la logica d’aggiunta è centralizzata nel corso).
    * Garantire che ogni iscrizione aggiorni direttamente l’oggetto Corso corrispondente.
✅ Scelta volta a mantenere coerenza e semplicità nella gestione delle iscrizioni.

 # 📚 3. Struttura dei corsi (Corso)
Nella classe Corso, abbiamo:
* Un array iscritti di IPartecipante[] per tenere traccia delle persone iscritte.
* Il metodo aggiungiPartecipante() che aggiorna l’elenco degli iscritti e stampa un messaggio di conferma.
✅ Questa struttura consente un facile tracciamento dei partecipanti e potrebbe essere estesa per includere, in futuro, anche lo storico o la valutazione.

 # 🏢 4. Modellazione delle aziende (Azienda)
La classe Azienda ha:
* Proprietà che descrivono il settore, le posizioni disponibili e l’attività.
* Il metodo offriPosizione() che permette di:
    * Verificare se una posizione è effettivamente aperta.
    * Simulare l’offerta di un impiego a un partecipante specifico.
✅ Questa logica riflette un approccio pratico alla collaborazione tra aziende e scuola, simulando opportunità concrete.

 # 🔁 5. Collegamento logico tra le entità
Le relazioni tra oggetti (partecipante ↔ corso, corso ↔ iscritti, azienda → partecipante) sono state implementate tramite metodi che modificano direttamente gli oggetti coinvolti, per garantire:
* Allineamento dei dati tra classi.
* Tracciabilità di azioni (es. iscrizioni, offerte di lavoro).
* Chiarezza di flusso, utile in caso di espansione verso un'interfaccia grafica o database.

 # 🧪 6. Test e simulazione
Alla fine del file, sono presenti delle istanze di test per:
* Simulare l’inserimento reale di dati (migranti, corsi, aziende).
* Verificare il corretto funzionamento della logica di interazione.
* Offrire una base per eventuali test automatici o simulazioni future.

 # 📌 Conclusione
Le scelte fatte si basano su principi fondamentali dello sviluppo orientato agli oggetti e della buona progettazione software:
* Chiarezza, modularità, riusabilità e manutenibilità.
* Focus su una logica realistica e adattabile per un contesto sociale ed educativo concreto come quello di IncluDO.
