let con = document.querySelector("#container")
let love = document.querySelector("i")

con.addEventListener("click",function(){
    love.style.transform = 'translate(-50%,-50%) scale(2)'
    setTimeout(function()  {
        love.style.transform = 'translate(-50%,-50%) scale(0)'
        
    }, 1000);
})

