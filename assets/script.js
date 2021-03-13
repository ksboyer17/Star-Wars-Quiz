var startBtn = $("#startBtn")
var homePage = $("#homePage")
var questionContainer = $("#questionContainer")

console.log("this is linked")

startBtn.click(function() {
    homePage.addClass("hide");
    questionContainer.removeClass("hide")
});
