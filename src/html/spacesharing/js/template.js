function header() {

  var html = "";
  var title = "";
  var btn = "";
  var logoUrl = "";
  var url = window.location.href.match(".+/(.+?)([\?#;].*)?$")[1];

  switch (url) {
    case "living.html":
      // title = "訪問先を探す";
      btn += "<div class='temp-btn-div'><a href='../index.html' class='temp-btn'>";
      btn += "<input class='header-btn' type='button' value='TOP'>";
      btn += "</a></div>";
      logoUrl = "../img/fujitsu-shi-logo2.png";
      break;

    case "event.html":
      // title="イベントを探す";
      btn += "<div class='temp-btn-div'><a href='../index.html' class='temp-btn'>";
      btn += "<input class='header-btn'' type='button' value='TOP'>";
      btn += "</a></div>";
      logoUrl = "../img/fujitsu-shi-logo2.png";
      break;

      // 追加分ここから
    case "event_detail.html":
      // title = "イベントの詳細";
      btn += "<div class='temp-btn-div'><a class='temp-btn' href='javascript:void(0)' onclick='javascript:history.back()'>";
      btn += "<input class='header-btn'' type='button' value='戻る'>";
      btn += "</a></div>";
      logoUrl = "../img/fujitsu-shi-logo2.png";
      break;

    case "living_detail.html":
      // title = "宿泊先の詳細・予約";
      btn += "<div class='temp-btn-div'><a class='temp-btn' href='javascript:void(0)' onclick='javascript:history.back()'>";
      btn += "<input class='header-btn'' type='button' value='戻る'>";
      btn += "</a></div>";
      logoUrl = "../img/fujitsu-shi-logo2.png";
      break;
      // 追加分ここまで

    case "reservation_complete.html":
      // console.log('HEY');
      // title = "申し込み完了";
      btn += "<div class='temp-btn-div'><a class='temp-btn' href='javascript:void(0)' onclick='javascript:history.back()'>";
      btn += "<input class='header-btn'' type='button' value='戻る'>";
      btn += "</a></div>";
      logoUrl = "./img/fujitsu-shi-logo2.png";
      break;

    default:
      // title = "詳細・予約";
      btn += "<div class='temp-btn-div'><a class='temp-btn' href='javascript:void(0)' onclick='javascript:history.back()'>";
      btn += "<input class='header-btn'' type='button' value='戻る'>";
      btn += "</a></div>";
      logoUrl = "../img/fujitsu-shi-logo2.png";
  }
  title = "富士通市のイベントを探す"

  html += "<div class='temp-header'>";
  
  html += "<div class='header-title text-500'>";
  html += "<img src='"+ logoUrl +"' />";
  html += title;
  html += "</div>";
  // html += btn;
  html += "</div>";

  // if(url == "living.html" || url == "event.html"){
  //   html += "<div class='search-result-text text-400'>検索結果</div>";
  // }

  document.write(html);
}

function footer() {
  var html = "";
  html += "<div class ='footer'>";
  html += "<div class='text-400'>©2018 FUJITSU CITY</div>";
  html += "</div>";

  document.write(html);
}
