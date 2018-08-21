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
            name:'Darth Maul',
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
let currentChara;
let currentEnemy; 
// adding characters to the character area

let createChar = function (){
    let i = 0;
    let charDiv = $('<div class="character '+ characters.name +'">');
    let charName = $('<p class="character-name">').text(characters[i].name);
    let charImg = $('<img class="image">').attr("src", characters[i].imageUrl);
    let charHp = $('<p class="character-hp">').text(characters[i].hP);
    charDiv.append(charName).append(charImg).append(charHp);
    $('.yourChara').append(charDiv);
    i++;
}

console.log(characters.name);
$(document).ready(function(){
    //rendering each character
   $(characters).each(createChar);

})

