// all character divs have class .jsCharacter to identify

// at the begining of the game, clicking on .jsCharacter adds class .jsMyCharacter to identify the character as belonging to the player

// run loop to look at all .jsCharacter,
// if ( $(".jsMyCharacter") ) {
// do nothing
// else {
// add .jsDefender
// }

// using math.random, choose 1 of .jsDefenders at random to be the .jsCurrentDefender


///////////////////////////////////

// move .jsDefender to appropriate section

// move .jsCurrentDefender to appropriate section

// need to figure out how attacks work in order to create logic for what happens when the the 'attack' button is clicked

// Click events for crystals
//  var crystals = $("#crystals");
// crystals.on("click", ".crystal-image", function () {

// var allCharacters = $("#jsAllCharacters");

// allCharacters.on("click", ".jsCharacter", function () {

//     alert("click");
//     // $(this).attr("class")// .append(".jsMyPlayer");

// }

var myPlayerHeading = "<h2>My Player</h2>";


// SEPARATE MY PLAYER AND POTENTIAL OPPONENTS
var allCharacters = $("#jsAllCharacters");

allCharacters.on("click", ".jsCharacter", function () {

    // SELECT MY PLAYER
    $(this).addClass("jsMyPlayer");
    $(this).removeClass("jsCharacter");


    var myPlayerDiv = this;

    console.log(this);

    $(this).remove();

    // SET ALL OTHER PLAYERS TO DEFENDERS
    $(".jsCharacter").addClass("jsDefender");
    $(".jsCharacter").removeClass("jsCharacter");

    // CHANGE TEXT FOR 'CHOOSE PLAYER' TO 'DEFENDERS'
    $("#jsCharList").text("Choose Your Attacker");

    console.log(myPlayerHeading + myPlayerDiv);

    // INSERT MyPlayer ABOVE 'DEFENDERS'
    $("#jsMyPlayerSection").append(myPlayerHeading).append(myPlayerDiv);


});




// SELECT ONE DEFENDER AS OPPONENT
// count defenders
// select one at random with math.random