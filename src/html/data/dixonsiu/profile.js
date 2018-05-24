var cellProfile = cellProfile || {};
cellProfile.dixonsiu = {
    default: {"CellType":"Person","DisplayName":"シュウ　ディクソン","Description":"Personium GUI開発者","Image":"./img/dixonsiu.png","ProfileImageName":"","Home":{"Latitude":34.66784,"Longitude":135.83787},"Skills":["アプリ開発","英語・中国語","工作"]},
    en: {"DisplayName":"Dixon Siu","Description":"Personium GUI Developer"},
    ja: {"DisplayName":"シュウ　ディクソン","Description":"Personium GUI開発者"}
};

var planStatus = planStatus || {};
planStatus.dixonsiu = [
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
recommendedSchedule.dixonsiu = [
    {
        "type": "home",
        "planStatus": "confirm",
        "title": "自宅",
        "start": "2018-05-25T08:00:00+09:00",
        "end": "2018-05-25T08:45:00+09:00"
    }, // home
    {
        "type": "ridesharing",
        "planStatus": "confirm",
        "title": "移動（ライドシェア）",
        "recruiter": "ディクソン　シュウ",
        "recruiterLabel": "依頼者",
        "phoneNumber": "0742-98-2282",
        "service": {
            "image": "./img/car.png",
            "name": "支え合い交通サービス" // Ridesharing Service
        }
    },
    {
        "type": "event",
        "__id": "per-2"
    }, // event
    {
        "type": "ridesharing",
        "planStatus": "confirm",
        "title": "移動（ライドシェア）",
        "recruiter": "ディクソン　シュウ",
        "recruiterLabel": "依頼者",
        "phoneNumber": "0742-98-2282",
        "service": {
            "image": "./img/car.png",
            "name": "支え合い交通サービス" // Ridesharing Service
        }
    },
    {
        "type": "home",
        "planStatus": "confirm",
        "title": "自宅（昼食）",
        "start": "2018-05-25T12:15:00+09:00",
        "end": "2018-05-25T12:45:00+09:00"
    }, // home
    {
        "type": "ridesharing",
        "planStatus": "pending",
        "title": "移動（ライドシェア）",
        "recruiter": "ディクソン　シュウ",
        "recruiterLabel": "依頼者",
        "phoneNumber": "0742-98-2282",
        "service": {
            "image": "./img/car.png",
            "name": "支え合い交通サービス" // Ridesharing Service
        }
    },
    {
        "type": "event",
        "__id": "per-7"
    }, // event
    {
        "type": "transportation",
        "title": "移動",
        "distance": "約300M"
    },
    {
        "type": "event",
        "__id": "per-10"
    }, // event
    {
        "type": "transportation",
        "title": "移動",
        "distance": "約300M"
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
