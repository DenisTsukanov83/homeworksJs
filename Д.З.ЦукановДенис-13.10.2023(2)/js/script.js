$(document).ready(function () {
    const burger = $('.burger'),
        first = $('.one'),
        second = $('.two'),
        third = $('.three'),
        small = $('.small'),
        modal = $('.modal'),
        dz1 = $('.dz-1'),
        dz2 = $('.dz-2'),
        dz3 = $('.dz-3');

    function showModal() {
        opened = !opened;
        if(success) {
            if (opened) {
                success = false;
                first.css({
                    'transform': 'rotate(45deg)',
                    'top': '1rem'
                })
                second.css({
                    'transform': 'rotate(45deg)',
                    'top': '1rem'
                })
                third.css({
                    'transform': 'rotate(-45deg)',
                    'bottom': '1rem'
                })
                small.css({
                    'margin-left': '70rem'
                })

                success = true;

            } else {
                success = false;
                first.css({
                    'transform': 'rotate(0deg)',
                    'top': '0rem'
                })
                second.css({
                    'transform': 'rotate(0deg)',
                    'top': '1rem'
                })
                third.css({
                    'transform': 'rotate(0deg)',
                    'bottom': '0rem'
                })
                small.css({
                    'margin-left': '98rem'
                })
                success = true;
            }
        }
    }

    let opened = false;
    let success = true;

    burger.click(function () {
        showModal();
    })

    dz1.each(function () {
        $(this).click(function () {
            modal.each(function (i) {
                if(i == 0) {
                    $(this).fadeIn();
                } else {
                    $(this).fadeOut();
                }
            })
            showModal();
        })
    })

    dz2.each(function () {
        $(this).click(function () {
            modal.each(function (i) {
                if(i == 1) {
                    $(this).fadeIn();
                } else {
                    $(this).fadeOut();
                }
            })
            showModal();
        })
    })

    dz3.each(function () {
        $(this).click(function () {
            modal.each(function (i) {
                if(i == 2) {
                    $(this).fadeIn();
                } else {
                    $(this).fadeOut();
                }
            })
            showModal();
        })
    })

})









