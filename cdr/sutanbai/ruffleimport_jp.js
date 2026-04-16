//日本語swf用が「日本語対応ruffleエミュレーターに飛ばす必要が発生するかも・・だから。
//document.write('alert("来た")');
//
//これは、海外ruffleサイトが自動更新してくれるサイト
//document.write('<script src="https://unpkg.com/@ruffle-rs/ruffle"></script>');
//
//★これは、緑SM64さんが作ってくれた日本語対応ruffleへのリンク・・日本語対応ruffleについては、時々、エミュレーターのファイルを更新しないといけない。・・自動のリンクは無い。
//document.write('<script //src="https://sgstanino.github.io/sgsstudy/cdr/sutanbai/ruffle_jp/ruffle.js"></script>');
//ここまで★
//document.write('<script src="../sutanbai/ruffle_jp/ruffle.js"></script>');
//
//document.write('<script src="../ruffle/ruffle.js"></script>');
//
//Claudeのアドバイスによるもの⇓
(function() {
  var s = document.createElement('script');
  s.src = 'https://sgstanino.github.io/sgsstudy/cdr/sutanbai/ruffle_jp/ruffle.js';
  document.head.appendChild(s);
})();

