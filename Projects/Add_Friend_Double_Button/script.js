let istatus = document.querySelector("h5")

let addf = document.querySelector("#btn")

let removf =document.getElementById('btn2')

addf.addEventListener("click",function(){
      istatus.innerHTML = "Request Sent"
      istatus.style.color = "green"

})
removf.addEventListener("click",function(){
      istatus.innerHTML = "Someone you may know"
      istatus.style.color = "red"

})