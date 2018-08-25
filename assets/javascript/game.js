// create characters playable as an object
let characters = [
    {
        name: 'Obi Wan',
        hP: 200,
        attack: 15,
        imageUrl: "assets/images/placeholderimg.png"
    },
    {
        name: 'Aayla Secura',
        hP: 150,
        attack: 10,
        imageUrl: "assets/images/placeholderimg.png"
    },
    {
        name: 'Darth Maul',
        hP: 175,
        attack: 10,
        imageUrl: "assets/images/placeholderimg.png"
    },
    {
        name: 'Darth Sidious',
        hP: 250,
        attack: 20,
        imageUrl: "assets/images/placeholderimg.png"
    }
]
// global variables
let currentChara = 0;
let currentEnemy = 0;
let defender = 0;
let yourHp = 0;
let yourAttack = 0;
let enemyName = 0;
let enemyHp = 0;
let enemyAttack = 0;

// adding characters to the character area
let createChar = function () {
    for (let i = 0; i < characters.length; i++) {
        let charDiv = $('<section class="character ' + characters[i] + '">');
        let charName = $('<p class="character-name">').text(characters[i].name);
        let charImg = $('<img class="image">').attr("src", characters[i].imageUrl);
        let charHp = $('<p class="character-hp">').text(characters[i].hP);
        charDiv.append(charName, charImg, charHp);
        $('.yourChara').append(charDiv);

    }
}
// function for choosing starter character and moving others to enemy area
let chooseChar = function () {
    //sets the current character variable to equal the clicked on character and stores stats. need to fix for when image is clicked.
    if (currentChara === 0) {
        $(event.target.parentNode).removeClass(".character");
        $(event.target.parentNode).addClass("chosen");
        currentChara = $(event.target.parentNode);
        yourHp = $(currentChara.hP).val();
        yourAttack = $(currentChara.attack).val();
        // trouble getting character to stay
        // appends other characters by their class name to a new part of the page where the enemies go by the enemies class name
        let enemies = $('.character');
        $('.enemies').append(enemies);
        $('.character').addClass("villain");
        $('.villain').removeClass(".character");
        $('section.villain').remove('.chosen');
    } else {
        // tells player to choose an enemy when they try to click anything else after selecting their character
        let enemyMesg = $('<strong>').text('Please choose an enemy');
        $('.enemyMsg').empty().append(enemyMesg);
    }
}
//choose enemy to fight and move that enemy to the defender area
let chooseVillain = function () {
    if (currentEnemy === 0) {
        $(event.target.parentNode).removeClass(".villain");
        $(event.target.parentNode).addClass("defender");
        currentEnemy = $(event.target.parentNode);
        $('.fightingArea').append(currentEnemy);
        enemyName = $(currentEnemy.name).val();
        enemyHp = $(currentEnemy.hP).val();
        enemyAttack = $(currentEnemy.attack).val();
    } else {
        let enemyMesg = $('<strong>').text('Keep Fighting!!');
        $('.enemyMsg').empty().append(enemyMesg);
    }
}

// actions for when the attack button is pushed
let attacking = function () {
    let remainYourHp = yourHp - enemyAttack;
    let remainEnemyHp = enemyHp - yourAttack;
    let yourStatus = $('<p>').text('You have dealt ' + yourAttack + ' damage to ' + enemyName);
    let enemyStatus = $('<p>').text(enemyName + ' has dealt ' + enemyAttack + ' to you');
    $('.actionText').empty().append(yourStatus).append(enemyStatus);
    yourHp = remainYourHp;
    enemyHp = remainEnemyHp;
   
    if (yourHp < 0){
        $('.actionText').empty().text("You've been defeated!! feel free to try again Loser");
        $('button.reset').css("visibility","visible");
    }else{
         yourAttack = yourAttack + $(currentChara.attack).val();
    }
    if(enemyHp < 0){
        $('.actionText').empty().text("Huzzah!! youve beaten an enemy!!");
    } else{
        
    }
}

let reset = function (){
    currentChara = 0;
    currentEnemy = 0;
    
}
$(document).ready(function () {
    //rendering each character
    $(characters).ready(createChar);
    // function to select character and move others to enemy space
    $(document).on('click', '.character', function (event) {
        chooseChar();
    })
    // function to select enemy and move it to the Defender area
    $(document).on('click', '.villain', function (event) {
        chooseVillain();
    })
    // function for action of attack button
    $(document).on('click', '.attack', function (event) {
        attacking();
    })
    $(document).on('click', '.reset', function (event){
        reset();
    })
});

/* outline Notes

load characters on page [Good]
choose character
	- on click of character 
		- set character to be  the chosen character to fight with [issue trying to get it to stay]
		- remove other characters from character area and add them to the enemies area [Almost]
		- store character hP and attack in variables.
choose enemy
	- on click of enemy
		- set enemy to be the chosen enemy to defeat
		- remove enemy from enemy area and add to defender area
		- if an enemy is already chosen
			- make other enemies unclickable and/or wait till current enemy is 				defeated (hP = 0) or if the current enemy is still in the 	defender area 				and still fightable.
		- store enemy hP in a variable
click attack button
	- chosen character takes damage (currentChara hP - current enemy attack)
	- enemy character takes damage (currentEnemy hP - currentChara attack)
	- display as a message how much damage your character has dealt to the enemy, and 	how much damage the enemy has dealt to you.
	- add original currentcharacter attack value to its current value (increase attack in 	incriments of its original attack value)
	- check defeat
		- if enemy hP = 0 or less
			- show message of deafeat of enemy, and to choose another enemy 				to fight.
			- make other enemies clickable again, and remove current enemy 				from defender zone, as well as setting currentEnemy to 0 again.
			- if no other enemies are available to fight
				- show message Winner!
				- show reset button with message "play again?"
		- if enemy hP is greater than 0
			-wait for attack button click
		- if currentCharacter hP is 0 or less
			- show message that the game is over
			- show restart button
			- reset the page
		- if currentCharacter hP is greater than 0
			- wait for attack button click
*/