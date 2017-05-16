
var map;

function initMap() {
  // Create a map object and specify the DOM element for display.
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 24.7253557, lng: 121.4792694},
    scrollwheel: true,
    zoom: 10
  });
  
  台鐵路線();
  台鐵站牌();
  高鐵站牌();
  高鐵路線();
  
}

function 台鐵路線(){
    var ctaLayer = new google.maps.KmlLayer({
    url: 'https://javascript-victorzhj.c9users.io/20160622/VL0305V02.kmz',
    map: map
  });
}
function 高鐵路線(){
    var ctaLayer = new google.maps.KmlLayer({
    url: 'https://javascript-victorzhj.c9users.io/20160622/VL0247V02.kmz',
    map: map
  });
}


function 台鐵站牌(){
    
    //組 url 
    var url = "data.php";
    //url = url + document.getElementById("stockid").value;
    
    //送出請求
    AJAXGet(url, handler);
    
}


function handler(doc){
  //console.log(doc);
  //alert(doc);
  
  //抓出實際的 json 文件 
  var 車站資料 = JSON.parse(doc);
  
  var image = 'images/TRA_Logo.png';

  for (var i=0; i<車站資料.length; i++){
      var marker = new google.maps.Marker({
      map: map,
      position: {lat: 車站資料[i].StationPosition.PositionLat , lng: 車站資料[i].StationPosition.PositionLon},
      title: 車站資料[i].StationName.Zh_tw,
      icon: image
      });
      
  }
    
}


function 高鐵站牌(){
    
    //組 url 
    var url = "thsrc.php";
    //url = url + document.getElementById("stockid").value;
    
    //送出請求
    AJAXGet(url, thsrc);
    
}


function thsrc(doc){
  //console.log(doc);
  //alert(doc);
  
  //抓出實際的 json 文件 
  var 高鐵車站 = JSON.parse(doc);
  
  var image = 'images/thsrc-logo.png';

  for (var i=0; i<高鐵車站.length; i++){
      var marker = new google.maps.Marker({
      map: map,
      position: {lat: 高鐵車站[i].StationPosition.PositionLat , lng: 高鐵車站[i].StationPosition.PositionLon},
      title: 高鐵車站[i].StationName.Zh_tw,
      icon: image
      });
      
  }
    
}

google.maps.event.addDomListener(window, 'load', initMap);