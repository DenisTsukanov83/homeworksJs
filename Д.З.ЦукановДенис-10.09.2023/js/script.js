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
    let i = 0;
    while(i <= inp11.value) {
        res1.textContent += '# '; 
        i++;
    }
}


//Task-2

const inp21 = document.querySelector('.task-2 .inp'),
    btn2 = document.querySelector('.task-2 .btn'),
    res2 = document.querySelector('.task-2 .res');

btn2.onclick = () => {
    res2.textContent = '';
    let i = inp21.value;
    while(i >= 0) {
        res2.textContent += i + ' '; 
        i--;
    }
}


//Task-3

const btn3 = document.querySelector('.task-3 .btn');

btn3.onclick = () => {
    let res = 0;

    do {
        res = prompt('2 + 2 * 2 = ?');
        if(2 + 2 * 2 != res) {
            alert(`${res} Ответ НЕ верный!`);
        }
    } while(2 + 2 * 2 != +res) {
        alert(`${res} Ответ верный!`);
    }
}


//Task-4

const inp41 = document.querySelector('.task-4 .inp.first'),
    inp42 = document.querySelector('.task-4 .inp.second'),
    btn4 = document.querySelector('.task-4 .btn'),
    res4 = document.querySelector('.task-4 .res');

btn4.onclick = () => {
    res4.textContent = '';

    for(let i = +inp41.value; i <= +inp42.value; i++) {
        if(i % 4 === 0 && i != 0) {
            res4.textContent += i + ' ';
        }
    }
}


//Task-5

const btn5 = document.querySelector('.task-5 .btn');

btn5.onclick = () => {
    let x = +prompt('Загадайте число от 0 до 100'),
        low = 0,
        high = 100,
        comparison = '',
        guess = 50;

    if(x < 0 || x > 100 || isNaN(x)) {
        alert('Не корректные данные!');
        return;
    }

    do {
        comparison = prompt(`Это число больше ${guess}? напишите "больше", "меньше" или "равно"`);
        if(comparison === null) {
            return;
        }

        if(comparison.toLowerCase() != 'больше' && comparison.toLowerCase() != 'меньше' && comparison.toLowerCase() != 'равно') {
            alert('Напишите "больше", "меньше" или "равно"!');
            continue;
        }

        if(comparison.toLowerCase() == 'больше') {
            low = guess;
            guess = Math.floor((low + high + 1) / 2);
        }

        if(comparison.toLowerCase() == 'меньше') {
            high = guess;
            guess = Math.floor((low + high) / 2);
            
        }

        if(comparison.toLowerCase() == 'равно') {
            break;
        }

    } while(x !== guess) {
        alert(`Ваше число ${guess}!!!!!`);
    }
}