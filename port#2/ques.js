const buttonTitle = "入力";
document.getElementById("job").textContent = buttonTitle;

const checkJob = document.getElementsByTagName("input");
window.addEventListener("change",checkboxStatus,false); 

function checkboxStatus(){
if (this.checked){
  jobForm.textContent = document.getElementsByTagName("input").value;
}else{
  jobForm.textContent = "";
}
}