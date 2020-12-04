headerText = document.getElementById('header-text');
headerText.innerHTML = "";
let mainText = "Hi, I'm Nadhir.", i = 0;
let interval = setInterval(() => {
    headerText.innerHTML += mainText[i];
    i++;
    if (i==mainText.length) {
        clearInterval(interval);
        setTimeout(() => {
            document.getElementsByClassName('App-header')[0].style.justifyContent = "left";
            document.getElementsByClassName('App-hidden')[0].style.opacity = 1;
        }, 500);
    }
}, 100);