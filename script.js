// 指定範囲の中からランダムな整数を返す
function rnd(min, max) {
  return Math.floor(min + Math.random() * (max - min));
}

// el を (x1〜x2, y1〜y2) のランダムな位置へ移動する
function place(el, x1, x2, y1, y2) {
  el.style.left = rnd(x1, x2) + 'px';
  el.style.top  = rnd(y1, y2) + 'px';
}

// 蝶：画面の下40%（縦 314〜469px あたり）を、ゆっくり移動
document.querySelectorAll('.butterfly').forEach(function (el) {
  place(el, 0, 880, 314, 469);                                      // 初期位置
  el.addEventListener('mouseover', function () {
    place(el, 0, 880, 314, 469);
  });
});

// foo：(330,160)-(880,360) の範囲を、素早く移動
document.querySelectorAll('.foo').forEach(function (el) {
  place(el, 360, 850, 190, 320);                                    // 初期位置
  el.addEventListener('mouseover', function () {
    place(el, 360, 850, 190, 320);
  });
});
