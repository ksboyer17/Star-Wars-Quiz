var startBtn = $("#startBtn")
var resultBtn = $("#resultBtn")
var restartBtn = $("#restartBtn")
var homePage = $("#homePage")
var questionContainer = $("#questionContainer")
var resultContainer = $("#resultContainer")

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

var userScore = answerOne.val() + answerTwn.val() + answerThree.val() + answerFour.val() + answerFive.val() + answerSix.val() + answerSeven.val() + answerEight.val() + answerNine.val() + answerTen.val()

console.log(userScore);

function findTotal(){
    var arr = document.getElementsByClassName("radio");
    var tot = 0;
    console.log(arr);
    for (var i=0; i<arr.length;i++){
        if(parseInt(arr[i].value))
            tot += parseInt(arr[i].value);
    }
    console.log(tot);
}

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

    var userScore = answerOne.val() + answerTwn.val() + answerThree.val() + answerFour.val() + answerFive.val() + answerSix.val() + answerSeven.val() + answerEight.val() + answerNine.val() + answerTen.val()
}