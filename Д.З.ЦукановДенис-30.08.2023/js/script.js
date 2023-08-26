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

function years(v) {
    if(v.slice(-1) == 1 && v.slice(-2) != 11 ) {
        return ' год';
    }
    if(v.slice(-2) < 10 || v.slice(-2) > 20) {
        if(v.slice(-1) > 1 && v.slice(-1) < 5) {
            return ' года';
        }
    }
    if(v.slice(-1) == 0 || v.slice(-2) > 4 && v.slice(-2) <= 20 || v.slice(-2) > 20 && v.slice(-1) > 4) {
        return ' лет';
    }
}


//Task-1

const inp11 = document.querySelector('.task-1 .inp'),
    btn1 = document.querySelector('.task-1 .btn'),
    res1 = document.querySelector('.task-1 .res');

btn1.onclick = () => {
    let v = inp11.value;
    if(v < 0) {
        res1.textContent = 'Это число отрицательное!';
    }
    if(v == 0) {
        res1.textContent = 'Это число ноль!';
    }
    if(v > 0) {
        res1.textContent = 'Это число положительное!';
    }
}

//Task-2

const inp21 = document.querySelector('.task-2 .inp'),
    btn2 = document.querySelector('.task-2 .btn'),
    res2 = document.querySelector('.task-2 .res');

btn2.onclick = () => {
    let v = inp21.value;
    if(v < 0) {
        res2.textContent = 'Вы ввели не корректное число!';
        return;
    }
    if(v > 120) {
        res2.textContent = 'Вы ввели не корректное число!';
        return;
    }
    if(v >= 100 && v <= 120) {
        res2.textContent = 'Вам ' + v + years(v) + ' Вы долгожитель!';
    }
    else {
        res2.textContent = 'Вам ' + v + years(v);
    }
}


//Task-3

const inp31 = document.querySelector('.task-3 .inp'),
    btn3 = document.querySelector('.task-3 .btn'),
    res3 = document.querySelector('.task-3 .res');

btn3.onclick = () => {
    res3.textContent = Math.abs(inp31.value);
}


//Task-4

const inp41 = document.querySelector('.task-4 .inp.first'),
    inp42 = document.querySelector('.task-4 .inp.second'),
    inp43 = document.querySelector('.task-4 .inp.third'),
    btn4 = document.querySelector('.task-4 .btn'),
    res4 = document.querySelector('.task-4 .res');

btn4.onclick = () => {
    res4.textContent = '';
    let access = true;
    if(inp41.value > 23) {
        res4.textContent = res4.textContent + ' Не правильно введены часы!';
        access = false;
    }
    if(inp42.value > 59) {
        res4.textContent = res4.textContent + ' Не правильно введены минуты!';
        access = false;
    }
    if(inp43.value > 59) {
        res4.textContent = res4.textContent + ' Не правильно введены секунды!'
        access = false;
    }
    if(access) {
        res4.textContent = `Время: ${inp41.value}:${inp42.value > 9 ? '' : '0'}${inp42.value}:${inp43.value > 9 ? '' : '0'}${inp43.value}`;
    }
}


//Task-5

const inp51 = document.querySelector('.task-5 .inp.first'),
    inp52 = document.querySelector('.task-5 .inp.second'),
    signBtns = document.querySelectorAll('.task-5 .btn-sign'),
    btn5= document.querySelector('.task-5 .btn-equal'),
    res5 = document.querySelector('.task-5 .res');
let sign = '+';

signBtns.forEach(el => {
    el.onclick = () => {
        sign = el.textContent;
        el.classList.add('active');
        signBtns.forEach(el2 => {
            if(el != el2) {
                el2.classList.remove('active');
            }
        })
    }
})

btn5.onclick = () => {
    switch(sign) {
        case '+': res5.textContent = +inp51.value + +inp52.value;
        break;
        case '-': res5.textContent = +inp51.value - +inp52.value;
        break;
        case '*': res5.textContent = +inp51.value * +inp52.value;
        break;
        case '/': res5.textContent = +inp51.value / +inp52.value;
        break;
    }
}


//Task-6

const inp61 = document.querySelector('.task-6 .inp'),
    btn6 = document.querySelector('.task-6 .btn'),
    res6 = document.querySelector('.task-6 .res');

btn6.onclick = () => {
    res6.textContent = inp61.value.toLowerCase() == 'землянин' ? res6.textContent = 'Привет, землянин!' : res6.textContent = 'Привет, инопланетянин!';
}