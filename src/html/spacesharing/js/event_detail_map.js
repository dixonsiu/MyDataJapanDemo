function map(lat, lon) {
  var osmFlag = false;

  if (!osmFlag) {
    var mapImage = '../img/map/' + lat + '-' + lon + '.png';
    $('#map').append('<img src="'+ mapImage + '" style="width: 100%; padding: 0px 16px;"></img>')
    return;
  }

  var arg = new Object;
  url = location.search.substring(1).split('&');

  for (i = 0; url[i]; i++) {
    var k = url[i].split('=');
    arg[k[0]] = k[1];
  }

  var event_id = arg.event_id;

  var map = L.map('map').setView([lat, lon], 12);

  //OSMレイヤー追加
  L.tileLayer(
    'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a>',
      maxZoom: 18
    }
  ).addTo(map);

  var icon_living = L.icon({
    iconUrl: '../svg/map_01.svg',
    iconRetinaUrl: '../svg/map_01.svg',
    iconSize: [48, 34],
  });

  var icon_event = L.icon({
    iconUrl: '../svg/map_05.svg',
    iconRetinaUrl: '../svg/icon_map_01.svg',
    iconSize: [48, 34],
  });

  // L.marker([35.921018, 137.318440], { icon: icon_living }).bindPopup("木のぬくもりを感じる和室").addTo(map);
  // L.marker([35.925101, 137.308107], { icon: icon_living }).bindPopup("駅から5分!おしゃれな洋室").addTo(map);
  // L.marker([35.927482, 137.317655], { icon: icon_living }).bindPopup("大人も安心の広々ルーム").addTo(map);

  L.marker([lat, lon], { icon: icon_event }).bindPopup("開催場所").addTo(map).openPopup();
}
