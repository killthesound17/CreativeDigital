//smooth scroll

$('a[href*="#"]')
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
        if (
            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000, function() {
                    var $target = $(target);
                    $target.focus();
                    if ($target.is(":focus")) {
                        return false;
                    } else {
                        $target.attr('tabindex', '-1');
                        $target.focus();
                    };
                });
            }
        }
    });





$('.grid').masonry({
  itemSelector: '.grid-item',
  horizontalOrder: true
});


$('.rw-slider').slick({
  dots:true,
  arrows:true
});



//back to tops

$(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() != 0) {
            $('#backToTop').fadeIn();
        } else {
            $('#backToTop').fadeOut();
        }
    });
    $('#backToTop').click(function() {
        $('body,html').animate({
            scrollTop: 0
        }, 800);
    });
});

//maps
function initMap() {
    var creativePos = {
        lat: 40.718843,
        lng: -73.680038
    };

    var map = new google.maps.Map(document.getElementById('map'), {
        scrollwheel: false,
        zoom: 17,
        center: creativePos,
        mapTypeId: 'roadmap'
    });

    var image = '../app/img/pin-map.png';
    var creativeMarker = new google.maps.Marker({
        position: creativePos,
        animation: google.maps.Animation.DROP,
        title: "CD Here!",
        map: map,
        icon: image,
    });
    creativeMarker.setMap(map);
};
google.map.event.addDomListener(window, 'load', initMap);
