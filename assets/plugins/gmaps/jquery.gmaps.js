$(document).ready(function () {
    // Simple map
    map = new GMaps({
        el: '#gmaps-simple',
        lat: 10.861373864949753,
        lng: -74.77469895000002,
        zoom: 4,
        panControl: false,
        streetViewControl: false,
        mapTypeControl: false,
        overviewMapControl: false
    });
});
