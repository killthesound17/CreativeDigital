$('.grid').masonry({
  itemSelector: '.grid-item',
  horizontalOrder: true
});


$('.rw-slider').slick({
  dots:true,
  arrows:true
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
