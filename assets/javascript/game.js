// create characters playable
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
let enemyHp = 0;
let enemyAttack = 0;

// adding characters to the character area
let createChar = function () {
    for (let i = 0; i < characters.length; i++) {
        let charDiv = $('<div class="character ' + characters[i] + '">');
        let charName = $('<p class="character-name">').text(characters[i].name);
        let charImg = $('<img class="image">').attr("src", characters[i].imageUrl);
        let charHp = $('<p class="character-hp">').text(characters[i].hP);
        charDiv.append(charName).append(charImg).append(charHp);
        $('.yourChara').append(charDiv);
        
    }
}
// function for choosing starter character and moving others to 
let chooseChar = function (e) {
    if (currentChara === 0) {
        $(event.target).addClass("chosen");
        $(event.target).removeClass('characters');
       currentChara = $('.chosen');
       
       console.log(currentChara);
        if (currentEnemy === 0){
            let enemies = $('.characters');
            $('.enemies').append(enemies);
            $('.characters').addClass("villain");
            $('.villain').removeClass("characters");
        }else{
            let enemyMesg = $('<strong>').text('Keep Fighting!!');
            $('.enemyMsg').append(enemyMesg);
        }
    } else {
        let enemyMesg = $('<strong>').text('Please choose an enemy');
        $('.enemyMsg').append(enemyMesg);
    }
}
//choose enemy to fight
let chooseVillain = function (e){
    if (currentEnemy === 0){
        $(event.target).addClass("defender");
        $(event.target).removeClass("villain");
        currentEnemy = $('.defender');
        $('.fightingArea').append(currentEnemy);
    }else{
        let enemyMesg = $('<strong>').text('Keep Fighting!!');
        $('.enemyMsg').append(enemyMesg); 
    }
}

// actions for when the attack button is pushed
let attacking = function (e) {
    for ( let i = 0; i < characters.length; i++){
        if( $('currentChara.character-name') === characters[i].name){
         // not sure how to do this part
        } 
    }
}

$(document).ready(function () {
    //rendering each character
    $(characters).ready(createChar);
    // function to select character and move others to enemy space
    $(document).on('click','.character', function (e) {
        chooseChar();
    })
    // function to select enemy and move it to the Defender area
    $(document).on('click','.villain', function (e) {
        chooseVillain();
    })
    // function for action of attack button
    $(document).on('click','.attack', function (e) {
        attacking();
    })
});

