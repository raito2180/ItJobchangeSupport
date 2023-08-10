//題名を反映
const ITtitle = "ITエンジニア転職支援システム";
document.getElementById("ITtensyoku").textContent = ITtitle;

const btnTitle = ["情報リスト作成","情報リスト管理"];
const $button = document.getElementsByTagName("button");

//ボタン名を反映
let btnIndex = 0;
while (btnIndex < btnTitle.length){
  $button[btnIndex].textContent = btnTitle[btnIndex];
  btnIndex++;
}




