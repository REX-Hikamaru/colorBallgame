$(document).ready(function () {
  console.log("ページ読み込み完了");

  $(".game-card").on("click", function () {
    $(this).addClass("clicked");
    setTimeout(() => {
      $(this).removeClass("clicked");
    }, 300);
  });

  $(".btn").on("click", function () {
    alert("ゲームページに移動します");
  });
});
