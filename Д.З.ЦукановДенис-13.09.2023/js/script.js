const inputs = document.querySelectorAll('.inp');

inputs.forEach((el, i)=> {
    el.addEventListener('keydown', () => {
        el.style.width = ((el.value.length + 1) * 8) + 'px';
        el.style.minWidth = '30px';
    })
    el.addEventListener('focus', () => {
        el.value = '';
        el.style.width = '30px';
    })
})


//Task-1

const inp11 = document.querySelector('.task-1 .inp.first'),
    inp12 = document.querySelector('.task-1 .inp.second'),
    btn1 = document.querySelector('.task-1 .btn'),
    res1 = document.querySelector('.task-1 .res');

function comparison(a, b) {
    if(a < b) {
        return -1;
    }
    if(a > b) {
        return 1;
    }
    if(a === b) {
        return 0;
    }
}

btn1.onclick = () => {
    res1.textContent = comparison(+inp11.value, +inp12.value);
}



//Task-2

const inp21 = document.querySelector('.task-2 .inp.first'),
    inp22 = document.querySelector('.task-2 .inp.second'),
    inp23 = document.querySelector('.task-2 .inp.third'),
    btn2 = document.querySelector('.task-2 .btn'),
    res2 = document.querySelector('.task-2 .res');

function conc(a, b, c) {
    return +(a + b + c);
}

btn2.onclick = () => {
    res2.textContent = conc(inp21.value, inp22.value, inp23.value);
}



//Task-3

const inp31 = document.querySelector('.task-3 .inp'),
    btn3 = document.querySelector('.task-3 .btn'),
    res3 = document.querySelector('.task-3 .res');

function isNumberPerfect(a) {
    let res = 0;
    for(let i = 1; i < inp31.value; i++) {
        if(inp31.value % i === 0) {
            res += i;
        }
    }
    if(res === +inp31.value) {
        return 'Это совершенное число!';
    } else {
        return 'Это НЕ совершенное число!';
    }
}

btn3.onclick = () => {
    res3.textContent = isNumberPerfect(inp31.value);
}



//Task-4

const inp41 = document.querySelector('.task-4 .inp.first'),
    inp42 = document.querySelector('.task-4 .inp.second'),
    inp43 = document.querySelector('.task-4 .inp.third'),
    btn4 = document.querySelector('.task-4 .btn'),
    res4 = document.querySelector('.task-4 .res');

function time(a, b, c) {
    if(a > 23 || b > 59 || c > 59) {
        return 'НЕ корректные данные!'
    }
    return `${a ? a : '00'}:${b < 10 ? '0' + (!b ? '0' : b) : !b ? '00' : b}:${c < 10 ? '0' + (!c ? '0' : c) : !c ? '00' : c}`;
}

btn4.onclick = () => {
    res4.textContent = time(inp41.value, inp42.value, inp43.value);
}



//Task-5

const inp51 = document.querySelector('.task-5 .inp'),
    btn5 = document.querySelector('.task-5 .btn'),
    res5 = document.querySelector('.task-5 .res');

function secondsToTime(a) {
    let hours = Math.floor(a / 3600);
    let minutes = Math.floor((a - hours * 3600) / 60);
    let seconds = (a - hours * 3600) % 60;
    return `${hours}:${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
}

btn5.onclick = () => {
    res5.textContent = secondsToTime(inp51.value);
}