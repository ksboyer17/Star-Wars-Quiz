var startBtn = $("#startBtn");
var resultBtn = $("#resultBtn");
var restartBtn = $("#restartBtn");
var homePage = $("#homePage");
var questionContainer = $("#questionContainer");
var resultContainer = $("#resultContainer");
var resulteName = $("#resulteName");
var resultDescription = $("#resultDescription")
var resultImage = $("#resultImage")
var beforeBtnOne = $("#beforeBtnOne")
var beforeBtnTwo = $("#beforeBtnTwo")
var responseName = ""

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
    location.reload(); // added on Mar 16th
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

    if (userScore <= 25){
        var userDescription = "You are the ruthless emperor and evil Sith Lord. You are scheming, ruthless, powerful and as cold as they come.";
        resultDescription.text(userDescription);
        var peopleIndex = 21;

    } if (userScore >= 26 && userScore <= 31){
        var userDescription = "You are a Sith Lord drawn to the dark side of the Force due to chaotic events in your life. You are authoritarian, serious, and powerful.";
        resultDescription.text(userDescription)
        var peopleIndex = 4;

    } if (userScore > 31 && userScore <= 37){
        var userDescription = "You are a Jedi Master that fell to the dark side of the Force. You are calm, strategic, but also maniacal and self serving.";
        resultDescription.text(userDescription);
        var peopleIndex = 67;

    } if (userScore > 37 && userScore <= 43){
        var userDescription = "You are a Sith Lord warrior and scheming mastermind. You are on your way down a dark path, you are clever, savage, and resourceful.";
        resultDescription.text(userDescription);
        var peopleIndex = 44;

    } if (userScore > 43 && userScore <= 50){
        var userDescription = "You are a separatist military strategist and a feared Jedi hunter. You might be more evil than you think.";
        resultDescription.text(userDescription);
        var peopleIndex = 79;

    } if (userScore > 50 && userScore <= 56){
        var userDescription = "You are the most feared bounty hunter in the galaxy. You are on your way to being evil.";
        resultDescription.text(userDescription);
        var peopleIndex = 22;

    } if (userScore > 56 && userScore <= 62){
        var userDescription = "You are a Viceroy of the Trade Federation, was more cutthroat than most. You conspired with the Sith Lord Darth Sidious to launch the blockade and subsequent invasion of Naboo. You are helping evil attain ultimate power.";
        resultDescription.text(userDescription);
        var peopleIndex = 33;

    } if (userScore > 62 && userScore <= 68){
        var userDescription = "You are a Rodian bounty hunter from the Tetsu Clan and worked for gangster Jabba the Hutt. You are a ruthless thug. ";
        resultDescription.text(userDescription);
        var peopleIndex = 15;

    } if (userScore > 68 && userScore <= 74){
        var userDescription = "You are a Jedi knight who was supposed to be the chosen one. You are known for being arrogant, having anger issues, but also for being loyal.";
        resultDescription.text(userDescription);
        var peopleIndex = 11;

    } if (userScore > 74 && userScore <= 80){
        var userDescription = "You are a human male smuggler, gambler, and card player. You mean no harm to others, but at the same time look out for yourself. You are charming and conniving.";
        resultDescription.text(userDescription);
        var peopleIndex = 25;

    } if (userScore > 80 && userScore <= 86){
        var userDescription = "You are a droid programmed for etiquette and protocol. You seem to have pure intentions. You are very literal and honest. ";
        resultDescription.text(userDescription)
        var peopleIndex = 2;

    } if (userScore > 86 && userScore <= 92){
        var userDescription = "You are a astromech droid, a type of robot that usually served as a mechanic and backup computer for small spaceships. You know you want to do good, you are clever, resourceful and trustworthy. ";
        resultDescription.text(userDescription);
        var peopleIndex = 3;

    } if (userScore > 92 && userScore <= 98){
        var userDescription = "You are a clumsy, well-meaning Gungan that struggled to prove his worth throughout his life. You are trying to do good for others, you are known for being kind, and eager.";
        resultDescription.text(userDescription)
        var peopleIndex = 36;

    } if (userScore > 98 && userScore <= 104){
        var userDescription = "You are a Wookiee male warrior, with a big heart and unwavering loyalty to his friends. You don’t talk much but others can depend on you.";
        resultDescription.text(userDescription);
        var peopleIndex = 13;

    } if (userScore > 104 && userScore <= 110){
        var userDescription = "You are a reckless smuggler with a sarcastic wit and a heart of gold. You can sometimes have strong self interests, but you care deeply for your friends.";
        resultDescription.text(userDescription);
        var peopleIndex = 14;

    } if (userScore > 110 && userScore <= 116){
        var userDescription = "You are one of the greatest leaders of the Rebel Alliance, ranked among the galaxy’s great heroes. You have a warrior spirit, strong sense of duty, and will do anything for what you believe in.";
        resultDescription.text(userDescription);
        var peopleIndex = 5;

    } if (userScore > 116 && userScore <= 122){
        var userDescription = "You are one of the greatest Jedi the galaxy has ever known for helping defeat the Galactic Empire. You are smart, and resourceful. Obtaining peace is your ultimate goal.";
        resultDescription.text(userDescription);
        var peopleIndex = 1;

    } if (userScore > 122 && userScore <= 128){
        var userDescription = "You are a Jedi Master who was gifted in the ways of the Force. You are a noble, wise, caring and resourceful.";
        resultDescription.text(userDescription);
        var peopleIndex = 10;

    } if (userScore > 128 && userScore <= 134){
        var userDescription = "You are a powerful Jedi Master and stronger than most in his connection with the Force. You are known for being a leader, very wise, and are well versed in your knowledge of the force. You see the good in others and want them to succeed.";
        resultDescription.text(userDescription);
        var peopleIndex = 20;

    } if (userScore > 134 && userScore <= 140){
        var userDescription = " You are a revered Jedi Master and member of the Jedi High Council. You believe in rules, and are a pillar of honesty, nobility, but you can be a bit overly dogmatic.";
        resultDescription.text(userDescription);
        var peopleIndex = 51;

    }
    console.log(userScore);
    console.log(peopleIndex);// added on Mar 16th

    function characterInfo() {// added on Mar 16th
        const API_URL ="https://cors-anywhere.herokuapp.com/https://swapi.dev/api/people/" + peopleIndex
        fetch(API_URL, {
            method: "GET"
        })
        .then(responce => responce.json())
        .then(function(response){
            console.log(response.name);
            if (response.name === "Dooku") {
                responseName = "Count " + response.name
            }
            else responseName = response.name;
                if (localStorage.getItem("CharacterOne_name") === null) {
                    localStorage.setItem("CharacterOne_name", responseName);
                    beforeBtnOne.text(localStorage.getItem("CharacterOne_name"));
                } else if (localStorage.getItem("CharacterTwo_name") === null) {
                    localStorage.setItem("CharacterTwo_name", responseName);
                    console.log("CharacterTwo_name")
                    beforeBtnOne.text(localStorage.getItem("CharacterOne_name"));
                    beforeBtnTwo.text(localStorage.getItem("CharacterTwo_name"));
                } else if (localStorage.getItem("CharacterThree_name") === null) {
                    localStorage.setItem("CharacterThree_name", responseName);
                    console.log("CharacterThree_name")
                 if (localStorage.getItem("CharacterOne_name") !== null && localStorage.getItem("CharacterTwo_name") !== null  ){
                    beforeBtnOne.text(localStorage.getItem("CharacterOne_name"));
                    localStorage.setItem("CharacterOne_name", localStorage.getItem("CharacterTwo_name"));
                    beforeBtnTwo.text(localStorage.getItem("CharacterTwo_name"));
                    localStorage.setItem("CharacterTwo_name", localStorage.getItem("CharacterThree_name"));

                    }
                }
                 else {
                    localStorage.setItem("CharacterThree_name", responseName);
                    beforeBtnOne.text(localStorage.getItem("CharacterOne_name"));
                    localStorage.setItem("CharacterOne_name", localStorage.getItem("CharacterTwo_name"));
                    beforeBtnTwo.text(localStorage.getItem("CharacterTwo_name"));
                    localStorage.setItem("CharacterTwo_name", localStorage.getItem("CharacterThree_name"));


                 }

            var characterRes = document.createElement("span");
            characterRes.setAttribute("class","result container is-widescreen result-container");
            characterRes.innerHTML = responseName;
            console.log(responseName);
            resulteName.append(characterRes);
            console.log("name added");

            var git_key = "xtpfYZdjgPj82u3H7TZEODHTWlef6Udk";
            var gif_URL = "https://api.giphy.com/v1/gifs/search?api_key=" + git_key + "&q=" + responseName;
            console.log(gif_URL)
            fetch(gif_URL)
            .then(function (response) {
                if (!response.ok){
                    throw response.json();
                }
                return response.json();
            })
            .then(function(gifRes){
                console.log(gifRes);
                var gifImg = gifRes.data[1].images.original.url;
                var gifResorce = document.createElement("img");
                console.log(gifImg);
                gifResorce.setAttribute("src", gifImg);
                console.log(gifImg.type);
                resultImage.append(gifResorce);
                console.log(resultImage);
            })
        })



    };

    characterInfo()// added on Mar 16t
}
