const btn = document.querySelector(".btn")

let toggle = false
const myArray = [3, 4, 5, 6, 7]
const audio = new Audio('./ReadyGo.m4a');

btn.onclick = () => {
  if (toggle === false) {
    btn.innerHTML = 'stop'
    btn.classList.add('btn_stop')
    toggle = true
    audio.play()
    readyGo()
  } else {
    btn.innerHTML = 'start'
    btn.classList.remove('btn_stop')
    toggle = false
  }
}

function readyGo(arrow) {
  const randTime = randomArrayElement(myArray)

  if (toggle === true) {
    setTimeout(() => {
      audio.play()
      readyGo()
    }, randTime * 1000)
  }
}

function randomArrayElement(array) {
  return array[Math.floor(Math.random() * array.length)];
}