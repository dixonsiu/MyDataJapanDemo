var cellProfile = cellProfile || {};
cellProfile.itou = {
    default: {"CellType":"Person","DisplayName":"伊藤　太郎","Description":"元ゼネコンのサラリーマン","Image":"./img/middleagedmale03.png","ProfileImageName":"","Home":{"Latitude":34.657569,"Longitude":135.801873},"Skills":["ゴルフ","プレゼン","英語"]},
    en: {"DisplayName":"Taro Itou","Description":"Former construction office worker."},
    ja: {"DisplayName":"伊藤　太郎","Description":"元ゼネコンのサラリーマン"}
};
var planStatus = planStatus || {};
planStatus.itou = [
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
recommendedSchedule.itou = [
    {
        "type": "home",
        "planStatus": "confirm",
        "title": "自宅",
        "start": "2018-05-25T08:00:00+09:00",
        "end": "2018-05-25T08:30:00+09:00"
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
        "__id": "per-3"
    }, // event
    {
        "type": "transportation",
        "title": "移動",
        "distance": "約1km"
    },
    {
        "type": "PR",
        "planStatus": "pending",
        "title": "おすすめランチ",
        "summary": "かつおの磯野",
        "image": "./img/R-01.jpg",
        "start": "2018-05-25T11:30:00+09:00",
        "end": "2018-05-25T12:45:00+09:00", // 12:45
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
        "__id": "per-6"
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
