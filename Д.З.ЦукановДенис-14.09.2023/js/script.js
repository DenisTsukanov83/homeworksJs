const inpNum = document.querySelector('.inp-number'),
    inpName = document.querySelector('.inp-name'),
    inpDate = document.querySelector('.inp-date'),
    inpYear = document.querySelector('.inp-year'),
    inpCvv = document.querySelector('.inp-cvv'),
    cardNum = document.querySelector('.card-number'),
    cardDate = document.querySelector('.card-date'),
    cardName = document.querySelector('.card-name'),
    cardCvv = document.querySelector('.card-cvv'),
    color1 = document.querySelector('.inp-color-1'),
    color2 = document.querySelector('.inp-color-2'),
    colorText = document.querySelector('.inp-text'),
    card = document.querySelectorAll('.card'),
    cardFront = document.querySelector('.card'),
    fill = document.querySelector('.card-connect svg g');


inpNum.addEventListener('keyup', () => {
    let arr = inpNum.value.search(/\D/g);
    if(inpNum.value.length <= 16 && arr < 0) {
        cardNum.textContent = inpNum.value.replace(/(?=(\d{4})+(?!\d))/g, " ");
    }
    if(!inpNum.value.length) {
        cardNum.textContent = '1234 5678 9012 3456';
    }
    
})

inpDate.addEventListener('keyup', () => {
    if(inpDate.value.length < 3 && inpDate.value != 0 && inpDate.value <= 12) {
        cardDate.textContent = cardDate.textContent.replace(/\d{2}\./g, `${inpDate.value < 10 ? '0' + inpDate.value : inpDate.value}.`);
    }
})

inpYear.addEventListener('keyup', () => {
    if(inpYear.value.length < 5 && inpYear.value != 0) {
        cardDate.textContent = cardDate.textContent.replace(/\.\d+/g, `.${inpYear.value}`);
    }
    if(!inpYear.value.length) {
        cardDate.textContent = cardDate.textContent.replace(/\.\d+/, '.2017');
    }
})

inpName.addEventListener('keyup', () => {
    cardName.textContent = inpName.value;
    if(!inpName.value.length) {
        cardName.textContent = 'Name Surname';
    }
})

inpCvv.addEventListener('keyup', () => {
    let arr = inpCvv.value.search(/\D/g);

    if(inpCvv.value.length < 4 && arr < 0) {
        cardCvv.textContent = inpCvv.value;
    }
    
})

color1.addEventListener('input', () => {
    console.log(color1.value)
    card.forEach(el => {
        el.style.background = `linear-gradient(${color1.value}, ${color2.value})`;
    })
})

color2.addEventListener('input', () => {
    card.forEach(el => {
        el.style.background = `linear-gradient(${color1.value}, ${color2.value})`;
    })
    
})

colorText.addEventListener('input', () => {
    cardFront.style.color = `${colorText.value}`;
    fill.style.fill = `${colorText.value}`;
})

