function map(spaceSharingData, diyData, volunteerData, cellProfile) {
  var lat = 34.67476;
  var lon = 135.80149;
  var map = L.map('map').setView([lat, lon], 14);

  //OSMレイヤー追加
  L.tileLayer(
    'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a>',
      maxZoom: 18
    }
  ).addTo(map);

  var icon_blue = L.icon({
    iconUrl: './svg/map_01.svg',
    iconRetinaUrl: './svg/map_01.svg',
    iconSize: [48, 34],
  });

  var icon_red = L.icon({
    iconUrl: './svg/map_05.svg',
    iconRetinaUrl: './svg/icon_map_01.svg',
    iconSize: [48, 34],
  });

  spaceSharingData.Events.forEach(function (event) {
    var lat = event.latitude;
    var lon = event.longitude;
    var label = event.title; // + '<br><br>' + 'スキル: ' + event.skills;
    L.marker([lat, lon], {
      icon: icon_blue
    }).bindPopup(label, {'autoClose': false}).addTo(map).openPopup();
  });

  diyData.Events.forEach(function (event) {
    var lat = event.latitude;
    var lon = event.longitude;
    var label = event.title + '<br><br>' + '必要なスキル: ' + event.skills;
    L.marker([lat, lon], {
      icon: icon_blue
    }).bindPopup(label, {'autoClose': false}).addTo(map).openPopup();
  });

  volunteerData.Events.forEach(function (event) {
    var lat = event.latitude;
    var lon = event.longitude;
    var title = event.matchingName.split('　')[0];
    var label = title + '<br><br>' + '必要なスキル: ' + event.skills;
    L.marker([lat, lon], {
      icon: icon_blue
    }).bindPopup(label, {'autoClose': false}).addTo(map).openPopup();
  });

  // Home popups
  for (var key in cellProfile) {
    var lat = cellProfile[key].default.Home.Latitude;
    var lon = cellProfile[key].default.Home.Longitude;
    var name = cellProfile[key].ja.DisplayName || cellProfile[key].default.DisplayName;
    var skills = cellProfile[key].default.Skills.join('、');
    var image = '../app-cc-home/' + cellProfile[key].default.Image;
    var label = '<img src="' + image + '" class="profile-img" /><br>&nbsp;&nbsp;' + name + '<br><br>' + '保持スキル:<br>&nbsp;&nbsp;' + skills;
    L.marker([lat, lon], {
      icon: icon_red
    }).bindPopup(label, {'autoClose': false}).addTo(map).openPopup();
  }
}