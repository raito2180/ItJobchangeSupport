const btnTitle = ["目標再設定","印刷","保存","呼出","戻る","入力"];
const $button = document.getElementsByTagName("button");

//ボタン名を反映
let btnIndex = 0;
while (btnIndex < btnTitle.length){
  $button[btnIndex].textContent = btnTitle[btnIndex];
  btnIndex++;
}

function getValue(){
  const checkBusiness = document.getElementsByName("business");
  
  //console.log(checkBusiness);
  
  for(i=0; i<checkBusiness.length; i++){
  if(checkBusiness[i].checked === true){
  businessForm.textContent ="希望業務形態:" + checkBusiness[i].value;
  }}
  const checkJob = document.getElementsByName("job");
  
  //console.log(checkJob);
  
  for(i=0; i<checkJob.length; i++){
  if(checkJob[i].checked === true){
  jobForm.textContent ="希望職種:" + checkJob[i].value;
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
$button[2].addEventListener ("click",e => {
  /*テキストのデータ呼び出しテスト
  console.log(document.getElementById("motive").value);*/
  let motiveData = document.getElementById("motive").value;
  let reasonData = document.getElementById("reason").value;
  let conditionData = document.getElementById("condition").value;
  let companyData = document.getElementById("company").value;
  let philosophyData = document.getElementById("philosophy").value;
  let absoluteConditionData = document.getElementById("absoluteCondition").value;
  let annualIncomeData = document.getElementById("annualIncome").value;
  let overtimeData = document.getElementById("overtime").value;
  let dataList = {
    text1:motiveData,
    text2:reasonData,
    text3:conditionData,
    text4:companyData,
    text5:philosophyData,
    text6:absoluteConditionData,
    text7:annualIncomeData,
    text8:overtimeData
  }
    window.localStorage.setItem("setdata",JSON.stringify(dataList));

  }) 

//呼び出しを押したときに格納していたstoragedataを呼び出す
$button[3].addEventListener ("click",e => {
  let getData = JSON.parse(window.localStorage.getItem("setdata"))
  console.log(getData);
  document.getElementById("motive").value = getData.text1;
  document.getElementById("reason").value = getData.text2;
  document.getElementById("condition").value = getData.text3;
  document.getElementById("company").value = getData.text4;
  document.getElementById("philosophy").value = getData.text5;
  document.getElementById("absoluteCondition").value = getData.text6;
  document.getElementById("annualIncome").value = getData.text7;
  document.getElementById("overtime").value = getData.text8;

  }) 

//戻るを押したときにTop画面に戻る
$button[4].addEventListener ("click",e => {
window.history.back(e);
}) 

//入力を押したときにgetValue関数を呼び出す
  $button[5].addEventListener ("click",e => {
  getValue(e);
  ques.classList.add("hidden");
}) 
