headerText = document.getElementById('header-text');
headerText.innerHTML = "";
document.getElementById('title-text').innerHTML = "";
document.getElementById('content-text').innerHTML = "";

mainText = "Hi, I'm Nadhir.";
devText = "I'm a Developer";
contText = "I make stuf bla bla bla idk i use a lot of things idk how to express myself haha lol sorry. Lorem ipsum that latin thing idk haha filler goes brrrrr";
alphabet = "abcdefghijklmnopqrstuvwxyz";
i = 0;
interval = 100;
sInterval = setInterval(() => {
    headerText.innerHTML += mainText[i];
    i++;
    if (i == mainText.length) {
        clearInterval(sInterval);
        setTimeout(() => {
            headerText.style.transform = 'translateY(-800%)';
            setTimeout(() => {
                headerText.style.opacity = 0;
                document.getElementsByClassName('App-hidden')[0].style.opacity = 1;
                headerText.parentNode.removeChild(headerText);
                printLetterByLetter("title-text", devText, 200);
                printLetterByLetter("content-text", contText, 50);
            }, 400);
        }, 1000);
    } else if (Math.random() < .9) {
        setTimeout(() => {
            headerText.innerHTML += alphabet[Math.floor(Math.random() * alphabet.length)];
        }, 500);
        setTimeout(() => {
            headerText.innerHTML = headerText.innerHTML.slice(0, -1);
        }, 500);
    }
}, interval);


function printLetterByLetter(destination, message, interval){
    var i = 0;
    var sInterval = setInterval(function(){
        document.getElementById(destination).innerHTML += message.charAt(i);
        i++;
        if (i > message.length){
            clearInterval(sInterval);
        }
    }, interval);
}