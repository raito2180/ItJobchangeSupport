const btnTitle = ["目標再設定","印刷","保存","戻る"];
const $button = document.getElementsByTagName("button");

//ボタン名を反映
let btnIndex = 0;
while (btnIndex < btnTitle.length){
  $button[btnIndex].textContent = btnTitle[btnIndex];
  btnIndex++;
}

//ques.htmlを別ウィンドウに呼び出す関数を定義
const questionJob = () => {
  window.open("ques.html");
}
//目標再設定を押したときにquestion関数を呼び出す
  $button[0].addEventListener ("click",e => {
    questionJob(e);
  }) 

//印刷を押したときに印刷画面を呼び出す
  $button[1].addEventListener ("click",e => {
    window.print(e);
  }) 

//戻るを押したときにTop画面に戻る
  $button[3].addEventListener ("click",e => {
  window.history.back(e);
}) 