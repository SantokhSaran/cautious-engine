//global variables 
var g_iPoints = 0;
var g_iPage = 1; 
var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d')
var imageObj = new Image();
//switch
// 2 choices per page

function firstChoice() {

    switch (g_iPage) {
        case 1:
            firstPageOption1();
            g_iPoints++;                    //points change ending
            g_iPage++;
            document.getElementById("button1").textContent = "Whats wrong"; 
            document.getElementById("button2").textContent = "Why you so grumpy?";
            break;
        case 2:
            secondPageOption1();
            g_iPoints++;
            g_iPage++;
            document.getElementById("button1").textContent = "OMG im sorry"; 
            document.getElementById("button2").textContent = "Did i say something wrong?";
            break;
        case 3:
            thirdPageOption1();
            g_iPoints++;
            g_iPage++;
            document.getElementById("button1").textContent = "Would you like to go for a walk?"; 
            document.getElementById("button2").textContent = "My deadlines are tough too";
            break;
        case 4:
            fourthPageOption1();
            g_iPoints++;
            g_iPage++;
            document.getElementById("button1").textContent = "Ahh okay, a drink always cheers me up";
            document.getElementById("button2").textContent = "You walk pretty slow";
            break;
        case 5:
            fifthPageOption1();
            g_iPoints++;
            g_iPage++;
            document.getElementById("button1").textContent = "Dont, be silly ill get this, what do you want?";
            document.getElementById("button2").textContent = "Cheers ill have a Strawberries & Cream";
            break;
        case 6:
            endingPage()
            document.getElementById("button1").textContent = null;
            document.getElementById("button2").textContent = null;
            break;
    }
}

function secondChoice() {
    switch (g_iPage) {
        case 1:
            firstPageOption2();
            g_iPage++;
            document.getElementById("button2").textContent = "Whats wrong?"; 
            document.getElementById("button1").textContent = "why you so grumpy?"; 
            break;
        case 2:
            secondPageOption2();
            g_iPage++;
            document.getElementById("button2").textContent = "did i say something wrong?";
            document.getElementById("button1").textContent = "OMG im sorry";
            break;
        case 3:
            thirdPageOption2();
            g_iPage++;
            document.getElementById("button2").textContent = "My deadlines are tough too";
            document.getElementById("button1").textContent = "Would you like to go for a walk?"; 
            break;
        case 4:
            fourthPageOption2();
            g_iPage++;
            document.getElementById("button2").textContent = "You walk pretty slow";
            document.getElementById("button1").textContent = "Ahh okay, a drink always cheers me up";
            break;
        case 5:
            fifthPageOption2();
            g_iPage++;
            document.getElementById("button2").textContent = "Cheers ill have a Strawberries & Cream";
            document.getElementById("button1").textContent = "Dont, be silly ill get this, what do you want?";
            break;
        case 6:
            endingPage();
            document.getElementById("button1").textContent = null;
            document.getElementById("button2").textContent = null;
            break;
            
    }

}
//ending page function
function chooseEnding() 
{
    console.log(g_iPoints);
    if (g_iPoints == 5)
    {
        goodEnding();
        document.getElementById("button2").textContent = "Yay you won";
        document.getElementById("button1").textContent = null;
    }
    else
    {
        badEnding();
        document.getElementById("button2").textContent = "Better luck next time";
        document.getElementById("button1").textContent = null;
    }
}
function firstPageOption1()   //options 
{
    imageObj.src = "images/jasWithStarbucks.png";
    imageObj.onload = function () {
        context.drawImage(imageObj, 0, 0, 1200, 600);
    };
}
function firstPageOption2()
{
    imageObj.src = "images/jasWithStarbucks.png";
    imageObj.onload = function () {
        context.drawImage(imageObj, 0, 0, 1200, 860);
    };
}
function secondPageOption1()
{
    imageObj.src = "images/jasMean.jpg";
    imageObj.onload = function () {
        context.drawImage(imageObj, 0, 0, 1200, 600);
    };
    alert("a coffee is thown at you")
}
function secondPageOption2()
{
    imageObj.src = "images/jasSword.jpg";
    imageObj.onload = function () {
        context.drawImage(imageObj, 0, 0, 1200, 600);
    };
    alert("you get chills at the evil look thrown your way")
}
function thirdPageOption1()
{
    imageObj.src = "images/jasPath.jpg";
    imageObj.onload = function () {
        context.drawImage(imageObj, 0, 0, 1200, 600);
    };
}
function thirdPageOption2()
{
    imageObj.src = "images/jasPath.jpg";
    imageObj.onload = function () {
        context.drawImage(imageObj, 0, 0, 1200, 600);
    };
}
function fourthPageOption1()
{
    imageObj.src = "images/jasHppWalk.jpg";
    imageObj.onload = function () {
        context.drawImage(imageObj, 0, 0, 1200, 600);
    };
}
function fourthPageOption2()
{
    imageObj.src = "images/jasAnnWalk.jpg";
    imageObj.onload = function () {
        context.drawImage(imageObj, 0, 0, 1200, 600);
    };

}
function fifthPageOption1()
{
    imageObj.src = "images/jasStarbucks.jpg";
    imageObj.onload = function () {
        context.drawImage(imageObj, 0, 0, 1200, 600);
    };

}
function fifthPageOption2()
{
    imageObj.src = "images/jasStarbucks.jpg";
    imageObj.onload = function () {
        context.drawImage(imageObj, 0, 0, 1200, 600);
    };

}
function goodEnding()
{
    imageObj.src = "images/jasWin.jpg";
    imageObj.onload = function () {
        context.drawImage(imageObj, 0, 0, 1200, 600);
    };
}
function badEnding()
{
    imageObj.src = "images/jasLose.jpg";
    imageObj.onload = function () {
        context.drawImage(imageObj, 0, 0, 1200, 600);
    };
}
function endingPage()
{
    imageObj.src = "images/Ending.jpg";
    imageObj.onload = function () {
        context.drawImage(imageObj, 0, 0, 1200, 600);
    }
}