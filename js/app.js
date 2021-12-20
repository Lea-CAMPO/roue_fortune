/***************************** */
/* Initialisation des variables */
/***************************** */

/* Compteur, roue et display */
let compteur = 0; /* S'incrémente à chaque tour de roue */
const display = document.querySelector(".display");
const wheel = document.getElementById("wheel-face");
const zoneSize = 30;

/* Tableau des segments de la roue */

let symbolSegments = [
  "Bag ???",
  "Today's Deal",
  "Today's Deal",
  "Free samples",
  "Free samples",
  "100$",
  "100$",
  "Amazing coupon",
  "Amazing coupon",
  "Gift card",
  "Gift card",
  "Bag ???",
];

/* Écoute du clic */
const buttonSpin = document.getElementById("button-spin");
buttonSpin.addEventListener("click", spinTheWheel);

/***************************** */
/* Fonctions */
/*************/

/* Fonction de calcul de l'angle pour récupérer le segment du haut */

function handleWin(actualDeg) {
  const winningSymbolNr = Math.floor(actualDeg / zoneSize);
  display.innerHTML = symbolSegments[winningSymbolNr];
}

/* Fonction d'animation de la roue déclenchée au clic */

function spinTheWheel() {
  /* Génération de l'angle de la roue (valeur aléatoire) */
  let deg = Math.floor(1080 + Math.random() * 3600);
  let actualDeg = deg % 360;

  handleWin(actualDeg);

  let spinAnimation = gsap.to(wheel, {
    duration: 0,
    rotation: 0,
  });
  spinAnimation.play(0);

  /* Nombre de chances defini à 3 */
  if (compteur < 3) {
    /* Définition de l'animation de la roue */
    let spinAnimation = gsap.to(wheel, {
      duration: 5,
      rotation: deg,
      ease: "ease",
    });
    spinAnimation.play(0);
    compteur++;

    /* Tant que l'animation n'est pas finie, on ne peut pas la relancer */
    buttonSpin.disabled = true;

    setTimeout(() => {
      buttonSpin.disabled = false;
    }, 5000);
  } else {
    /* Au bout de trois fois, on ne peut plus jouer */
    alert("Vous ne pouvez plus jouer");
  }
}
