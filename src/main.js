// Classe Partecipante
var Partecipante = /** @class */ (function () {
    function Partecipante(nome, cognome, paeseOrigine, livelloIstruzione, competenzeLinguistiche, ambitoFormazioneInteresse) {
        this.nome = nome;
        this.cognome = cognome;
        this.paeseOrigine = paeseOrigine;
        this.livelloIstruzione = livelloIstruzione;
        this.competenzeLinguistiche = competenzeLinguistiche;
        this.ambitoFormazioneInteresse = ambitoFormazioneInteresse;
    }
    Partecipante.prototype.iscrivitiCorso = function (corso) {
        corso.aggiungiPartecipante(this);
        console.log("".concat(this.nome, " ").concat(this.cognome, " si \u00E8 iscritto al corso \"").concat(corso.titolo, "\"."));
    };
    return Partecipante;
}());
// Classe Corso
var Corso = /** @class */ (function () {
    function Corso(titolo, descrizione, settoreProfessionale, durata) {
        this.titolo = titolo;
        this.descrizione = descrizione;
        this.settoreProfessionale = settoreProfessionale;
        this.durata = durata;
        this.elencoIscritti = [];
    }
    Corso.prototype.aggiungiPartecipante = function (partecipante) {
        this.elencoIscritti.push(partecipante);
        console.log("".concat(partecipante.nome, " ").concat(partecipante.cognome, " \u00E8 stato aggiunto al corso \"").concat(this.titolo, "\"."));
    };
    Corso.prototype.mostraIscritti = function () {
        console.log("Elenco iscritti al corso \"".concat(this.titolo, "\":"));
        this.elencoIscritti.forEach(function (partecipante) {
            console.log("- ".concat(partecipante.nome, " ").concat(partecipante.cognome));
        });
    };
    return Corso;
}());
// Classe Azienda
var Azienda = /** @class */ (function () {
    function Azienda(nomeAzienda, settoreAttivita, descrizione) {
        this.nomeAzienda = nomeAzienda;
        this.settoreAttivita = settoreAttivita;
        this.descrizione = descrizione;
        this.posizioniAperte = [];
    }
    Azienda.prototype.offriPosizione = function (partecipante, posizione) {
        this.posizioniAperte.push(posizione);
        console.log("La posizione \"".concat(posizione, "\" presso l'azienda \"").concat(this.nomeAzienda, "\" \u00E8 stata offerta a ").concat(partecipante.nome, " ").concat(partecipante.cognome, "."));
    };
    Azienda.prototype.mostraPosizioniAperte = function () {
        console.log("Posizioni aperte presso l'azienda \"".concat(this.nomeAzienda, "\":"));
        this.posizioniAperte.forEach(function (posizione) {
            console.log("- ".concat(posizione));
        });
    };
    return Azienda;
}());
// Test del sistema
function main() {
    // Creazione di alcuni partecipanti
    var migrante1 = new Partecipante("Mario", "Rossi", "Italia", "Laurea", ["Italiano", "Inglese"], "Cucina");
    var migrante2 = new Partecipante("Fatima", "Ahmed", "Marocco", "Diploma", ["Francese", "Italiano"], "Artigianato");
    // Creazione di alcuni corsi
    var corsoCucina = new Corso("Cucina Tradizionale", "Impara la cucina italiana tradizionale.", "Ristorazione", 12);
    var corsoFalegnameria = new Corso("Falegnameria Artigianale", "Impara a lavorare il legno.", "Artigianato", 16);
    // Iscrizione dei partecipanti ai corsi
    migrante1.iscrivitiCorso(corsoCucina);
    migrante2.iscrivitiCorso(corsoFalegnameria);
    // Visualizzazione degli iscritti ai corsi
    corsoCucina.mostraIscritti();
    corsoFalegnameria.mostraIscritti();
    // Creazione di un'azienda partner
    var azienda1 = new Azienda("Ristorante Bella Vita", "Ristorazione", "Un ristorante specializzato in cucina italiana.");
    var azienda2 = new Azienda("Bottega Legno & Design", "Artigianato", "Una bottega artigiana specializzata in mobili su misura.");
    // Offerta di posizioni lavorative
    azienda1.offriPosizione(migrante1, "Cuoco Junior");
    azienda2.offriPosizione(migrante2, "Apprendista Falegname");
    // Visualizzazione delle posizioni aperte
    azienda1.mostraPosizioniAperte();
    azienda2.mostraPosizioniAperte();
}
main();
