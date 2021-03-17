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
    resultContainer.removeClass("hide");
    handleScore();
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

    if (userScore >= 20 && userScore <= 25){
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
        var userCharacter = "Count Dooku";
        resulteName.text(userCharacter);
        var userDescription = "You are a Jedi Master that fell to the dark side of the Force. You are calm, strategic, but also maniacal and self serving.";
        resultDescription.text(userDescription)

    } if (userScore > 38 && userScore <= 43){
        var userCharacter = "Darth Maul";
        resulteName.text(userCharacter);
        var userDescription = "You are a Sith Lord warrior and scheming mastermind. You are on your way down a dark path, you are clever, savage, and resourceful.";
        resultDescription.text(userDescription)

    } if (userScore > 44 && userScore <= 50){
        var userCharacter = "General Grievous";
        resulteName.text(userCharacter);
        var userDescription = "You are a separatist military strategist and a feared Jedi hunter. You might be more evil than you think.";
        resultDescription.text(userDescription)

    } if (userScore > 51 && userScore <= 56){
        var userCharacter = "Boba Fett";
        resulteName.text(userCharacter);
        var userDescription = "You are the most feared bounty hunter in the galaxy. You are on your way to being evil.";
        resultDescription.text(userDescription)

    } if (userScore > 57 && userScore <= 62){
        var userCharacter = "Nute Gunray";
        resulteName.text(userCharacter);
        var userDescription = "You are a Viceroy of the Trade Federation, was more cutthroat than most. You conspired with the Sith Lord Darth Sidious to launch the blockade and subsequent invasion of Naboo. You are helping evil attain ultimate power.";
        resultDescription.text(userDescription)

    } if (userScore > 63 && userScore <= 68){
        var userCharacter = "Greedo";
        resulteName.text(userCharacter);
        var userDescription = "You are a Rodian bounty hunter from the Tetsu Clan and worked for gangster Jabba the Hutt. You are a ruthless thug. ";
        resultDescription.text(userDescription)

    } if (userScore > 69 && userScore <= 74){
        var userCharacter = "Anakin Skywalker";
        resulteName.text(userCharacter);
        var userDescription = "You are a Jedi knight who was supposed to be the chosen one. You are known for being arrogant, having anger issues, but also for being loyal.";
        resultDescription.text(userDescription)

    } if (userScore > 75 && userScore <= 80){
        var userCharacter = "Lando Calirissian";
        resulteName.text(userCharacter);
        var userDescription = "You are a human male smuggler, gambler, and card player. You mean no harm to others, but at the same time look out for yourself. You are charming and conniving.";
        resultDescription.text(userDescription)

    } if (userScore > 81 && userScore <= 86){
        var userCharacter = "C3P0";
        resulteName.text(userCharacter);
        var userDescription = "You are a droid programmed for etiquette and protocol. You seem to have pure intentions. You are very literal and honest. ";
        resultDescription.text(userDescription)

    } if (userScore > 87 && userScore <= 92){
        var userCharacter = "R2D2";
        resulteName.text(userCharacter);
        var userDescription = "You are a astromech droid, a type of robot that usually served as a mechanic and backup computer for small spaceships. You know you want to do good, you are clever, resourceful and trustworthy. ";
        resultDescription.text(userDescription)

    } if (userScore > 93 && userScore <= 98){
        var userCharacter = "Jar Jar Binx";
        resulteName.text(userCharacter);
        var userDescription = "You are a clumsy, well-meaning Gungan that struggled to prove his worth throughout his life. You are trying to do good for others, you are known for being kind, and eager.";
        resultDescription.text(userDescription)

    } if (userScore > 99 && userScore <= 104){
        var userCharacter = "Chewbacca";
        resulteName.text(userCharacter);
        var userDescription = "You are a Wookiee male warrior, with a big heart and unwavering loyalty to his friends. You don’t talk much but others can depend on you.";
        resultDescription.text(userDescription)

    } if (userScore > 105 && userScore <= 110){
        var userCharacter = "Han Solo";
        resulteName.text(userCharacter);
        var userDescription = "You are a reckless smuggler with a sarcastic wit and a heart of gold. You can sometimes have strong self interests, but you care deeply for your friends.";
        resultDescription.text(userDescription)

    } if (userScore > 111 && userScore <= 116){
        var userCharacter = "Leia Organa";
        resulteName.text(userCharacter);
        var userDescription = "You are one of the greatest leaders of the Rebel Alliance, ranked among the galaxy’s great heroes. You have a warrior spirit, strong sense of duty, and will do anything for what you believe in.";
        resultDescription.text(userDescription)

    } if (userScore > 117 && userScore <= 122){
        var userCharacter = "Leia Organa";
        resulteName.text(userCharacter);
        var userDescription = "You are one of the greatest Jedi the galaxy has ever known for helping defeat the Galactic Empire. You are smart, and resourceful. Obtaining peace is your ultimate goal.";
        resultDescription.text(userDescription)

    } if (userScore > 123 && userScore <= 128){
        var userCharacter = "Obiwan Kenobi";
        resulteName.text(userCharacter);
        var userDescription = "You are a Jedi Master who was gifted in the ways of the Force. You are a noble, wise, caring and resourceful.";
        resultDescription.text(userDescription)

    } if (userScore > 129 && userScore <= 134){
        var userCharacter = "Yoda";
        resulteName.text(userCharacter);
        var userDescription = "You are a powerful Jedi Master and stronger than most in his connection with the Force. You are known for being a leader, very wise, and are well versed in your knowledge of the force. You see the good in others and want them to succeed.";
        resultDescription.text(userDescription)

    } if (userScore > 135 && userScore <= 140){
        var userCharacter = "Mace Windu";
        resulteName.text(userCharacter);
        var userDescription = " You are a revered Jedi Master and member of the Jedi High Council. You believe in rules, and are a pillar of honesty, nobility, but you can be a bit overly dogmatic.";
        resultDescription.text(userDescription)

    }
}
