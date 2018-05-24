function client_header(){
  var html = "";

  html += "<nav class='navbar navbar-default navbar-fixed-top'>";
  html += "<div class='container-fluid'>";
  html += "<div class='navbar-header'>";
  html += "<a id='top' class='navbar-brand' href=''>ホームセンターフジ<br>お手伝いシェアリングサービス</a>";
  html += "<div class='hidden-sm hidden-md hidden-lg'>";
  html += "<button type='button' class='navbar-toggle collapsed'>";
  html += "<span class='icon-bar'></span>";
  html += "<span class='icon-bar'></span>";
  html += "<span class='icon-bar'></span>";
  html += "</button>";
  html += "</div></div>";

  document.write(html);
}

function worker_header(){
  var html = "";

  html += "<nav class='navbar navbar-default navbar-fixed-top'>";
  html += "<div class='container-fluid'>";
  html += "<div class='navbar-header'>";
  html += "<a href='#' class='icon'><img class='iconimg' src='../img/DDL3/diyicon.png' alt=''></a>";
  html += "<a id='top' class='navbar-brand' href=''>ホームセンターフジ<br>お手伝いシェアリングサービス</a>";
  html += "<div class='hidden-sm hidden-md hidden-lg'>";
  // html += "<button type='button' class='navbar-toggle collapsed'>";
  // html += "<span class='icon-bar'></span>";
  // html += "<span class='icon-bar'></span>";
  // html += "<span class='icon-bar'></span>";
  // html += "</button>";
  html += "</div></div>";

  document.write(html);
}

function service_header(){
  var arg  = new Object;
  url = location.search.substring(1).split('&');

  for(i=0; url[i]; i++) {
    var k = url[i].split('=');
    arg[k[0]] = k[1];
  }

  var userid = arg.userid;
  var html = "";

  document.write(html);
}

/*スマホメニュー風フッター*/
function footer(){
  var html = "";

  html += "<footer class='container-fluid'>";
  html += "<div class='container'><div class='clearfix'><div class='center-block'>";
  html += "<ul class='list-inline'>";
  html += "<li><a href='selectcategory.html?userid=1&amp;id=1'><p><img class='img-inline' src='../img/DDL2/ico_help.png' alt=''></p><b>応募する</b></a></li>";
  html += "<li><a href='#'><p><img class='img-inline' src='../img/DDL2/ico_search02.png' alt=''></p><b>募集する</b></a></li>";
  html += "<li><a href='#'><p><img class='img-inline' src='../img/DDL2/ico_home.png' alt=''></p><b>ホーム</b></a></li>";
  html += "<li><a href='#'><p><img class='img-inline' src='../img/DDL2/ico_point.png' alt=''></p><b>ポイント</b></a></li>";
  html += "<li><a href='#'><p><img class='img-inline' src='../img/DDL2/ico_mail.png' alt=''></p><b>メッセージ</b></a></li></ul></div></footer>";

  document.write(html);
}

/*標準のフッター*/
/*function footer(){
  var html = "";

  html += "<footer class='container-fluid'>";
  html += "<div class='container'><div class='clearfix'><div class='pull-left'>";
  html += "<ul class='list-inline'>";
  html += "<li><a href=''>利用規約</a></li>";
  html += "<li><a href=''>プライバシーポリシー</a></li>";
  html += "<li><a href=''>お問合せ</a></li></ul></div>";
  html += "<div class='pull-right'><p>copyright</p></div></div></div></footer>";

  document.write(html);
}*/

function service_footer(){
  var html = "";
  html += "<footer class='container-fluid'>";
  html += "<div class='container'>";
  html += "<div class='clearfix'>";
  html += "<div class='pull-right'><p>copyright</p></div>";
  html += "</div></div></footer>";

  document.write(html);
}

function modal(){
  var html = "";
  html += "<form>";
	html += "<div class='modal fade in' id='alertModal' tabindex='-1' style='display: none;'>";
	html += "<div class='modal-dialog'>";
  html += "<div class='modal-content'>";
	html += "<div class='modal-header'>";
	html += "<button type='button' class='close' data-dismiss='modal'><span>×</span></button>";
	html += "<h4 class='modal-title'>新着通知</h4>";
	html += "</div>";
	html += "<div class='modal-body'>";
  // html += "<div class='row row-0 uline'><p>新着通知はありません。</p></div>";
  html += "<div class='row row-0 uline'>";
  html += "<a href='matchings5.html?id=5&userid=2' class='link-wide'>";
	html += "<div class='col-xs-12 col-sm-12'>";
	html += "<h3 class='mt-0 h4'>岩井顕子様から「オリンピックスポーツ体験会スタッフ募集2」の依頼がありました。</h3>";
	html += "<span class='small text-muted'>2017年05月12日 17:04</span>";
	html += "</div></a></div>";
  html += "<div class='row row-0 uline'>";
	html += "<a href='matchings0.html?id=3&userid=2' class='link-wide'>";
	html += "<div class='col-xs-12 col-sm-12'>";
	html += "<h3 class='mt-0 h4'>岩井顕子様が「オリンピックスポーツ体験会スタッフ募集」の参加報告を確認しました</h3>";
	html += "<span class='small text-muted'>2017年05月12日 17:03</span>";
	html += "</div></a></div>";

  html += "</div>";
	html += "<div class='modal-footer'>";
	html += "<div class='text-center'><a href='../alert.html' target='_blank' class='text-center link'>もっと見る</a></div>";
	html += "</div></div></div></div></form>";

  document.write(html);
}

