$(document).ready(function () {
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
        if (inpNum.value != inpNum.value.match(/\d\d\d\d \d\d\d\d \d\d\d\d \d\d\d\d/)) {
            cardNum.textContent = inpNum.value.replace(/(?=(\d{4})+(?!\d))/g, " ");
        } else {
            cardNum.textContent = inpNum.value;
        }
        if (!inpNum.value.length) {
            cardNum.textContent = '1234 5678 9012 3456';
        }

        

    })

    inpDate.addEventListener('keyup', () => {
        if (inpDate.value.length < 3 && inpDate.value != 0 && inpDate.value <= 12) {
            cardDate.textContent = cardDate.textContent.replace(/\d{2}\./g, `${inpDate.value < 10 ? '0' + inpDate.value : inpDate.value}.`);
        }
    })

    inpYear.addEventListener('keyup', () => {
        if (inpYear.value.length < 5 && inpYear.value != 0) {
            cardDate.textContent = cardDate.textContent.replace(/\.\d+/g, `.${inpYear.value}`).replace(/\_/g, '');

        }
        if (!inpYear.value.length || inpYear.value == '____') {
            cardDate.textContent = cardDate.textContent.replace(/\./g, '.2017');
        }
    })

    inpName.addEventListener('keyup', () => {
        cardName.textContent = inpName.value;
        if (!inpName.value.length) {
            cardName.textContent = 'Name Surname';
        }
    })

    inpCvv.addEventListener('keyup', () => {
        let arr = inpCvv.value.search(/\D/g);

        if (inpCvv.value.length < 4 && arr < 0) {
            cardCvv.textContent = inpCvv.value;
        }

    })

    color1.addEventListener('input', () => {
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

    //Модальное окно

    $('.create').on('click', function () {
        $('.modal').fadeIn();
        $('.create').fadeOut();
    });

    $('.close').on('click', function () {
        $('.modal').fadeOut();
        $('.create').fadeIn();
    })


    //Проверка данных

    const number = $('.inp-number'),
        sub = $('.form-wrapper :submit'),
        month = $('.inp-date'),
        year = $('.inp-year'),
        name = $('.inp-name');
        cvv = $('.inp-cvv');

        number.mask('9999 9999 9999 9999');
        month.mask('99');
        year.mask('9999')
        sub.click(function (e) {
            e.preventDefault()

            let a = false,
                b = false,
                c = false,
                d = false,
                f = false;
            
            inpNum.value == inpNum.value.match(/\d\d\d\d \d\d\d\d \d\d\d\d \d\d\d\d/) ? a = true : a = false;
            !inpName.value.length ? b = false : b = true;
            +inpDate.value > 0 && +inpDate.value < 13 ? c = true : c = false;
            inpYear.value.length != 4 ? d = false : d = true;
            inpCvv.value.length != 3 ? f = false : f = true;

            !a ? number.css({'border-bottom': '0.2rem solid red'}) : number.css({'border-bottom': '0.2rem solid rgb(98, 139, 141)'});
            !b ? name.css({'border-bottom': '0.2rem solid red'}) : name.css({'border-bottom': '0.2rem solid rgb(98, 139, 141)'});
            !c ? month.css({'border-bottom': '0.2rem solid red'}) : month.css({'border-bottom': '0.2rem solid rgb(98, 139, 141)'});
            !d ? year.css({'border-bottom': '0.2rem solid red'}) : year.css({'border-bottom': '0.2rem solid rgb(98, 139, 141)'});
            !f ? cvv.css({'border-bottom': '0.2rem solid red'}) : cvv.css({'border-bottom': '0.2rem solid rgb(98, 139, 141)'});

            if(!a || !b || !c || !d || !f) {
                alert('Введите данные!');
            } else {
                number.attr('disabled', 'disabled');
                name.attr('disabled', 'disabled');
                month.attr('disabled', 'disabled');
                year.attr('disabled', 'disabled');
                cvv.attr('disabled', 'disabled');
                alert('Данные введены!');
            }


        })

})





