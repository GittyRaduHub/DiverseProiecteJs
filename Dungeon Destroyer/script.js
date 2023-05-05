'use strict'

let healthPointsTarget = 100;
let manaPoints = 100;
const fireSpell = 20;
let target = 'alive';


if (target == 'alive') {
    Fireball.onclick = function fireBall() {
        document.getElementById("display").style.backgroundColor = "red";
        if (manaPoints >= fireSpell && healthPointsTarget > 0) {
            manaPoints = manaPoints - fireSpell;
            document.getElementById("action").innerText = `Fireball has been casted!`;
            document.getElementById("mana").innerText =
                `${manaPoints} mana left!`;
            healthPointsTarget = healthPointsTarget - 10;
            if (healthPointsTarget == 0) {
                document.getElementById("action").innerText = "Target is dead!"
                target = 'dead';
                document.getElementById("mana").innerText = "You have won!"
            }
            document.getElementById("hpEnemy").innerHTML = `Enemy has ${healthPointsTarget} HP!`;
            console.log(`The target lost 15hp and is now at ${healthPointsTarget}`)
            return manaPoints;
        }
        else if (manaPoints < fireSpell && healthPointsTarget > 0) {

            const manaNeeded = fireSpell - manaPoints;
            console.log(`You need ${manaNeeded}`);
            document.getElementById("action").innerText = `Not enough mana! You need ${manaNeeded}`;
        }
        else if (healthPointsTarget == 0) {
            document.getElementById("hpEnemy").innerText = "Target is dead!"
            target = 'dead';
            document.getElementById("action").innerText = "You have won!"
            document.getElementById("mana").innerText = "Go to the next level?"
        }
    }
}

else if (target == 'dead') {
    console.log("Can't do that!")
}

Revive.onclick = function Revive() {
    if (healthPointsTarget <= 0) {
        document.getElementById("display").style.backgroundColor = "green";
        if (target == 'dead') {
            target = 'alive'
            document.getElementById("action").innerText = "Your Target has been revived!";
            healthPointsTarget = 100;
            manaPoints = 100;
            document.getElementById("hpEnemy").innerHTML = `The enemy has ${healthPointsTarget} HP!`;
            document.getElementById("mana").innerHTML = "Prepare for the next fight!"
        }
        else {
            console.log('You already have a target!')
        }
    }
}

Potion.onclick = function manaPotion() {
    document.getElementById("display").style.backgroundColor = "blue";
    if (manaPoints < 100 && healthPointsTarget > 0) {
        manaPoints = manaPoints + 20;
        manaPoints > 100 ? manaPoints = 100 : manaPoints = manaPoints;
        document.getElementById("action").innerText = '20 mana points have been replenished!';
        document.getElementById("mana").innerText = `You have ${manaPoints} mana!`
    }
    else if (manaPoints == 100) {
        document.getElementById("action").innerText = 'You already have full mana!';

    }
    return manaPoints
}

