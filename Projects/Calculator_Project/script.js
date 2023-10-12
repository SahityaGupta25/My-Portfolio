let string ="";
// What Query selector does is it will select all the elements in the html page who has class '.buttons'
let buttons = document.querySelectorAll('.button');

// Make Array from these buttons and apply For-Each 
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click',(e)=>{
         if ( e.target.innerHTML == '='){ 
            
            string = eval(string);
            document.querySelector('input').value = string;
        }
        else if ( e.target.innerHTML == 'C'){ 
            
            string = "";
            document.querySelector('input').value = string;
        }
        else{
            console.log(e.target)
            string = string + e.target.innerHTML;
            document.querySelector('input').value = string;

        }


    })
})