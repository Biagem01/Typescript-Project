// Interfaccia IPartecipante
interface IPartecipante {
    nome: string;
    cognome: string;
    paeseOrigine: string;
    livelloIstruzione: string;
    competenzeLinguistiche: string[];
    ambitoFormazioneInteresse: string;
    iscrivitiCorso(corso: ICorso): void;
  }
  
  // Interfaccia ICorso
  interface ICorso {
    titolo: string;
    descrizione: string;
    settoreProfessionale: string;
    durata: number; // in settimane
    elencoIscritti: IPartecipante[];
    aggiungiPartecipante(partecipante: IPartecipante): void;
  }
  
  // Interfaccia IAzienda
  interface IAzienda {
    nomeAzienda: string;
    settoreAttivita: string;
    descrizione: string;
    posizioniAperte: string[];
    offriPosizione(partecipante: IPartecipante, posizione: string): void;
  }
  
  // Classe Partecipante
  class Partecipante implements IPartecipante {
    constructor(
      public nome: string,
      public cognome: string,
      public paeseOrigine: string,
      public livelloIstruzione: string,
      public competenzeLinguistiche: string[],
      public ambitoFormazioneInteresse: string
    ) {}
  
    iscrivitiCorso(corso: ICorso): void {
      corso.aggiungiPartecipante(this);
      console.log(`${this.nome} ${this.cognome} si è iscritto al corso "${corso.titolo}".`);
    }
  }
  
  // Classe Corso
  class Corso implements ICorso {
    elencoIscritti: IPartecipante[] = [];
  
    constructor(
      public titolo: string,
      public descrizione: string,
      public settoreProfessionale: string,
      public durata: number
    ) {}
  
    aggiungiPartecipante(partecipante: IPartecipante): void {
      this.elencoIscritti.push(partecipante);
      console.log(`${partecipante.nome} ${partecipante.cognome} è stato aggiunto al corso "${this.titolo}".`);
    }
  
    mostraIscritti(): void {
      console.log(`Elenco iscritti al corso "${this.titolo}":`);
      this.elencoIscritti.forEach((partecipante) => {
        console.log(`- ${partecipante.nome} ${partecipante.cognome}`);
      });
    }
  }
  
  // Classe Azienda
  class Azienda implements IAzienda {
    posizioniAperte: string[] = [];
  
    constructor(
      public nomeAzienda: string,
      public settoreAttivita: string,
      public descrizione: string
    ) {}
  
    offriPosizione(partecipante: IPartecipante, posizione: string): void {
      this.posizioniAperte.push(posizione);
      console.log(
        `La posizione "${posizione}" presso l'azienda "${this.nomeAzienda}" è stata offerta a ${partecipante.nome} ${partecipante.cognome}.`
      );
    }
  
    mostraPosizioniAperte(): void {
      console.log(`Posizioni aperte presso l'azienda "${this.nomeAzienda}":`);
      this.posizioniAperte.forEach((posizione) => {
        console.log(`- ${posizione}`);
      });
    }
  }
  
  // Test del sistema
  function main() {
    // Creazione di alcuni partecipanti
    const migrante1 = new Partecipante("Mario", "Rossi", "Italia", "Laurea", ["Italiano", "Inglese"], "Cucina");
    const migrante2 = new Partecipante("Fatima", "Ahmed", "Marocco", "Diploma", ["Francese", "Italiano"], "Artigianato");
  
    // Creazione di alcuni corsi
    const corsoCucina = new Corso("Cucina Tradizionale", "Impara la cucina italiana tradizionale.", "Ristorazione", 12);
    const corsoFalegnameria = new Corso("Falegnameria Artigianale", "Impara a lavorare il legno.", "Artigianato", 16);
  
    // Iscrizione dei partecipanti ai corsi
    migrante1.iscrivitiCorso(corsoCucina);
    migrante2.iscrivitiCorso(corsoFalegnameria);
  
    // Visualizzazione degli iscritti ai corsi
    corsoCucina.mostraIscritti();
    corsoFalegnameria.mostraIscritti();
  
    // Creazione di un'azienda partner
    const azienda1 = new Azienda("Ristorante Bella Vita", "Ristorazione", "Un ristorante specializzato in cucina italiana.");
    const azienda2 = new Azienda("Bottega Legno & Design", "Artigianato", "Una bottega artigiana specializzata in mobili su misura.");
  
    // Offerta di posizioni lavorative
    azienda1.offriPosizione(migrante1, "Cuoco Junior");
    azienda2.offriPosizione(migrante2, "Apprendista Falegname");
  
    // Visualizzazione delle posizioni aperte
    azienda1.mostraPosizioniAperte();
    azienda2.mostraPosizioniAperte();
  }
  
  main();