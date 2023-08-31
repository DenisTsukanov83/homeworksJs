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

btn1.onclick = () => {
    res1.textContent = '';
    for(let i = +inp11.value; i <= +inp12.value; i++) {
        res1.textContent = +res1.textContent + i;
    }
}


//Task-2

const inp21 = document.querySelector('.task-2 .inp'),
    btn2 = document.querySelector('.task-2 .btn'),
    res2 = document.querySelector('.task-2 .res');

btn2.onclick = () => {
    let date = inp21.value.split(' '),
        poz = 0, neg = 0, zero = 0, honest = 0, odd = 0;

    if(date.some(isNaN)) {
        res2.textContent = 'Не корректные данные!';
        return;
    }

    for(let i = 0; i <= date.length - 1; i++) {

        if(date[i] > 0) {
            poz++;
        }

        if(date[i] < 0) {
            neg++;
        }

        if(date[i] == 0) {
            zero++;
        }

        if(date[i] % 2 == 0) {
            honest++;
        }

        if(date[i] % 2 != 0) {
            odd++;
        }
    }
    res2.textContent = `положительных: ${poz}, отрицатальных: ${neg}, нулей: ${zero}, четных: ${honest}, нечетных: ${odd}`;
}


//Task-3

const inp31 = document.querySelector('.task-3 .inp'),
    btn3 = document.querySelector('.task-3 .btn'),
    res3 = document.querySelector('.task-3 .res');

btn3.onclick = () => {
    res3.textContent = '';
    for(let i = 1; i <= 100; i++) {
        i % +inp31.value == 0 ? res3.textContent = res3.textContent + ' ' + i : res3.textContent + '';
    }
}


//Task-4

const inp41 = document.querySelector('.task-4 .inp'),
    btn4 = document.querySelector('.task-4 .btn'),
    res4 = document.querySelector('.task-4 .res');

btn4.onclick = () => {
    for(let i = 2; i < inp41.value; i++) {
        if(inp41.value % i === 0) {
            res4.textContent = 'Это не простое число!';
            return;
        }
    }
    res4.textContent = 'Это простое число!';
}