/* eslint-disable */

const volunteer_appData = {
  "path": "volunteer",
  "Events": [{
      "id": "12345678901234567890",                 // イベントID
      "matchingName": "市内の神社仏閣観光ガイドをお願いします",         // イベントタイトル
      "matchingDetail": "５月に仕事で富士通市へ来られる訪日外国人の方の観光ガイドをお願いいたします。話せる言葉は英語・韓国語で、富士通市の神社仏閣を見学したいとのことです。", // イベント詳細
      "sellerAccountId": "11000000000000000000",    // 募集者ID（使用しない）
      "matchingPrice": 30,                          // イベント報酬
      "postStartDate": "2018-04-15T15:00:00+09:00",  // イベント掲載開始日時
      "postEndDate": "2018-05-18T13:59:59+09:00",    // イベント掲載終了日時
      "volunteer_type": "通訳",                     // イベント種類
      "interpretation_language": ["英語", "韓国語"],    // イベント詳細種別
      "keywords": "訪日、通訳、英語、韓国語",         // イベント検索ワード
      "place": "富士通市観光協会",                       // イベント場所
      "address": "富士通市中央１－２－３　富士通市観光協会",      // イベント住所
      "recruitment_target": "英語または韓国語が話せる方。市内の観光スポットに熟知した方。",   // イベント募集対象
      "status": 1,      // イベント状態
      "edit": 0,        // イベント編集状態
      "image": "./img/events/12345678901234567890.png",     // イベントトップ画像
      "latitude": 34.69649,
      "longitude": 135.77501,
      "calendars": [{
        "useStartDatetime": "2018-05-25T13:00:00+09:00", // イベント開始日時
        "useEndDatetime": "2018-05-25T14:59:59+09:00",   // イベント終了日時
        "capacity": 1,
        "remainingCost": 0
      }],
      "attendees": {
        "totalCount": 1,          // 参加確定人数
        "Accounts": []
      },
      "messages": {
        "totalCount": 7,
        "Notifications": []
      },
      "service": {
        "image": "./img/logo.png",
        "name": "富士通市ボランティアマッチング"
      },
      "postDate":"2018-04-13T17:00:00+09:00", // 投稿日時がない場合、仮作成し
      "postalCode": "630-1234", //郵便番号
      "phoneNumber": "0742-98-2282", //お問い合わせ先番号
      "skills": "英語、韓国語、神社、仏閣", //参照されたあなたのスキル
      "recruiter":"富士通 太朗",
      "recruiterLabel": "依頼者"
    },
    {
      "id": "70000000000000000000",
      "matchingName": "合気道で心身ともに強くなりたい",
      "matchingDetail": "護身術として合気道を始めたいと思います。心身ともに強くなって、ストレス社会に負けない自分を作りたいです。",
      "sellerAccountId": "71000000000000000000",
      "matchingPrice": 100,
      "postStartDate": "2018-04-15T15:00:00+09:00",
      "postEndDate": "2018-05-20T17:00:00+09:00",    // イベント掲載終了日時
      "volunteer_type": "教育",
      "interpretation_language": ["日本語", "英語"],
      "keywords": "合気道、護身術",
      "place": "富士通道場",
      "address": "富士通市東町２２２－２　富士通道場",
      "recruitment_target": "合気道に精通した方",
      "status": 1,
      "edit": 0,
      "image": "./img/events/70000000000000000000.png",     // イベントトップ画像
      "latitude": 34.63383,
      "longitude": 135.8052,
      "calendars": [{
        "useStartDatetime": "2018-05-25T13:00:00+09:00", // イベント開始日時
        "useEndDatetime": "2018-05-25T14:00:00+09:00",   // イベント終了日時
        "capacity": 8,
        "remainingCost": 0
      }],
      "attendees": {
        "totalCount": 0,
        "Accounts": []
      },
      "messages": {
        "totalCount": 6,
        "Notifications": []
      },
      "service": {
        "image": "./img/logo.png",
        "name": "富士通市ボランティアマッチング"
      },
      "postDate":"2018-04-13T17:00:00+09:00", // 投稿日時がない場合、仮作成し
      "postalCode": "630-1234", //郵便番号
      "phoneNumber": "0742-98-2282", //お問い合わせ先番号
      "skills": "合気道、武術", //参照されたあなたのスキル
      "recruiter":"富士通 太朗",
      "recruiterLabel": "依頼者"
    },
    {
      "id": "20000000000000000000",
      "matchingName": "富士通中央公園の清掃をしませんか？",
      "matchingDetail": "ごみゼロ運動を通して地域貢献。ごみゼロの輪を広げませんか？皆で住みよい街を作りましょう。",
      "sellerAccountId": "21000000000000000000",
      "matchingPrice": 10,
      "postStartDate": "2018-04-15T15:00:00+09:00",
      "postEndDate": "2018-05-20T17:59:59+09:00",    // イベント掲載終了日時
      "volunteer_type": "ごみゼロ運動",
      "interpretation_language": ["日本語"],
      "keywords": "ゴミ拾い、公園、清掃",
      "place": "富士通中央公園",
      "address": "富士通市中央２０－２２　富士通中央公園事務所",
      "recruitment_target": "やる気のある方なら誰でもOK。お子さん・お孫さんを連れての参加も歓迎です。",
      "status": 1,
      "edit": 0,
      "image": "./img/events/20000000000000000000.png",     // イベントトップ画像
      "latitude": 34.68569,
      "longitude": 135.79551,
      "calendars": [{
        "useStartDatetime": "2018-05-25T16:00:00+09:00", // イベント開始日時
        "useEndDatetime": "2018-05-25T17:59:59+09:00",   // イベント終了日時
        "capacity": 15,
        "remainingCost": 0
      }],
      "attendees": {
        "totalCount": 0,
        "Accounts": []
      },
      "messages": {
        "totalCount": 4,
        "Notifications": [],
        "Notifications_orig": [{
          "id": "12819415688024193035",
          "accountId": "84876764758542329001",
          "resourceType": "matching",
          "resourceId": "75869808177707367014",
          "title": "Unused",
          "bodyText": "",
          "bodyType": "EventMessage",
          "createDatetime": "2018-04-16T02:05:55+09:00",
          "updateDatetime": "2018-04-16T02:05:55+09:00"
        }]
      },
      "service": {
        "image": "./img/logo.png",
        "name": "富士通市ボランティアマッチング"
      },
      "postDate":"2018-04-13T17:00:00+09:00", // 投稿日時がない場合、仮作成し
      "postalCode": "630-1234", //郵便番号
      "phoneNumber": "0742-98-2282", //お問い合わせ先番号
      "skills": "不問", //参照されたあなたのスキル
      "recruiter":"富士通 太朗",
      "recruiterLabel": "募集者"
    },
    {
      "id": "30000000000000000000",
      "matchingName": "建築物スケッチを教えて",
      "matchingDetail": "富士通市の見どころを伝えるブログを書いています。市内の魅力的な建築物を紹介するにあたり、スケッチにも挑戦してみたいと思います。教えていただけませんか？",
      "sellerAccountId": "31000000000000000000",
      "matchingPrice": 100,
      "postStartDate": "2018-04-12T15:00:00+09:00",
      "postEndDate": "2018-05-18T09:59:59+09:00",    // イベント掲載終了日時
      "volunteer_type": "教育",
      "interpretation_language": ["日本語"],
      "keywords": "建築、スケッチ、講師",
      "place": "富士通市民ホール　小会議室",
      "address": "富士通市中央１－１－１　富士通市民ホール",
      "recruitment_target": "絵画の技法に熟知した方",
      "status": 1,
      "edit": 0,
      "image": "./img/events/30000000000000000000.png",     // イベントトップ画像
      "latitude": 34.7009,
      "longitude": 135.81281,
      "calendars": [{
        "useStartDatetime": "2018-05-25T09:00:00+09:00", // イベント開始日時
        "useEndDatetime": "2018-05-25T09:59:59+09:00",   // イベント終了日時
        "capacity": 1,
        "remainingCost": 0
      }],
      "attendees": {
        "totalCount": 21,
        "Accounts": []
      },
      "messages": {
        "totalCount": 3,
        "Notifications": []
      },
      "service": {
        "image": "./img/logo.png",
        "name": "富士通市ボランティアマッチング"
      },
      "postDate":"2018-04-10T17:00:00+09:00", // 投稿日時がない場合、仮作成し
      "postalCode": "630-1234", //郵便番号
      "phoneNumber": "0742-98-2282", //お問い合わせ先番号
      "skills": "絵、製図、スケッチ", //参照されたあなたのスキル
      "recruiter":"富士通 太朗",
      "recruiterLabel": "依頼者"
    },
    {
      "id": "40000000000000000000",
      "matchingName": "結婚式の着付け",
      "matchingDetail": "5月18日の結婚式には和装で参列しようと思います。着付けをお願いできる方がいらっしゃいましたらお願いしたく思います。",
      "sellerAccountId": "41000000000000000000",
      "matchingPrice": 50,
      "postStartDate": "2018-04-15T15:00:00+09:00",
      "postEndDate": "2018-05-18T14:59:59+09:00",    // イベント掲載終了日時
      "volunteer_type": "教育",
      "interpretation_language": ["日本語"],
      "keywords": "着付け、着物",
      "place": "自宅",
      "address": "富士通市北町３５－２　富士通ハイツ２２２",
      "recruitment_target": "着付けのできる方",
      "status": 1,
      "edit": 0,
      "image": "./img/events/40000000000000000000.png",     // イベントトップ画像
      "latitude": 34.67561,
      "longitude": 135.82077,
      "calendars": [{
        "useStartDatetime": "2018-05-25T14:00:00+09:00", // イベント開始日時
        "useEndDatetime": "2018-05-25T14:59:59+09:00",   // イベント終了日時
        "capacity": 1,
        "remainingCost": 0
      }],
      "attendees": {
        "totalCount": 0,
        "Accounts": []
      },
      "messages": {
        "totalCount": 2,
        "Notifications": []
      },
      "service": {
        "image": "./img/logo.png",
        "name": "富士通市ボランティアマッチング"
      },
      "postDate":"2018-04-13T17:00:00+09:00", // 投稿日時がない場合、仮作成し
      "postalCode": "630-1234", //郵便番号
      "phoneNumber": "0742-98-2282", //お問い合わせ先番号
      "skills": "着付け", //参照されたあなたのスキル
      "recruiter":"富士通 太朗",
      "recruiterLabel": "依頼者"
    },
    {
      "id": "50000000000000000000",
      "matchingName": "マナー講習講師をしませんか？　第３回は「神社におけるマナー」",
      "matchingDetail": "マナー講習を開催いたします。第３回は神社におけるマナーということで、神社仏閣に精通された方を募集いたします。",
      "sellerAccountId": "51000000000000000000",
      "matchingPrice": 30,
      "postStartDate": "2018-04-15T15:00:00+09:00",
      "postEndDate": "2018-05-18T13:59:59+09:00",    // イベント掲載終了日時
      "volunteer_type": "教育",
      "interpretation_language": ["日本語"],
      "keywords": "神社、マナー",
      "place": "富士通市民ホール　小会議室",
      "address": "富士通市中央１－１－１　富士通市民ホール",
      "recruitment_target": "神社に熟知した方",
      "status": 1,
      "edit": 0,
      "image": "./img/events/50000000000000000000.png",     // イベントトップ画像
      "latitude": 34.69025,
      "longitude": 135.8389,
      "calendars": [{
        "useStartDatetime": "2018-05-25T13:00:00+09:00", // イベント開始日時
        "useEndDatetime": "2018-05-25T13:59:59+09:00",   // イベント終了日時
        "capacity": 1,
        "remainingCost": 0
      }],
      "attendees": {
        "totalCount": 0,
        "Accounts": []
      },
      "messages": {
        "totalCount": 2,
        "Notifications": []
      },
      "service": {
        "image": "./img/logo.png",
        "name": "富士通市ボランティアマッチング"
      },
      "postDate":"2018-04-13T17:00:00+09:00", // 投稿日時がない場合、仮作成し
      "postalCode": "630-1234", //郵便番号
      "phoneNumber": "0742-98-2282", //お問い合わせ先番号
      "skills": "神社、マナー", //参照されたあなたのスキル
      "recruiter":"富士通 太朗",
      "recruiterLabel": "募集者"
    },
    {
      "id": "60000000000000000000",
      "matchingName": "子供たちに寄木細工を教えてほしい",
      "matchingDetail": "富士通市ならではの工作を通して、子供たちに富士通市の文化に触れてもらい、独創性を育んでほしい。そんな思いから寄木細工の工作教室を開催することにしました。教えてくださるスタッフの方を募集します。",
      "sellerAccountId": "61000000000000000000",
      "matchingPrice": 30,
      "postStartDate": "2018-04-15T15:00:00+09:00",
      "postEndDate": "2018-05-18T14:59:59+09:00",    // イベント掲載終了日時
      "volunteer_type": "教育",
      "interpretation_language": ["日本語", "英語"],
      "keywords": "工作、講師",
      "place": "自治会館　小教室",
      "address": "富士通市中央２－２－２　富士通市自治会館",
      "recruitment_target": "木材の使用経験のある方。手先の器用な方。寄木細工の経験は不問です。",
      "status": 1,
      "edit": 0,
      "image": "./img/events/60000000000000000000.png",     // イベントトップ画像
      "latitude": 34.6884,
      "longitude": 135.81726,
      "calendars": [{
        "useStartDatetime": "2018-05-25T14:00:00+09:00", // イベント開始日時
        "useEndDatetime": "2018-05-25T14:59:59+09:00",   // イベント終了日時
        "capacity": 1,
        "remainingCost": 0
      }],
      "attendees": {
        "totalCount": 0,
        "Accounts": []
      },
      "messages": {
        "totalCount": 5,
        "Notifications": []
      },
      "service": {
        "image": "./img/logo.png",
        "name": "富士通市ボランティアマッチング"
      },
      "postDate":"2018-04-13T17:00:00+09:00", // 投稿日時がない場合、仮作成し
      "postalCode": "630-1234", //郵便番号
      "phoneNumber": "0742-98-2282", //お問い合わせ先番号
      "skills": "工作、木工", //参照されたあなたのスキル
      "recruiter":"富士通 太朗",
      "recruiterLabel": "募集者"
    },
  ],
}
