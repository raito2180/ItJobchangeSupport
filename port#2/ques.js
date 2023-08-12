const buttonTitle = "入力";
document.getElementById("job").textContent = buttonTitle;



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