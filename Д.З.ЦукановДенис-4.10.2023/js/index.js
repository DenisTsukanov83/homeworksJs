

$('document').ready(function () {

    function animationEarth() {
        $('.globe-worldmap-front').animate({
            'margin-left': '-470.5px'
        }, 8000, 'linear', function () {
            $(this).css({
                'margin-left': '1.5px'
            })
        })

        $('.globe-worldmap-back').animate({
            'margin-left': '1.5px'
        }, 8000, 'linear', function () {
            $(this).css({
                'margin-left': '-471px'
            })
            animationEarth()
        })
    }

    animationEarth();

    let access = false;

    function animationText() {
        $('.text-content').animate({
            'width': '755px',
            'font-size': '24pt',
            'padding-top': '45px',
        }, 500, function () {
            $('.text-content').animate({
                'width': '500px',
                'font-size': '16pt',
                'padding-top': '75px',
            })
            if(access) {
                animationText();
            } else {
                $('.text-content').stop();
            }
        })
    }

    $('.text-content').on('mouseenter', (function () {
        animationText();
        access = true;
    }))

    $('.text-content').on('mouseleave', (function () {
        access = false;
    }))
})


