const btnTitle = ["目標再設定","印刷","保存","戻る","入力"];
const $button = document.getElementsByTagName("button");

//ボタン名を反映
let btnIndex = 0;
while (btnIndex < btnTitle.length){
  $button[btnIndex].textContent = btnTitle[btnIndex];
  btnIndex++;
}

//
function getValue(){
  const checkBusiness = document.getElementsByName("business");
  console.log(checkBusiness);
  for(i=0; i<checkBusiness.length; i++){
  if(checkBusiness[i].checked === true){
  businessForm.textContent = checkBusiness[i].value;
  }}
  const checkJob = document.getElementsByName("job");
  console.log(checkJob);
  for(i=0; i<checkJob.length; i++){
  if(checkJob[i].checked === true){
  jobForm.textContent = checkJob[i].value;
  }}
  }
//目標再設定を押したときにID:goalを呼び出す
$button[0].addEventListener ("click",e => {
  ques.classList.remove("hidden");
}) 

//印刷を押したときに印刷画面を呼び出す
$button[1].addEventListener ("click",e => {
  window.print(e);
}) 

//保存を押した時に情報を保存しておく

//戻るを押したときにTop画面に戻る
$button[3].addEventListener ("click",e => {
window.history.back(e);
}) 

//入力を押したときにgetValue関数を呼び出す
  $button[4].addEventListener ("click",e => {
  getValue(e);
  ques.classList.add("hidden");
}) 
