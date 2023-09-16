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

function showArr(arr) {
    res1.textContent = arr;
}

function showHonest(arr) {
    res2.textContent = arr.filter(el => el % 2 == 0);
}

function sum(arr) {
    return arr.reduce((a, b) => a + b, 0);
}

function max(arr) {
    return Math.max(...arr);
}

const btn1 = document.querySelector('.task-1 .btn'),
    res1 = document.querySelector('.task-1 .first'),
    res2 = document.querySelector('.task-1 .second'),
    res3 = document.querySelector('.task-1 .third'),
    res4 = document.querySelector('.task-1 .fourth');

btn1.onclick = () => {
    let arr = [];
    for(let i = 1; i <= 10; i++) {
        arr.push(Math.floor(Math.random() * 100));
    }
    showArr(arr);
    showHonest(arr);
    res3.textContent = sum(arr);
    res4.textContent = max(arr);
}
