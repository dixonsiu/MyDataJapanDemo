var cellProfile = cellProfile || {};
cellProfile.bandou = {
    default: {"CellType":"Person","DisplayName":"坂東さん","Description":"元建築士","Image":"./img/middleagedfemale01.png","ProfileImageName":"","Home":{"Latitude":34.69438,"Longitude":135.79466},"Skills":["絵", "製図", "着付け"]},
    en: {"DisplayName":"Yoko Bandou","Description":"Formet architect"},
    ja: {"DisplayName":"坂東　陽子","Description":"元建築士"}
};

var planStatus = planStatus || {};
planStatus.bandou = [
    "pending",
    "pending",
    "pending",
    "pending",
    "pending",
    "pending",
    "pending",
    "pending",
    "pending",
    "pending"
];

var recommendedSchedule = recommendedSchedule || {};
recommendedSchedule.bandou = [
    {
        "type": "home",
        "planStatus": "confirm",
        "title": "自宅",
        "start": "2018-05-25T08:00:00+09:00",
        "end": "2018-05-25T08:30:00+09:00"
    }, // home
    {
        "type": "transportation",
        "title": "移動",
        "distance": "約300M"
    },
    {
        "type": "event",
        "__id": "per-4"
    }, // event
    {
        "type": "transportation",
        "title": "移動",
        "distance": "約300M"
    },
    {
        "type": "event",
        "__id": "per-5"
    }, // event
    {
        "type": "transportation",
        "title": "移動",
        "distance": "約300M"
    },
    {
        "type": "PR",
        "planStatus": "pending",
        "title": "おすすめランチ",
        "summary": "かつおの磯野",
        "image": "./img/R-01.jpg",
        "start": "2018-05-25T12:30:00+09:00",
        "end": "2018-05-25T13:45:00+09:00",
        "service": {
            "image": "",
            "name": "PR"
        }
    }, // Commercial
    {
        "type": "transportation",
        "title": "移動",
        "distance": "約300M"
    },
    {
        "type": "event",
        "__id": "per-9"
    }, // event
    {
        "type": "transportation",
        "title": "移動",
        "distance": "約1km"
    },
    {
        "type": "event",
        "__id": "per-11"
    }, // event
    {
        "type": "transportation",
        "title": "移動",
        "distance": "約300M"
    }
];
