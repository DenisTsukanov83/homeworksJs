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
    if(inp11.value < 0 || inp11.value > 110) {
        res1.textContent = 'Вы ввели некорректный возраст!';
        return;
    }
    if(inp11.value > 0 && inp11.value < 12) {
        res1.textContent = 'Вы ребенок!';
    }
    if(inp11.value >= 12 && inp11.value < 18) {
        res1.textContent = 'Вы подросток!';
    }
    if(inp11.value > 18) {
        res1.textContent = 'Вы взрослый!';
    }
}


//Task-2

const inp21 = document.querySelector('.task-2 .inp'),
    btn2 = document.querySelector('.task-2 .btn'),
    res2 = document.querySelector('.task-2 .res');

btn2.onclick = () => {
    switch(inp21.value) {
        case '0': res2.textContent = ')';
        break;

        case '1': res2.textContent = '!';
        break;

        case '2': res2.textContent = '@';
        break;

        case '3': res2.textContent = '#';
        break;

        case '4': res2.textContent = '$';
        break;

        case '5': res2.textContent = '%';
        break;

        case '6': res2.textContent = '^';
        break;

        case '7': res2.textContent = '&';
        break;

        case '8': res2.textContent = '*';
        break;

        case '9': res2.textContent = '(';
        break;

        default: res2.textContent = 'Вы ввели некорректное число!';
    }
}


//Task-3

const inp31 = document.querySelector('.task-3 .inp'),
    btn3 = document.querySelector('.task-3 .btn'),
    res3 = document.querySelector('.task-3 .res');

btn3.onclick = () => {
    let arr = inp31.value.split('').filter((n, i, arr) => {
        return arr.indexOf(n) !== i;
    });

    arr.length > 0 ? res3.textContent = 'Здесь есть одинаковые цифры!' : res3.textContent = 'Здесь нет одинаковых цифр!';
}


//Task-4

const inp41 = document.querySelector('.task-4 .inp'),
    btn4 = document.querySelector('.task-4 .btn'),
    res4 = document.querySelector('.task-4 .res');

btn4.onclick = () => {
    let x = inp41.value;
    if(x % 400 === 0 || (x % 4 === 0 && x % 100 != 0)) {
        res4.textContent = 'Это високосный год!';
    } else {
        res4.textContent = 'Это не високосный год!';
    }
}


//Task-5

const inp51 = document.querySelector('.task-5 .inp'),
    btn5 = document.querySelector('.task-5 .btn'),
    res5 = document.querySelector('.task-5 .res');

btn5.onclick = () => {
    let arr = inp51.value.split('');
    let arr2 = arr.filter((el, i, arr) => {
        return el === arr[(arr.length - 1) - i];
    })

    arr.length === arr2.length ? res5.textContent = 'Это палиндромом' : res5.textContent = 'Это НЕ палиндромом!';
}


//Task-6

const inp61 = document.querySelector('.task-6 .inp'),
    signBtns = document.querySelectorAll('.task-6 .btn.btn-sign'),
    btn6 = document.querySelector('.task-6 .btn-equal'),
    res6 = document.querySelector('.task-6 .res');
let sign = 'EUR';


signBtns.forEach(el => {
    el.onclick = () => {
        sign = el.textContent;
        el.classList.add('active');
        signBtns.forEach(el2 => {
            if(el != el2) {
                el2.classList.remove('active');
            }
        })
        if(inp61.value != undefined) {
            convertor();
        }
    }
})

function convertor() {
    switch(sign) {
        case 'EUR': res6.textContent = (inp61.value * 0.92).toFixed(2) + ' EUR';
        break;

        case 'UAN': res6.textContent = (inp61.value * 36.91).toFixed(2) + ' UAN';
        break;

        case 'AZN': res6.textContent = (inp61.value * 17).toFixed(2) + ' AZN';
        break;
    }
}

btn6.onclick = () => {
    convertor();
}


//Task-7

const inp71 = document.querySelector('.task-7 .inp'),
    btn7 = document.querySelector('.task-7 .btn'),
    res7 = document.querySelector('.task-7 .res');

btn7.onclick = () => {
    inp71.value = Number(inp71.value);
    switch(true) {
        case inp71.value >= 200 && inp71.value < 300: res7.textContent = inp71.value - (inp71.value / 100 * 3);
        break;
        case inp71.value >= 300 && inp71.value < 500: res7.textContent = inp71.value - (inp71.value / 100 * 5);
        break;
        case inp71.value >= 500: res7.textContent = inp71.value - (inp71.value / 100 * 7);
        break;
        default: res7.textContent = inp71.value;
    }
}


//Task-8

const inp81 = document.querySelector('.task-8 .inp.first'),
    inp82 = document.querySelector('.task-8 .inp.second'),
    btn8 = document.querySelector('.task-8 .btn'),
    res8 = document.querySelector('.task-8 .res');

btn8.onclick = () => {
    
    let d = Number(inp81.value) / 3.14;
    let a = Number(inp82.value / 4);
    console.log('d:'+ d, 'a:' + a)
    console.log(d <= a)

    d <= a ? res8.textContent = res8.textContent = 'Окружность поместится в квадрат!' : res8.textContent = 'Окружность НЕ поместится в квадрат!';
}