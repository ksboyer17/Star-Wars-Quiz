var startBtn = $("#startBtn");
var resultBtn = $("#resultBtn");
var restartBtn = $("#restartBtn");
var homePage = $("#homePage");
var questionContainer = $("#questionContainer");
var resultContainer = $("#resultContainer");
var resulteName = $("#resulteName");
var resultDescription = $("#resultDescription")


console.log("this is linked")


startBtn.click(function() {
    homePage.addClass("hide");
    questionContainer.removeClass("hide")
});


resultBtn.click(function() {
    questionContainer.addClass("hide");
    resultContainer.removeClass("hide")
});

restartBtn.click(function(){
    questionContainer.addClass("hide");
    resultContainer.addClass("hide")
    homePage.removeClass("hide");
}

)


var answerOne = $("input[type='radio'][name='answer1']:checked")
var answerTwn = $("input[type='radio'][name='answer2']:checked")
var answerThree = $("input[type='radio'][name='answer3']:checked")
var answerFour = $("input[type='radio'][name='answer4']:checked")
var answerFive = $("input[type='radio'][name='answer5']:checked")
var answerSix = $("input[type='radio'][name='answer6']:checked")
var answerSeven = $("input[type='radio'][name='answer7']:checked")
var answerEight = $("input[type='radio'][name='answer8']:checked")
var answerNine = $("input[type='radio'][name='answer9']:checked")
var answerTen = $("input[type='radio'][name='answer10']:checked")
console.log(answerOne.val());
console.log(answerTwn.val());
console.log(answerThree.val());
console.log(answerFour.val());
console.log(answerFive.val());
console.log(answerSix.val());
console.log(answerSeven.val());
console.log(answerEight.val());
console.log(answerNine.val());
console.log(answerTen.val());

var userScore = parseInt(answerOne.val()) + parseInt(answerTwn.val()) + parseInt(answerThree.val())+ parseInt(answerFour.val())+ parseInt(answerFive.val())+ parseInt(answerSix.val())+ parseInt(answerSeven.val())+ parseInt(answerEight.val())+ parseInt(answerNine.val())+ parseInt(answerTen.val())
console.log(userScore);


findTotal()

function handleScore() {
    var answerOne = $("input[type='radio'][name='answer1']:checked")
    var answerTwn = $("input[type='radio'][name='answer2']:checked")
    var answerThree = $("input[type='radio'][name='answer3']:checked")
    var answerFour = $("input[type='radio'][name='answer4']:checked")
    var answerFive = $("input[type='radio'][name='answer5']:checked")
    var answerSix = $("input[type='radio'][name='answer6']:checked")
    var answerSeven = $("input[type='radio'][name='answer7']:checked")
    var answerEight = $("input[type='radio'][name='answer8']:checked")
    var answerNine = $("input[type='radio'][name='answer9']:checked")
    var answerTen = $("input[type='radio'][name='answer10']:checked")

    var userScore = parseInt(answerOne.val()) + parseInt(answerTwn.val()) + parseInt(answerThree.val())+ parseInt(answerFour.val())+ parseInt(answerFive.val())+ parseInt(answerSix.val())+ parseInt(answerSeven.val())+ parseInt(answerEight.val())+ parseInt(answerNine.val())+ parseInt(answerTen.val())

    if (userScore > 20 && userScore <= 25){
        var userCharacter = "Palpatine";
        resulteName.text(userCharacter);
        var userDescription = "You are the ruthless emperor and evil Sith Lord. You are scheming, ruthless, powerful and as cold as they come.";
        resultDescription.text(userDescription)

    } if (userScore > 26 && userScore <= 31){
        var userCharacter = "Vader";
        resulteName.text(userCharacter);
        var userDescription = "You are a Sith Lord drawn to the dark side of the Force due to chaotic events in your life. You are authoritarian, serious, and powerful.";
        resultDescription.text(userDescription)

    } if (userScore > 32 && userScore <= 37){
        var userCharacter = "Count_Dooku";
        resulteName.text(userCharacter);
        var userDescription = "You are a Jedi Master that fell to the dark side of the Force. You are calm, strategic, but also maniacal and self serving.";
        resultDescription.text(userDescription)

    } if (userScore > 38 && userScore <= 43){
        var userCharacter = "Darth Maul";
        resulteName.text(userCharacter);
        var userDescription = "You are a Sith Lord warrior and scheming mastermind. You are on your way down a dark path, you are clever, savage, and resourceful.";
        resultDescription.text(userDescription)

    } if (userScore > 44 && userScore <= 50){
        var userCharacter = "General_Grievous";
        resulteName.text(userCharacter);
        var userDescription = "You are a separatist military strategist and a feared Jedi hunter. You might be more evil than you think.";
        resultDescription.text(userDescription)

    } if (userScore > 51 && userScore <= 56){
        var userCharacter = "Boba_Fett";
        resulteName.text(userCharacter);
        var userDescription = "You are the most feared bounty hunter in the galaxy. You are on your way to being evil.";
        resultDescription.text(userDescription)

    } if (userScore > 57 && userScore <= 62){
        var userCharacter = "Nute_Gunray";
        resulteName.text(userCharacter);
        var userDescription = "You are a Viceroy of the Trade Federation, was more cutthroat than most. You conspired with the Sith Lord Darth Sidious to launch the blockade and subsequent invasion of Naboo. You are helping evil attain ultimate power.";
        resultDescription.text(userDescription)

    } if (userScore > 63 && userScore <= 68){
        var userCharacter = "Greedo";
        resulteName.text(userCharacter);
        var userDescription = "You are a Rodian bounty hunter from the Tetsu Clan and worked for gangster Jabba the Hutt. You are a ruthless thug. ";
        resultDescription.text(userDescription)

    } if (userScore > 69 && userScore <= 74){
        var userCharacter = "Anakin_Skywalker";
        resulteName.text(userCharacter);
        var userDescription = "You are a Jedi knight who was supposed to be the chosen one. You are known for being arrogant, having anger issues, but also for being loyal.";
        resultDescription.text(userDescription)

    } if (userScore > 75 && userScore <= 80){
        var userCharacter = "Lando_Calirissian";
        resulteName.text(userCharacter);
        var userDescription = "You are a human male smuggler, gambler, and card player. You mean no harm to others, but at the same time look out for yourself. You are charming and conniving.";
        resultDescription.text(userDescription)

    } if (userScore > 81 && userScore <= 86){
        var userCharacter = "C3P0";
        resulteName.text(userCharacter);
        var userDescription = "You are a droid programmed for etiquette and protocol. You seem to have pure intentions. You are very literal and honest. ";
        resultDescription.text(userDescription)

    } if (userScore > 87 && userScore <= 92){
        var userCharacter = "C3P0";
        resulteName.text(userCharacter);
        var userDescription = "You are a droid programmed for etiquette and protocol. You seem to have pure intentions. You are very literal and honest. ";
        resultDescription.text(userDescription)

    }
}