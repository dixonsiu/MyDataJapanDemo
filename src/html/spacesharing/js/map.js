
function map(){
	var map = L.map('map').setView([35.927482　, 137.317655], 14);

	//OSMレイヤー追加
	L.tileLayer(
		'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
		{
			attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a>',
			maxZoom: 18
		}
	).addTo(map);

	var icon = L.icon({
    iconUrl: '../svg/map_01.svg',
    iconRetinaUrl: '../svg/map_01.svg',
    iconSize: [48, 34],
});

	L.marker([35.921018　, 137.327440],{icon: icon}).addTo(map);
	L.marker([35.925101　, 137.308107],{icon: icon}).addTo(map);
	L.marker([35.927482　, 137.317655],{icon: icon}).addTo(map);
}
