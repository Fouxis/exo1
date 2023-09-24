"use strict";

// Création d'une classe Personnage pour créer le passager.
class Personnage {

    constructor(prenom, santeMentale) { 
        this.prenom = prenom;
        this.santeMentale = santeMentale;
    }
}

// Création d'un tableau contenant les musiques et artistes de 5 musiques. 
let musics = ["Anissa-Wejdene", "I need you-hello happy world", "crossing field-Liza", "One of us-Afterglow", "Fire Bird-Roselia"];

// Création d'une classe Trajet avec la méthode .rouler()
class Trajet {

    constructor(passager, radio, feuxRouges, changements) {
        this.passager = passager;
        this.radio = radio;
        this.feuxRouges = feuxRouges;
        this.changements = changements;
    }

    // Creation de la méthode qui fait fonctionner la course tant qu'il reste des feux rouges.
    rouler() {
        while (this.feuxRouges > 0) { //tant que les feux rouges sont au dessus de  0
            let music = Math.floor(Math.random() * musics.length); // création d'une variable musique pour choisir la musique au hasard
            this.radio = musics[music];
            
            // Si la radio lance la musique de Anissa-Wejdene, le passager perd 1point de santé mentale et
            // il change de taxi et passe le feu rouge.
            if (this.radio == musics[0]) {
                this.passager.sante -= 1;
                this.feuxRouges -= 1;
                this.changements += 1
            } else {
                this.feuxRouges -=1;
            }

            // Affichage de la musique jouée et du nombre de feux restants.
            console.log("Musique jouée :", this.radio, " | Feux rouges restants :", this.feuxRouges); 

            // Si le passager n'a plus de santé mentale  et qu'il reste des feux rouges, il a perdu.
            if (this.passager.santeMentale == 0 && this.feuxRouges != 0) {

                console.log(" BOOM EXPLOSION  !! Vous n'avez plus de Santé Mentale.Vous etes mort :)");
                break;

            // Si le passager a encore de la santé et qu'il ne reste plus de feux rouges, c'est gagné.
            } else if (this.passager.santeMentale > 0 && this.feuxRouges == 0) {

                console.log("Vous êtes arrivé chez vous ! Nombre de fois ou le passager à changer de taxi :", this.changements);
                break;

            // Enfin si le passager perd son dernier point de Santé mentale  au dernier feu, il gagne quand même.
            } else if (this.passager.santeMentale == 0 && this.feuxRouges == 0) { 

                console.log("Pile Poil !C'est passé Crème ! Nombre de fois ou le passager à changer de taxis :", this.changements)
            }
        }
    }
}


    let passager = new Personnage("Ethan", 10);
    let partie = new Trajet(passager, true, 30, 0);

    // Lancement de la course
    partie.rouler();                                            




