

const hour = document.querySelector("[hour-hand]")
const minute = document.querySelector("[minute-hand]")
const sec = document.querySelector("[second-hand]")

const setClock = () => {
    const date = new Date();
    const secondsRatio = date.getSeconds()/60
    const minutesRatio = (secondsRatio+date.getMinutes())/60
    const hoursRatio = (minutesRatio+date.getHours())/12

    setRotation(hour,hoursRatio)
    setRotation(minute,minutesRatio)
    setRotation(sec,secondsRatio)
    
}

const setRotation = (element, rotationRatio) => {
    element.style.setProperty("--rotation", rotationRatio*360)  
}

setInterval(setClock, 1000)
setClock()