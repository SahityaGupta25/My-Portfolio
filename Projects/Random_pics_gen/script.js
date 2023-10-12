const imageConatinerEl =document.querySelector(".image-container")
const btnEl = document.querySelector(".btn")
btnEl.addEventListener("click",()=>{
    addNewImages()
})

function addNewImages() {
    const newImageEl =  document.createElement("img")
    // Here we are creating element using this method

    newImageEl.src = `https://picsum.photos/300?random=${Math.floor(Math.random()*2000)}`
    // Here I will be calling this api to generate new image

    imageConatinerEl.appendChild(newImageEl)
}