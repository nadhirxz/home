export async function printingChars() {
    let elements = Array.from(document.getElementsByClassName('print-chars'));
    let a = []
    elements.forEach(element => {
        a.push(element.innerHTML);
        element.innerHTML = '';
    });
    let i = 0;
    for (const element of elements) {
        await new Promise((resolve) => {
            setTimeout(() => {
                printLetterByLetter(element, a[i], 100);
                resolve();
            }, 50);
        })
        i++;
    }
}

export function printLetterByLetter(destination, message, interval) {
    return new Promise((resolve) => {
        var i = 0;
        var sInterval = setInterval(() => {
            destination.innerHTML += message.charAt(i);
            i++;
            if (i > message.length) {
                clearInterval(sInterval);
                resolve()
            }
        }, interval);
    });
}

export function showHidden() {
    Array.from(document.getElementsByClassName('hidden')).forEach(e => {
        e.style.opacity = 1;
    });
}

export function hideIcons() {
    for (const element of Array.from(document.getElementsByClassName('right-column')[0].getElementsByTagName('svg'))) {
        element.style.opacity = 0;
    }
}

export function hideSocialIcons() {
    for (const element of Array.from(document.getElementsByClassName('svg-link'))) {
        element.style.opacity = 0;
    }
}

export async function showIcons(start = 0, end = 14) {
    for (const element of Array.from(document.getElementsByClassName('right-column')[0].getElementsByTagName('svg')).slice(start, end)) {
        await new Promise((resolve) => {
            setTimeout(() => {
                element.style.opacity = 1;
                resolve();
            }, 150);
        })
    }
}

export async function showSocialIcons() {
    for (const element of Array.from(document.getElementsByClassName('svg-link'))) {
        await new Promise((resolve) => {
            setTimeout(() => {
                element.style.opacity = 1;
                resolve();
            }, 300);
        })
    }
}

export const titleInterval = 100;