headerText = document.getElementById('header-text');
headerText.innerHTML = "";
let mainText = "Hi, I'm Nadhir.", i = 0;
let interval = setInterval(() => {
    headerText.innerHTML += mainText[i];
    i++;
    if (i==mainText.length) {
        clearInterval(interval);
        setTimeout(() => {
            document.getElementById('header-text').style.transform = 'translateY(-450%)';
            setTimeout(() => {
                document.getElementsByClassName('App-hidden')[0].style.opacity = 1;
            }, 300);
        }, 500);
    }
}, 100);