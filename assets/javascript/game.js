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

/*let chooseChar = function () {
    console.log(currentChara, "one");
    if (currentChara = 0) {
        console.log(currentChara);
        $('.characters').addClass(" chosen");
        $('.chosen').removeClass('characters');
       currentChara = $('.chosen');
        for (currentEnemy = 0) {
            let enemies = $('.characters');
            $('.enemies').append(enemies);
            $('.characters').addClass("villain");
            $('.villain').removeClass("characters");
        }
    } else {
        let enemyMesg = $('<strong>').text(Please choose an enemy);
        $('.enemyMsg').append(enemyMesg);
    }
    for(){
        $('.character').addClass('.enemy').removeClass('.character');
        console.log('.enemy');
    }
}*/

$(document).ready(function () {
    //rendering each character
    $(characters).ready(createChar);
    $('img.image').on('click', function () {
        console.log(currentChara, "first");
        //chooseChar();
    }) // not working, get a selection to respond when a character box is clicked on//
    /*function for selecting character and moving others to enemy space*/
});

