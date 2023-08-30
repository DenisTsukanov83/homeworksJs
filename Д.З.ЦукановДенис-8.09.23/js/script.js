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

const btn1 = document.querySelector('.task-1 .btn'),
    res1 = document.querySelector('.task-1 .res'),
    answers1 = document.querySelectorAll('input[name="question-1"]'),
    answers2 = document.querySelectorAll('input[name="question-2"]'),
    answers3 = document.querySelectorAll('input[name="question-3"]');

let score = 0;

function func(answ, num) {

    answ.forEach(el => {
        if(el.checked && el.value == num) {
            score += 2;
        }
    })
}

btn1.onclick = () => {
    score = 0;
    func(answers1, 81);
    func(answers2, 56);
    func(answers3, 54);
    res1.textContent = `В набрали ${score}${score == 6 || score == 0 ? ' баллов!' : ' балла!'}`;
}

//Task-2

const inp21 = document.querySelector('.task-2 .inp.first'),
    inp22 = document.querySelector('.task-2 .inp.second'),
    inp23 = document.querySelector('.task-2 .inp.third'),
    btn2 = document.querySelector('.task-2 .btn'),
    res2 = document.querySelector('.task-2 .res'),
    red = '2px solid red',
    blue = '2px solid rgb(169, 169, 253)';

btn2.onclick = (e) => {
    const day = +inp21.value,
        month = +inp22.value,
        year = +inp23.value;
    let nextDay = 0,
        nextMonth = 0,
        nextYear = day == 31 && month == 12 ? year + 1 : year;

    if(!month || month > 12) {
        inp22.style.border = red;
        res2.textContent = 'Не корректные данные!';
        return;
    } else {
        inp22.style.border = blue;
    }

    if(!year) {
        inp23.style.border = red;
        res2.textContent = 'Не корректные данные!';
        return;
    } else {
        inp23.style.border = blue;
    }

    dayIteration = (days) => {
        if(!day || day > days) {
            inp21.style.border = red;
            res2.textContent = 'Не корректные данные!';
            return;
        } else {
            inp21.style.border = blue;
        }

        if(day < days) {
            nextDay = day + 1;
            nextMonth = month;
        } else {
            nextDay = 1;
            month < 12 ? nextMonth = month + 1 : nextMonth = 1;
        }

        res2.textContent = `Следующая дата: ${nextDay}.${nextMonth < 10 ? '0' + nextMonth : nextMonth}.${nextYear}`;
    }

    if(month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12) {
        dayIteration(31);
    }
    if(month == 4 || month == 6 || month == 9 || month == 11) {
        dayIteration(30);
    }

    if( nextYear % 400 === 0 || (nextYear % 4 === 0 && nextYear % 100 != 0)) {
        if(month == 2) {
            dayIteration(29);
        }
    } else {
        if(month == 2) {
            dayIteration(28);
        }
    }
}