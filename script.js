let attempts = document.getElementById("attempts");
let images = []
let Rabits = []
let buffer = []
let steps = 0
let counter = 0
let newgame = document.getElementById("Newgame")
let h1 = document.getElementById("Remember")
console.log(attempts);
let game = document.getElementById("game")
for (let i= 1; i < 101; i = i + 1) {
        Rabits.push("Кролик № (" + i)
    }
console.log(Rabits);
for (let i= 0; i < 12; i = i + 1) {
    images.push("card (" + i +  ").jpg")
    images.push("card (" + i +  ").jpg")
}
function randomCards(){
    for (let i= 23; i > 0; i = i - 1 ) {
        let randomnumber = Math.floor(Math.random()*(i + 1))
        let slot = images[i]
        images[i] = images[randomnumber]
        images[randomnumber] = slot
    }   
}
randomCards()
console.log(images);
    for (let i = 0; i < 24; i = i + 1) {
        console.log(22);
        let img = document.createElement("img")
        img.src = "рубашка.jpg"
        img.onclick = function (event){
            if (i == 23) {
                h1.innerHTML = "ЭТО ПОСЛЕДНЯЯ КАРТИНКА!"
            }
            buffer.push(img) 
            console.log(buffer.length);
            if (buffer.length== 2){
                let imgs = document.getElementsByTagName("img")
                console.log(imgs);
                steps = steps + 1
                // нужно, для того чтобы заблокировать все карточки
                for (let i = 0; i < 24; i = i + 1) {
                    imgs[i].style.pointerEvents = "none"
                }
            }
            console.log(buffer);
            img.style.transform = "scaleX(0)"
            setTimeout(function(){
                img.src = images[i] 
                img.style.transform = "scaleX(1)"
                if (buffer.length== 2) {
                    console.log("В буфере две картинке");
                    // if (steps == 3){
                    //   h1.innerHTML = "ты сделал 3 попытки"
                    // }
                    attempts.innerHTML = "Попытки: " + steps
                    console.log(buffer[0].src, buffer[1].src);
                    if (buffer[0].src== buffer[1].src) {
                        console.log("Вы угадали!");
                        buffer[0].classList.add("blockedimage")
                        buffer[1].classList.add("blockedimage")
                        buffer = []
                        counter = counter + 2 
                        if (counter== 24 ){
                            h1.innerHTML = "Поздравляем с ПОБЕДОЙ!!!"
                        }
                        let imgs = document.getElementsByTagName("img")
                                for (let i = 0; i < 24; i = i + 1) {
                                    imgs[i].style.pointerEvents = "auto"
                                }
                    }
                    else {
                        console.log("Неправильно!");
                        setTimeout(function(){
                            buffer[0].style.transform = "scaleX(0)"
                            buffer[1].style.transform = "scaleX(0)"
                            setTimeout(function(){
                                buffer[0].style.transform = "scaleX(1)"
                                buffer[0].src = "рубашка.jpg"
                                buffer[1].src = "рубашка.jpg"
                                buffer[1].style.transform = "scaleX(1)"
                                buffer = []
                                setTimeout(function(){
                                    let imgs = document.getElementsByTagName("img")
                                    for (let i = 0; i < 24; i = i + 1) {
                                        imgs[i].style.pointerEvents = "auto"
                                    }
                                },600)
                               
                            },600)
                        },1000)
                    }
                }
            },600)
        }
        img.ondragstart = function (event){
            return  false
        }
        game.appendChild(img)
    }
    for (let i = 0; i < 20; i = i + 1) {
       if (i==8 ) {
        console.log("Цикл сработал 9 раз");
       }
    }
    newgame.onclick = function (event) {
        buffer = []
        setTimeout(function(){
            console.log("Задержка");
        },3000)
        attempts.innerHTML = "Попытки: 0"
        h1.innerHTML = "ЗАПОМНИ КАРТИНКУ!!!"
        steps = 0
        randomCards()
        newgame.innerHTML = "ВЫ ОТКРЫЛИ БОНУС!"
        let imgs = document.getElementsByTagName("img")
        for (let i = 0; i < 24; i = i + 1) {
            imgs[i].classList.remove("blockedimage")
            imgs[i].style.transform = "scaleX(0)"
            setTimeout(function(){
                imgs[i].src = "рубашка.jpg"
                imgs[i].style.transform = "scaleX(1)"
            },600)
        }
    }