function myMap() {
    var mapProp= {
      center:new google.maps.LatLng(25.401165,25.401165,88.516936),
      zoom:4,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
    }