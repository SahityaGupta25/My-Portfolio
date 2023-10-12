let h_5 = document.querySelector('h5');
let addf =document.getElementById('btn')
flag = 0

addf.addEventListener("click",function(){
    if (flag==0){
    h_5.innerHTML = "Request Sent"
    h_5.style.color = "green"
    addf.innerHTML ="Remove Friend"
    addf.style.backgroundColor = "red"
    flag =1
    }else{
        h_5.innerHTML = "Someone you may know"
        h_5.style.color = "red"
        addf.innerHTML ="Add Friend"
        addf.style.backgroundColor = "green"
        
        flag =0  
    }

})