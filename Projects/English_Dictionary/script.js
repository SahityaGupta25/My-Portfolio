const inputEl = document.getElementById("input");
const infoTextEl =document.getElementById("info-text"); 
const meaningContainerEl =document.getElementById("meaning-container")
const titleEl = document.getElementById("title")
const meaningEl = document.getElementById("meaning")
const audioEL =document.getElementById("audio")


async function fetchAPI(word) {
try {
    infoTextEl.style.display ="block";
    infoTextEl.innerText = `Searching the Meaning of "${word}" `
    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`

    // fetch url variable and then wait for response for that I have used res. 'res' means The res object represents the HTTP response that an Express app sends when it gets an HTTP request.At the end just covert that response to JSON   
    const result = await fetch(url).then((res)=>res.json())
    // innertext means we are targeting the text of the element which is written in HTML 
    
    
    if (result.title)//It means word is not correct 
    {
        
        infoTextEl.style.display = 'none'
        meaningContainerEl.style.display ='block'
        titleEl.innerText = word
        meaningEl.innerText = "N/A"
        audioEL.style.display = "none"
    }else{

        infoTextEl.style.display = 'none'
        meaningContainerEl.style.display ='block'
        titleEl.innerText = result[0].word
        meaningEl.innerText = result[0].meanings[0].definitions[0].definition
        audioEL.src = result[0].phonetics[0].audio;
    }
        
    
    
    
} catch (error) {
    
}
}

inputEl.addEventListener("keyup",(e)=>{
// if (Input box in the html has some value or not and at the same time key pressed is enter)
    if (e.target.value && e.key === "Enter") {
        fetchAPI(e.target.value)
    }
    // console.log(e.target.value); prints value in the console that user has entered.
    // console.log(e.key); It will show the keys which user is entering in the Input. 
})