function client_modal(){
  var html = "";
  html += "<form>";
	html += "<div class='modal fade in' id='alertModal' tabindex='-1' style='display: none;'>";
	html += "<div class='modal-dialog'>";
  html += "<div class='modal-content'>";
	html += "<div class='modal-header'>";
	html += "<button type='button' class='close' data-dismiss='modal'><span>×</span></button>";
	html += "<h4 class='modal-title'>新着通知</h4>";
	html += "</div>";
	html += "<div class='modal-body'>";
  // html += "<div class='row row-0 uline'><p>新着通知はありません。</p></div>";
  // html += "<div class='row row-0 uline'>";
  // html += "<a href='matchings5.html?id=5&userid=2' class='link-wide'>";
	// html += "<div class='col-xs-12 col-sm-12'>";
	// html += "<h3 class='mt-0 h4'>岩井顕子様から「留学生相手のボランティア」の依頼がありました。</h3>";
	// html += "<span class='small text-muted'>2017年05月12日 17:04</span>";
  // html += "</div></a></div>";
  html += "<div class='row row-0 uline'>";
	html += "<a href='matchings3.html?userid=1&id=1' class='link-wide'>";
	html += "<div class='col-xs-12 col-sm-12'>";
	html += "<h3 class='mt-0 h4'>内村順様が「留学生相手のボランティア」に応募しました</h3>";
	html += "<span class='small text-muted'>2017年05月9日 12:40</span>";
	html += "</div></a></div>";
  html += "<div class='row row-0 uline'>";
	html += "<a href='matchings0.html?userid=1&id=1' class='link-wide'>";
	html += "<div class='col-xs-12 col-sm-12'>";
	html += "<h3 class='mt-0 h4'>内村順様が「留学生相手のボランティア」の参加報告をしました</h3>";
	html += "<span class='small text-muted'>2017年05月12日 17:03</span>";
	html += "</div></a></div>";
  // html += "<div class='row row-0 uline'>";
	// html += "<a href='/worker/matchings/55573641267875668014' class='link-wide'>";
	// html += "<div class='col-xs-12 col-sm-12'>";
	// html += "<h3 class='mt-0 h4'>岩井顕子様から「留学生相手のボランティア」の依頼がありました</h3>";
	// html += "<span class='small text-muted'>2017年05月12日 17:01</span>";
	// html += "</div></a></div>2
  html += "</div>";
	html += "<div class='modal-footer'>";
  // html += "<div class='text-center'><a href='../alert.html' target='_blank' class='text-center link'>もっと見る</a></div>";
  html += "<div class='text-center'>もっと見る</div>";
	html += "</div></div></div></div></form>";

  document.write(html);
}

var userData = [{
	"//":"項目説明",
	"//":"skill 1.特許調査 2.学術文献 3.その他"
},{
	"id": 1,
	"name": "岩井顕子",
	"role": "recruiter",
	"userid": "ctest1234",
	"password": "ctest1234",
	"profimg":"../img/DDL/user_01.jpg",
	"profile":"通訳のボランティアをたくさんご紹介したいと考えています。",
	"office":"富士通株式会社",
	"department":"開発技術部",
	"affiliation":"企業",
	"address":"茨城県東茨城郡富士通町1-1-1",
	"capital":"7コイン",
	"employee":"50人",
	"tell":"080-1234-xxxx",
	"mail":"volunteer@×××.com"

}, {
	"id": 2,
	"name": "内村順",
	"role": "volunteer",
	"userid": "wtest1234",
	"password": "wtest1234",
	"profimg":"../img/DDL/user_03.jpg",
	"skill":[1,2],
	"project":"通訳",
	"field":"英語、フランス語",
	"experience":"2年",
	"language":"英語、フランス語",
	"qualification":"英検準1級、普通自動車免許(MT可)、基本情報技術者処理試験",
	"appeal":"何事にも一生懸命",
	"affiliation":"企業",
	"office":"富士通株式会社",
	"department":"開発技術部",
	"address":"茨城県東茨城郡富士通町1-1-1",
	"tell":"080-1234-xxxx",
	"mail":"volunteertest@×××.com"
},{
	"id": 3,
	"name": "石坂利郎",
	"role": "recruiter",
	"userid": "recruitertest",
	"password": "recruitertest",
	"profimg":"../img/prof4.png",
	"profile":"インターネットの飛躍的な発展により、社会や人々の生活は大きく変化しています。企業は消費者とダイレクトにコミュニケーションが可能になった半面、消費者の細分化した嗜好を迅速かつ正確に掴むことを要求されています。私たちは、そういった企業のニーズにお応えするための様々なビジネスサポートサービスを提供しています。 ",
	"office":"応募者派遣02株式会社",
	"affiliation":"営業第2部　エリアリーダー",
	"address":"千葉県松戸市777-777",
	"capital":"500万コイン",
	"employee":"34人",
	"tell":"080-0987-6543",
	"mail":"recruitertest222@×××.com"
},{
	"id": 4,
	"name": "寺尾里咲",
	"role": "volunteer",
	"userid": "volunteertest",
	"password": "volunteertest",
	"profimg":"../img/prof4.png",
	"skill":[2],
	"mail":"volunteertest1234@×××.com"
},
{
	"id":5,
	"name": "清野豊樹",
	"role": "admin",
	"userid": "admin",
	"password": "admin",
	"profimg":"../img/prof4.png",
	"mail":"admintest1234@xxx.com"
},{
	"id": 1,
	"name": "岩井顕子",
	"role": "recruiter",
	"userid": "recruiter",
	"password": "recruiter",
	"profimg":"../img/DDL/user_01.jpg",
	"profile":"充分に貢献できるか自信はありませんが、一生懸命がんばりたいと思います。",
	"office":"富士通株式会社",
	"department":"開発技術部",
	"affiliation":"企業",
	"address":"茨城県東茨城郡富士通町1-1-1",
	"capital":"100万コイン",
	"employee":"50人",
	"tell":"080-1234-xxxx",
	"mail":"recruitertest@×××.com"

},{
	"id": 2,
	"name": "内村順",
	"role": "volunteer",
	"userid": "volunteer",
	"password": "volunteer",
	"profimg":"../img/DDL/user_03.jpg",
	"skill":[1,2],
	"project":"通訳",
	"field":"通訳",
	"experience":"2年",
	"language":"英語、フランス語",
	"qualification":"英検準1級、普通自動車免許(MT可)、基本情報技術者処理試験",
	"appeal":"何事にも一生懸命",
	"affiliation":"企業",
	"office":"富士通株式会社",
	"department":"開発技術部",
	"address":"茨城県東茨城郡富士通町1-1-1",
	"tell":"080-1234-xxxx",
	"mail":"volunteertest@×××.com"
}
];

