document.addEventListener('DOMContentLoaded', function () {
    $(document).ready(function () {
        const big = $('.big img')
        const small = $('.small .row div img');
        small.each(function () {
            const el = $(this);
            el.on('mouseenter', function (e) {
                e.preventDefault();
                big.attr('src', el.attr('src'))
                el.fadeTo(600, 0.6);
            })
            el.on('mouseout', function () {
                el.fadeTo(600, 1);
            });
        });
    });
});

