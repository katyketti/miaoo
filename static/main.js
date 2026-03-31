//Вводи свой текст на разных языках тут:
//После того как все ввела нажми "Save"     подсказка --- (/* это (Язык) */ ... = '(твой текст)...') --- не забудь выключить перевод страницы!

/* это русский */ r = `Я делаю плейлисты!














にャ～`

/* это английский */ e = `I'm doing playlists!














にャ～`

/*это японский */ j = `私はプレイリストを作っています!














にャ～`

/*это испанский */ s = `¡Hago listas de reproducción!














にャ～`

/*это французский */ f = `Je fais des playlists!














にャ～`


//лучше меняй с ноутбука...
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// Дальше скрипт

const mainText = document.getElementById('main')
const header = document.getElementById('header')
const russianButton = document.getElementById('rus')
const englishButton = document.getElementById('eng')
const nihonButton = document.getElementById('nih')
const spanishButton = document.getElementById('sp')
const frenchButton = document.getElementById('fr')
const essay1 = document.getElementById('essay')
const toggle = document.getElementById('darkmode-toggle')
const footer = document.getElementById('footer')
const choosenLanguage = document.getElementsByClassName('choosen')
const body = document.getElementById('body')

//old - const keys = ["K  Т  ", "  А  Я", "К      ", "  А    ", "    Т  ", "      Я", "КАТЯ"]
const keys = ["  А  Я  E  ", "К            ", "  А          ", "    Т        ", "      Я      ", "        K    ", "         E  ", "           T", "КАТЯКЕТ", "КАТЯКЕТ"]
const essay = {
    russian: r,
    english: e,
    japanesse: j,
    spanish: s,
    french: f
}

essay1.textContent = essay.russian;

let language;
let item = 0;
let theme = 'day';

//start animation
async function start() {
    for (let i = 0; i < keys.length; i++) {
        await new Promise(resolve => setTimeout(resolve, 300));
        if(theme == "night"){
            item = keys.length - 1;
            mainText.textContent = keys[item]
            i = keys.length;
        }
        mainText.textContent = keys[item];
        item++;
        if (item == keys.length && theme == "day")
        {
            header.style.backgroundImage = "url(fon3.png)";
        }
    }
}
start();

//event listeners
toggle.addEventListener("click", function(){
    if(theme == "day"){
        theme = 'night';
        header.classList.add('black')
        header.style.backgroundImage = "url('6.png')"
        footer.classList.add('black')
        footer.style.backgroundImage = "url('6.png')"
        body.classList.add('black')
        forIphones();
    }else if(theme == "night"){
        theme = 'day';
        header.classList.remove('black')
        header.style.backgroundImage = "url('fon3.png')"
        footer.classList.remove('black')
        // if(screen.width < 500){
        footer.style.backgroundImage = "url('Канна.gif')";
        // }else {
        //     footer.style.backgroundImage = "url('fon3.png')"
        // }
        body.classList.remove('black')
        forIphones();
    }
});

russianButton.addEventListener("click", function(){
    russianButton.classList.add("choosen")
    spanishButton.classList.remove("choosen")
    frenchButton.classList.remove("choosen")
    englishButton.classList.remove("choosen")
    nihonButton.classList.remove("choosen")
    language = "russian";
    switchLanguage();
});

nihonButton.addEventListener("click", function(){
    russianButton.classList.remove("choosen")
    spanishButton.classList.remove("choosen")
    frenchButton.classList.remove("choosen")
    englishButton.classList.remove("choosen")
    nihonButton.classList.add("choosen")
    language = "nihon";
    switchLanguage();
});

englishButton.addEventListener("click", function(){
    russianButton.classList.remove("choosen")
    spanishButton.classList.remove("choosen")
    frenchButton.classList.remove("choosen")
    englishButton.classList.add("choosen")
    nihonButton.classList.remove("choosen")
    language = "english";
    switchLanguage();
});

spanishButton.addEventListener("click", function(){
    russianButton.classList.remove("choosen")
    spanishButton.classList.add("choosen")
    frenchButton.classList.remove("choosen")
    englishButton.classList.remove("choosen")
    nihonButton.classList.remove("choosen")
    language = "spanish";
    switchLanguage();
});

frenchButton.addEventListener("click", function(){
    russianButton.classList.remove("choosen")
    spanishButton.classList.remove("choosen")
    frenchButton.classList.add("choosen")
    englishButton.classList.remove("choosen")
    nihonButton.classList.remove("choosen")
    language = "french";
    switchLanguage();
});

// window.addEventListener("scroll", function(){
//     if(this.scrollY > 0){
//         header.classList.add('scrolled');
//         header.style.backgroundImage = "none";
//     }else if(this.scrollY < 1){
//         header.classList.remove('scrolled');
//         if (item == keys.length)
//         {
//             header.style.backgroundImage = "url(fon3.png)";
//         }
//     }
// });

//functions
function switchLanguage(){
    if(language == "russian"){
        essay1.textContent = essay.russian;
        essayAnimation()
    }
    if(language == "english"){
        essay1.textContent = essay.english;
        essayAnimation()
    }
    if(language == "nihon"){
        essay1.textContent = essay.japanesse;
        essayAnimation()
    }
    if(language == "spanish"){
        essay1.textContent = essay.spanish;
        essayAnimation()
    }
    if(language == "french"){
        essay1.textContent = essay.french;
        essayAnimation()
    }
    forIphones();
}

async function essayAnimation() {
    let pos = -3000;
    essay1.style.left = '-3000px';
    for (let i = 0; i < 51; i++) {
        await new Promise(resolve => setTimeout(resolve, 20));
        essay1.style.left = pos + 'px';
        pos += 60;
    }
//     essay1.style.left = '15px';
}

function forIphones(){
    if(theme == "day"){
        russianButton.style.borderColor = 'black';
        spanishButton.style.borderColor = 'black';
        frenchButton.style.borderColor = 'black';
        englishButton.style.borderColor = 'black';
        nihonButton.style.borderColor = 'black';
    }
    if(theme == "night"){
        russianButton.style.borderColor = 'white';
        spanishButton.style.borderColor = 'white';
        frenchButton.style.borderColor = 'white';
        englishButton.style.borderColor = 'white';
        nihonButton.style.borderColor = 'white';
    }
}
