//*luck
let i;

document.getElementById("test").onclick = function ()
{
    i = Math.floor(Math.random() * 10);
    console.log(i);

    if (i == 0 || i == 1)
    {
        document.getElementById("result").innerHTML = "you are: unlucky!";
    }
    else if (i == 8 || i == 9)
    {
        document.getElementById("result").innerHTML = "you are: lucky!";
    }
    else
    {
        document.getElementById("result").innerHTML = "you are: mid";
    };
};


/*let number;

number = 1;

for (let i = 1; i <= number; i++) {
    console.log(i)
    if (i % 2 == 0) {
        console.log("even number")
    }
    else {
        console.log("odd number")
    }
}*/


//*number guessing game
let correctGuess = Math.round(Math.random() * 100);
console.log("correct guess: " + correctGuess);

document.getElementById("submitGuess").onclick = function ()
{
    let guess = document.getElementById("guess").value;
    let output = document.getElementById("output");

    if (guess == correctGuess)
    {
        output.innerHTML = "That is correct!";
    }
    else if (guess == "")
    {
        output.innerHTML = "invalid guess";
    }
    else if (guess < correctGuess)
    {
        output.innerHTML = "You need to guess higher";
    }
    else if (guess > correctGuess)
    {
        output.innerHTML = "You need to guess lower";
    };
    console.log(guess);
};

document.getElementById("new").onclick = function ()
{
    document.getElementById("guess").value = "";
    document.getElementById("output").innerHTML = "";

    let minValue = Math.round(Math.random() * -1000);
    console.log(minValue);
    let maxValue = Math.round(Math.random() * 1000);
    console.log(maxValue);

    document.getElementById("min").innerHTML = minValue;
    document.getElementById("max").innerHTML = maxValue;

    document.getElementById("guess").setAttribute ("min", minValue);
    document.getElementById("guess").setAttribute ("max", maxValue);

    correctGuess = Math.round( Math.random() * (maxValue - minValue) + minValue );
    console.log("correct guess: " + correctGuess);
};

document.getElementById("reset").onclick = function ()
{
    document.getElementById("guess").value = "";
    document.getElementById("output").innerHTML = "";

    document.getElementById("min").innerHTML = 0;
    document.getElementById("max").innerHTML = 100;

    document.getElementById("guess").setAttribute ("min", 0);
    document.getElementById("guess").setAttribute ("max", 100);

    correctGuess = Math.round( Math.random() * 100 );
    console.log("correct guess: " + correctGuess);
};


//*marry kiss kill
function Kiss (person)
{
    console.log("you kissed " + person);
    let kissArea = document.getElementById("kiss area");
    let nameKissed = document.createTextNode(" " + personKissed);
    kissArea.appendChild(nameKissed);
};

function Marry (person)
{
    console.log("you married " + person);
    let marryArea = document.getElementById("marry area");
    let nameMarried = document.createTextNode(" " + personMarried);
    marryArea.appendChild(nameMarried);
};

function Kill (person)
{
    console.log("you killed " + person);
    let killArea = document.getElementById("kill area");
    let nameKilled = document.createTextNode(" " + personKilled);
    killArea.appendChild(nameKilled);
};

let personKissed;
let personMarried;
let personKilled;

function Done ()
{
    personKissed = document.getElementById("kiss").value;
    personMarried = document.getElementById("marry").value;
    personKilled = document.getElementById("kill").value;
    Kiss(personKissed);
    Marry(personMarried);
    Kill(personKilled);
};

document.getElementById("done").onclick = Done;