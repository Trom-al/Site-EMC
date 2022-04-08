function randint(min, max){
    return Math.floor(Math.random() * (max - min) + min);
}

function confetti_generation(color){
  if(color == 'green'){
    confetti_can = document.createElement('canvas')
    confetti_can.style.top = '-100%'
    confetti_can.style.transformOrigin = 'center'
    confetti_can.style.overflow = 'hidden'
    confetti_can.style.position = 'absolute'
    confetti_can.style.left = `${randint(-10, 100)}%`
    confetti_can.width = randint(20, 60)
    confetti_can.height = randint(10, 30)
    rotation = `rotate(${randint(0, 180)}deg)`
    confetti_can.style.backgroundColor = `hsl(120, 100%, ${randint(20, 80)}%)`
    confetti_can.animate([{transform: `${rotation}`, top: '-5%'}, {transform: `${rotation}`, top: '105%'}], {duration: randint(5000, 10000), iterations: 1});
    document.querySelector('#confetti_container').appendChild(confetti_can)
  }
  else {
    confetti_can = document.createElement('canvas')
    confetti_can.style.top = '-100%'
    confetti_can.style.transformOrigin = 'center'
    confetti_can.style.overflow = 'hidden'
    confetti_can.style.position = 'absolute'
    confetti_can.style.left = `${randint(-10, 100)}%`
    confetti_can.width = randint(20, 60)
    confetti_can.height = randint(10, 30)
    rotation = `rotate(${randint(0, 180)}deg)`
    confetti_can.style.backgroundColor = `hsl(0, 100%, ${randint(20, 80)}%)`
    confetti_can.animate([{transform: `${rotation}`, top: '-5%'}, {transform: `${rotation}`, top: '105%'}], {duration: randint(5000, 10000), iterations: 1});
    document.querySelector('#confetti_container').appendChild(confetti_can)
  }
}
