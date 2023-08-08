const btnTitle = ["目標再設定","印刷","保存","戻る"];
const $button = document.getElementsByTagName("button");

//ボタン名を反映
let btnIndex = 0;
while (btnIndex < btnTitle.length){
  $button[btnIndex].textContent = btnTitle[btnIndex];
  btnIndex++;
}

//ques.htmlを別ウィンドウに呼び出す関数を定義
const question = () => {
  window.open("ques.html");
  console.log("ques.html");
  }

//情報リスト作成を押したときにquestion関数を呼び出す
  $button[0].addEventListener ("click",e => {
    question(e);
  }) 


