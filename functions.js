$(window).scroll(function () {

    var wScroll = $(this).scrollTop();
    console.log(wScroll);

    console.log($('#details').offset().top);

    if (wScroll > $('#details').offset().top - 500) {
        $('#details .topic').each(function (i) {

            setTimeout(function () {

                $('#details .topic').eq(i).css({

                    'opacity': 1,
                    'top': 0 + 'px'

                });

            }, 200 * (i + 1));

        });

    }

if(wScroll > $('#gallery').offset().top - $(window).height())
    {
        

        $('#gallery #pic-1').css({

            'transform':'translate(0,0)'

        });

        $('#gallery #pic-4').css({

            'transform': 'translate(0,0)'

        });

        $('#gallery #pic-2').css({

            'transform': 'translate(0,0)'

        });

        $('#gallery #pic-5').css({

            'transform': 'translate(0,0)'

        });

        $('#gallery #pic-3').css({

            'transform': 'translate(0,0)'

        });

        $('#gallery #pic-6').css({

            'transform': 'translate(0,0)'

        });
}

});


