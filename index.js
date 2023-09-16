let username;

document.getElementById("submitButton").onclick = function ()
{
    username = document.getElementById("userName").value;
    document.getElementById("sayHello").innerHTML = "Hello " + username;
};



let sideA;
let sideB;
let sideC;

document.getElementById("find c").onclick = function ()
{
    sideA = document.getElementById("side a").value;
    sideA = Number(sideA);

    sideB = document.getElementById("side b").value;
    sideB = Number(sideB);

    console.log(sideA, sideB);

    sideC = 180 - (sideA + sideB);
    document.getElementById("showSideC").innerHTML = "Side C: " + sideC + "°";

    if (sideC <= 0 || sideA <= 0 || sideB <= 0) 
    {
        document.getElementById("showSideC").innerHTML = "invelid number";
    };

    console.log(sideA, sideB, sideC);
};



let counter = 0;

document.getElementById("add").onclick = function()
{
    counter++;
    console.log(counter);
    document.getElementById("countLable").innerHTML = counter;
};
document.getElementById("reset").onclick = function()
{
    counter = 0;
    console.log(counter);
    document.getElementById("countLable").innerHTML = counter;
};
document.getElementById("subtract").onclick = function()
{
    counter--;
    console.log(counter)
    document.getElementById("countLable").innerHTML = counter;
};
document.getElementById("double").onclick = function()
{
    counter *= 2;
    console.log(counter)
    document.getElementById("countLable").innerHTML = counter;
};
document.getElementById("tripple").onclick = function()
{
    counter *= 3;
    console.log(counter)
    document.getElementById("countLable").innerHTML = counter;
};
document.getElementById("quadruple").onclick = function()
{
    counter *= 4;
    console.log(counter)
    document.getElementById("countLable").innerHTML = counter;
};
document.getElementById("half").onclick = function()
{
    counter /= 2;
    console.log(counter)
    document.getElementById("countLable").innerHTML = counter;
};
document.getElementById("random").onclick = function()
{
    counter = Math.round(Math.random() * 100000);
    console.log(counter)
    document.getElementById("countLable").innerHTML = counter;
};



let friends = [];
console.log(friends);

document.getElementById("addFri").onclick = function()
{
    let friend = document.getElementById("friend").value;

    if (friend == "")
    {
        document.getElementById("friList").innerHTML = "invalid input"
    }
    else
    {
        friends.push(friend);
        document.getElementById("friend").value = "";
        document.getElementById("friList").innerHTML = friends;
        document.getElementById("friList").push(friends);
    }
    
}