function generate() {
    let quotes = {
        'Rosa Parks':'"I believe we are here on the planet Earth to live, grow up and do what we can to make this world a better place for all people to enjoy freedom."',
        'Oscar Wilde':'"To love oneself is the beginning of a lifelong romance."',
        'Etty Hillesum':'"Sometimes the most important thing in a whole day is the rest we take between two deep breaths."',
        'Anne Lamott':'"Almost everything will work again if you unplug it for a few minutes, including you."',
        'Bell Hooks':'"Knowing how to be solitary is central to the art of loving. When we can be alone, we can be with others without using them as a means of escape."',
        'Sahitya Gupta':'"Time you enjoy wasting is not wasted time."',
        'Lalah Delia':'"Self-care is how you take your power back."',
        'Lilly Pulitzer':'"Being happy never goes out of style."'
    }
    let authors = Object.keys(quotes) //It will return all the authors which are my keys
    let author = authors[Math.floor(Math.random() * authors.length)]
    let quote = quotes[author]

    document.getElementById('quote').innerHTML = quote
    document.getElementById('author').innerHTML = author
}

let i=0
function changecolor() {
    let colors = ["cyan","darkkhaki","red","darkcyan","pink","yellow","darkred","green","darkgreen","aqua","crimson","magenta"]

    document.getElementsByTagName('body')[0].style.background = colors[i++]
    if (i>colors.length-1){
        i=0
    }



}