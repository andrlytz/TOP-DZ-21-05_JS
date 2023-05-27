function random (min,max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return counter = Math.floor(Math.random() * (max - min + 1)) + min;
}

let img = document.getElementById('img')

let but1 = document.getElementById('but1')

let out = document.getElementById('out')

but1.onclick = f1

let n = 1
function animation (){
    switch(n) {
        case 1: 
            img.setAttribute('src', '1.jpg');
            n++;
            break;
        case 2: 
            img.setAttribute('src', '2.jpg');
            n++;
            break;
        case 3: 
            img.setAttribute('src', '3.jpg');
            n = 1;
            break;
    }
}

function picture() {
    let num = random(1,2);
    if (num === 1) {
        img.setAttribute('src', '101.jpg');
        out.innerText = 'Решка'
    }
    else {
        img.setAttribute('src', '010.jpg');
        out.innerText = 'Орел'
    }
}

function f1(){
    let timerId = setInterval(() => {animation()}, 50);
    setTimeout(() => {clearInterval(timerId); picture()}, 2000);

}




let list = document.getElementById('list')

const students = ['Иванов', 'Петров', 'Сидоров', 'Роналду', 'Месси', 'Холан', 'Бензема', 'Модрич', 'Неймар', 'Мбаппе']

const grade = [random(2,5), random(2,5), random(2,5), random(2,5), random(2,5), random(2,5), random(2,5), random(2,5), random(2,5), random(2,5), ]

let str = ''

function f2() {
    for (i=0; i<students.length; i++) {
        str += '<tr><td>'+students[i]+'</td><td>'+grade[i]+'</td></tr>'
    }
    console.log(str)
    list.innerHTML = str
}

document.addEventListener("DOMContentLoaded", f2())