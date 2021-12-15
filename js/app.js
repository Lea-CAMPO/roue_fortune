let compteur = 0;
const display = document.querySelector('.display');
  
function spinTheWheel() {

    let arc = 360 / 6;

    /* Génération de l'angle de la roue (valeur aléatoire) */
    let deg = Math.floor(5000 + Math.random() *5000);
    let actualDeg = deg %360;
    let zoneSize= 45;
   
    /* Définition de l'animation de la roue */

    const wheel = document.getElementsByClassName("roue");
    let spinAnimation = gsap.to(wheel, {duration: 5, rotation: deg, ease:"bounce"});
    spinAnimation.pause();

    let symbolSegments = {
        1:"Today's deal",
        2:"Free samples",
        3:"100$",
        4:"Bag ???",
        5:"Amazon coupon",
        6:"Gift card",
    };

    const handleWin = (actualDeg) => {
        const winningSymbolNr = Math.ceil(actualDeg / zoneSize);
        display.innerHTML = symbolSegments[winningSymbolNr];
      }

      handleWin(actualDeg);

    if (compteur < 3) {
        
        spinAnimation.play(0);
        compteur ++;
    }

    else {
        alert("Vous ne pouvez plus jouer")
    }
}

const buttonSpin = document.getElementById("button-spin");

buttonSpin.addEventListener('click', spinTheWheel);