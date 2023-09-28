const inputs = document.querySelectorAll('.inp');

inputs.forEach((el, i)=> {
    el.addEventListener('keydown', () => {
        el.style.width = ((el.value.length + 1) * 10) + 'px';
        el.style.minWidth = '50px';
    })
    el.addEventListener('focus', () => {
        el.value = '';
        el.style.width = '50px';
    })
})

//Task-1

const list = document.querySelector('.wrapper-1 ol');
const inp11 = document.querySelector('.task-1 .first');
const inp12 = document.querySelector('.task-1 .second');
const inp13 = document.querySelector('.task-1 select');
const btn1 = document.querySelector('.task-1 .btn');


let arr = [

]

const arrPrice = [
    {
        name: 'говядина',
        price: '630',
        unit: '1 кг'
    },
    {
        name: 'курица',
        price: '290',
        unit: '1 кг'
        
    },
    {
        name: 'рыба',
        price: '600',
        unit: '1 кг'
    },
    {
        name: 'колбаса',
        price: '540',
        unit: '1 кг'
    },
    {
        name: 'яйца',
        price: '98',
        unit: '1 уп'
    },
    {
        name: 'макароны',
        price: '87',
        unit: '500 гр'
    },
    {
        name: 'рис',
        price: '130',
        unit: '1 кг'
    },
    {
        name: 'овсянка',
        price: '75',
        unit: '500 гр'
    },
    {
        name: 'чай',
        price: '180',
        unit: '100 гр'
    },
    {
        name: 'кофе',
        price: '220',
        unit: '100 гр'
    },
    {
        name: 'сахар',
        price: '83',
        unit: '1 кг'
        
    },
    {
        name: 'соль',
        price: '31',
        unit: '1 кг'
    },
    {
        name: 'яблоки',
        price: '82',
        unit: '1 кг'
    },
    {
        name: 'бананы',
        price: '120',
        unit: '1 кг'
    },
    {
        name: 'апельсины',
        price: '85',
        unit: '1 кг'
    },
    {
        name: 'помидоры',
        price: '180',
        unit: '1 кг'
    },
    {
        name: 'огурцы',
        price: '260',
        unit: '1 кг'
    },
    {
        name: 'картофель',
        price: '43',
        unit: '1 кг'
    },
    {
        name: 'хлеб',
        price: '33',
        unit: '1 бух'
    },
    {
        name: 'шоколад',
        price: '130',
        unit: '100 гр'
    },
    {
        name: 'печенье',
        price: '63',
        unit: '200гр'
    },
    {
        name: 'молоко',
        price: '65',
        unit: '1 л'
    },
    {
        name: 'творог',
        price: '78',
        unit: '200 гр'
    },
    {
        name: 'сыр',
        price: '100',
        unit: '100 гр'
    },
    {
        name: 'масло',
        price: '140',
        unit: '200 гр'
    },
    {
        name: 'сметана',
        price: '83',
        unit: '300 гр'
    },
    {
        name: 'йогурт',
        price: '600',
        unit: '100 гр'
    },
    {
        name: 'кефир',
        price: '97',
        unit: '1 л'
    },
]

createList();

function addEl(a, b, c) {
    if(arrPrice.find(el => a == el.name)) {
        let el = {
            name: a,
            quantity: b,
            check: JSON.parse(c),
            price: arrPrice.find(el => a == el.name).price
        }
        arr.push(el)
    } else {
        alert('Такого товара нет!');
    }
}

function createList() {
    for(let i = 0; i < arr.length; i++) {
        let li = document.createElement('li');
        /* let unit = arrPrice.find(el => arr[i].name == el.name).unit.match(/\D/ig).join(''); */
        li.innerHTML = `<div>
                            <span class="name">${arr[i].name}</span>
                            <span class="quantity">${arr[i].quantity}</span>
                            <span class="check">${arr[i].check ? '&#10003;' : ''}</span>
                        </div>`;
        list.append(li);
        li.onclick = () => {
            changeCheck(li);
        }
    }
}

function changeCheck(li) {
    const allLists = document.querySelectorAll('.wrapper-1 ol li');

    allLists.forEach((el, i) => {
        if(el == li) {
            let unit = arrPrice.find(el => arr[i].name == el.name).unit.match(/\D/ig).join('');
            arr[i].check = !arr[i].check;
            
            li.innerHTML = `<div>
                        <span class="name">${arr[i].name}</span>
                        <span class="quantity">${arr[i].quantity}</span>
                        <span class="check">${arr[i].check ? '&#10003;' : ''}</span>
                    </div>`;
        }
    })
}

btn1.onclick = () => {
    addEl(inp11.value.toLowerCase(), inp12.value, inp13.value);
    list.textContent = '';

    createList();
}

//Task-2

const btn2 = document.querySelector('.task-3 .btn');
const chequeList = document.querySelector('.wrapper-2 .cheque-ol');
const sum = document.querySelectorAll('.wrapper-2 .sum');
const max = document.querySelector('.wrapper-2 .max');
const middle = document.querySelector('.wrapper-2 .middle');

function createPurchases() {
    let a = 0;
    let b = [];
    let c = 0;
    chequeList.textContent = '';
    for(let i = 0; i < arr.length; i++) {
        if(!arr[i].check) {
            let li = document.createElement('li');
            let unit = arrPrice.find(el => arr[i].name == el.name).unit;
            let quantity = arr[i].quantity.match(/\d/ig).join('');
            li.innerHTML = `<div>
                                <div class="name">${arr[i].name}</div>
                                <div class="price">${arr[i].price}</div>
                                <div class="quantity"> * ${quantity}(${unit})</div>
                                <div class="total"> = ${arr[i].price * quantity}</div>
                            </div>`;
                            /* .match(/\d/ig).join('') */
            chequeList.append(li);
            a += +arr[i].price * quantity;
            b.push(+arr[i].price);
        }
        
    }
    c = Math.floor(b.reduce((x, y) => x + y, 0) / b.length);
    max.innerHTML= `Самый дорогой товар в чеке:&emsp; ${Math.max.apply(null, b)}`;
    middle.innerHTML = `Средняяя стоимость товара в чеке:&emsp; ${c}`;
    sum.forEach(sum => {
        sum.innerHTML = `&emsp;&emsp;&emsp;&emsp;${a}`;
    })
    
}

btn2.onclick = () => {
    createPurchases();
}

const drop = document.querySelector('.drop');


arrPrice.forEach(el => {
    const div = document.createElement('div');
    div.innerHTML = `${el.name}&emsp;-&emsp; ${el.price}&emsp;за&emsp;${el.unit}`;
    div.onclick = () => {
        inp11.value = el.name;
    }
    drop.append(div);
})