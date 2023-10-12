let index = 0;
function changecolors() {

    let colors =["blue","orange","lightpink","magenta","purple","yellow","black","lightblue","green","red","silver","pink","grey"];

    document.getElementsByTagName("body")[0].style.background = colors[index++];
    if (index > colors.length-1) {
        index = 0

    }
}