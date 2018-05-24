var cellProfile = cellProfile || {};
cellProfile.fujinomiya = {
    default: {"CellType":"Person","DisplayName":"富士宮　和利","Description":"元宮大工","Image":"./img/middleagedmale01.png","ProfileImageName":"","Home":{"Latitude":34.66784,"Longitude":135.83787},"Skills":["神社・仏閣のマナー","大工","工作"]},
    en: {"DisplayName":"Kazutoshi Fujinomiya","Description":"Former carpenter"},
    ja: {"DisplayName":"富士宮　和利","Description":"元宮大工"}
};

var planStatus = planStatus || {};
planStatus.fujinomiya = [
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
recommendedSchedule.fujinomiya = [
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
