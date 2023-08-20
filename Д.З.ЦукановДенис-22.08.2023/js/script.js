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

const inp11 = document.querySelector('.task-1 .inp'),
    btn1 = document.querySelector('.task-1 .btn'),
    res1 = document.querySelector('.task-1 .res');

btn1.onclick = () => {
    res1.textContent = inp11.value * inp11.value;
    
}


//Task-2

const inp21 = document.querySelector('.task-2 .inp.first'),
    inp22 = document.querySelector('.task-2 .inp.second'),
    btn2 = document.querySelector('.task-2 .btn'),
    res2 = document.querySelector('.task-2 .res');

btn2.onclick = () => {
    res2.textContent = (+inp21.value + +inp22.value) / 2;
}


//Task-3

const inp31 = document.querySelector('.task-3 .inp'),
    btn3= document.querySelector('.task-3 .btn'),
    res3 = document.querySelector('.task-3 .res');

btn3.onclick = () => {
    res3.textContent = inp31.value * inp31.value;
}


//Task-4

const inp41 = document.querySelector('.task-4 .inp'),
    btn4= document.querySelector('.task-4 .btn'),
    res4 = document.querySelector('.task-4 .res'),
    m = 0.621371;

btn4.onclick = () => {
    res4.textContent = inp41.value * m;
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

const inp61 = document.querySelector('.task-6 .inp.first'),
    inp62 = document.querySelector('.task-6 .inp.second'),
    btn6 = document.querySelector('.task-6 .btn'),
    res6 = document.querySelector('.task-6 .res');

btn6.onclick = () => {
    res6.textContent = -inp62.value / inp61.value;
}


//Task-7

const inp71 = document.querySelector('.task-7 .inp.first'),
    inp72 = document.querySelector('.task-7 .inp.second'),
    btn7 = document.querySelector('.task-7 .btn'),
    res7 = document.querySelector('.task-7 .res');
let minutes = 0;

btn7.onclick = () => {
    if(inp71.value > 23 || inp72.value > 59) {
        res7.textContent = 'Вы ввели слишком большое число'
    }
    else {
        minutes = 1440 - (+inp71.value * 60 + +inp72.value);
        res7.textContent = `${Math.trunc(minutes / 60)}:${minutes % 60 < 10 ? '0' : ''}${minutes % 60}`
    }

}


//Task-8

const inp81 = document.querySelector('.task-8 .inp'),
    btn8 = document.querySelector('.task-8 .btn'),
    res8 = document.querySelector('.task-8 .res');

btn8.onclick = () => {
    inp81.value.length != 3 ? res8.textContent = 'Введите трехзначное число!': res8.textContent = Math.trunc(inp81.value / 10 % 10);
}

//Task-9

const inp91 = document.querySelector('.task-9 .inp'),
    btn9 = document.querySelector('.task-9 .btn'),
    res9 = document.querySelector('.task-9 .res');

btn9.onclick = () => {
    let arr = String(inp91.value).split(''),
        a = arr[0];
    arr.splice(0, 1, arr[4]);
    arr.splice(-1, 1, a);
    inp91.value.length != 5 ? res9.textContent = 'Введите пятизначное число!' : res9.textContent = arr.join('');
}


//Task-10

const inp101 = document.querySelector('.task-10 .inp'),
    btn10 = document.querySelector('.task-10 .btn'),
    res10 = document.querySelector('.task-10 .res');

btn10.onclick = () => {
    res10.textContent = `${inp101.value / 10 + 250}$`
}