var jobData = [{
  "//":"項目説明",
  "//":"skill : 1.特許調査 2.学術文献 3.その他",
  "//":"flg : 0.終了 1.未応募 2.作業予定 3.募集期限終了 4,応募中 5,調査依頼"
},{
"id":1,
"client":1,
"jobname":"留学生相手のボランティア",
"type":"通訳-英語",
"detail":"留学生を相手に通訳ボランティアをお願いします。",
"skill":"1",
"img":"../img/DDL/8396_0008.jpg",
"flg":2,
"worker":[2,4,6]
},{
"id":2,
"client":1,
"jobname":"パラリンピックスポーツ体験会スタッフ募集",
"type":"通訳-英語",
"detail":"通訳のボランティアをお願いします。",
"skill":"1",
"img":"../img/DDL/8396_0011.jpg",
"flg":1,
"worker":[1,2]
},{
"id":3,
"client":1,
"jobname":"オリンピックスポーツ体験会スタッフ募集",
"type":"通訳-英語",
"detail":"英語通訳をしていただける日本人スタッフを急募しています！",
"skill":"2",
"img":"../img/DDL/8396_0015.jpg",
"flg":0,
"worker":[2]
},{
"id":4,
"client":1,
"jobname":"富士通川沿いのごみゼロ運動",
"type":"ごみゼロ運動",
"detail":"富士通川沿いのごみをなくし、きれいにしましょう！",
"skill":"3",
"img":"../img/job4.jpg",
"flg":3,
"worker":""
},{
"id":5,
"client":1,
"jobname":"オリンピックスポーツ体験会スタッフ募集2",
"type":"通訳-英語",
"detail":"オリンピックスポーツ体験会での通訳をお願いします。",
"skill":"3",
"img":"../img/DDL/8396_0015.jpg",
"flg":4,
"worker":""
},{
"id":6,
"client":1,
"jobname":"富士通市の農作業のお手伝い",
"type":"農作業",
"detail":"農作業者の不足する富士通市での農作業のお手伝いとなります。",
"skill":"3",
"img":"../img/job6.jpg",
"flg":5,
"worker":""
},{
"id":7,
"client":1,
"jobname":"オリンピックスポーツ体験会スタッフ募集",
"type":"特許調査-技術動向調査",
"detail":"オリンピックスポーツ体験会での通訳をお願いします。",
"skill":"1",
"img":"../img/job7.jpg",
"flg":3,
"worker":2
},{
"id":8,
"client":1,
"jobname":"オリンピックスポーツ体験会スタッフ募集2",
"type":"特許調査-技術動向調査",
"detail":"オリンピックスポーツ体験会での通訳をお願いします。",
"skill":"1",
"img":"../img/DDL/8696_0113.jpg",
"flg":1,
"worker":""
}
];

function getJSON(target, callback) {
  if (target.match(/user.json/)) {
    if(callback){
      callback(userData);
    } else {
      return userData;
    }
  } else if (target.match(/job.json/)) {
    if(callback){
      callback(jobData);
    } else {
      return jobData;
    }
  } else {
    callback(null);
  }
}
