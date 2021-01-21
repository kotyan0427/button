// ボタンの取得
const form = document.forms.form;
const firstButton = form.firstElementChild;
const lastButton = form.lastElementChild;


// インクリメント関数
const increment = () => {
  let count = 0;

  let innerIncrement = () => {
    return ++count;
  }
  return innerIncrement;
}

// デクリメント関数
const decrement = () => {
  let count = 0;

  let innerDecrement = () => {
    return --count;
  }
  return innerDecrement;
}

// 継承
const extendsIncrement = increment();
const extendsDecrement = decrement();

// イベントの設定
firstButton.addEventListener('click',function (e) {
  e.preventDefault();
  firstButton.innerText = `count:${extendsIncrement()}`;
})
lastButton.addEventListener('click', function (e) {
  e.preventDefault();
  lastButton.innerText = `count:${extendsDecrement()}`;
})
