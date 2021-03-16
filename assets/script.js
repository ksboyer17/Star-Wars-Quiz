var startBtn = $("#startBtn")
var resultBtn = $("#resultBtn")
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