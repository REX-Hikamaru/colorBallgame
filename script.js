$(document).ready(function () {
    console.log("ページ読み込み完了");
  
    // ゲームカードクリックアニメーション
    $(".game-card").click(function () {
      $(this).addClass("clicked");
      setTimeout(() => {
        $(this).removeClass("clicked");
      }, 300);
    });
  
    // ダークモード切り替え (おまけ機能)
    $(".dark-mode-toggle").click(function () {
      $("body").toggleClass("dark-mode");
    });
  });
  