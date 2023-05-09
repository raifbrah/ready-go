const start = document.querySelector(".start")
const stop = document.querySelector(".stop")

let toggle = false
const myArray = [3000, 5000, 7000]
const audio = new Audio('./ReadyGo.m4a');

start.onclick = () => {
  toggle = true
  readyGo()
}

stop.onclick = () => {
  toggle = false
}

function readyGo(arrow) {
  const randTime = randomArrayElement(myArray)
    
  if (toggle === true) {
    setTimeout(() => {
      console.log(randTime)
      audio.play()
      readyGo()
    }, randTime)
  }
}

function randomArrayElement(array) {
  return array[Math.floor(Math.random() * array.length)];
}