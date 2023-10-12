window.addEventListener('load',time)
function time() {
    let date = new Date()
    let hours = date.getHours()
    let day = date.getDay()
    let minute = date.getMinutes()
    let ampm = hours >= 12 ? 'PM' : 'AM'
    let days = ["SUN","MON","TUE","WED","THU","FRI","SAT"]

    hours = hours %12
    hours = hours ? hours : 12;
    hours = hours < 10 ? '0' + hours : hours
    minute = minute < 10 ? '0' + minute : minute;

document.getElementById("day").innerHTML = days[day]
document.getElementById("hour").innerHTML = hours
document.getElementById("minute").innerHTML = minute
document.getElementById("ampm").innerHTML = ampm

    setTimeout(time,200)
}