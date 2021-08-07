const screens = document.querySelectorAll('.screen')

const choose_insect_btns = document.querySelectorAll('.choose_insect_btns')
const start_btn = document.querySelectorAll('.start_btn')
const game_container = document.querySelectorAll('.game_container')

const tiemEl = document.getElementById('time')
const scoreEl = document.getElementById('score')
const messageEl = document.getElementById('message')

let seconds = 0;
let score = 0;
let selected_insect = {};

start_btn.addEventListener('click',()=> screens[0].classList.add('up'))

choose_insect_btns.forEach(btn =>{
    btn.addEventListener('click', () =>{
        const img = btn.querySelector('img');
        const src = img.getAttribute('src');
        const alt = img.getAttribute('src');
        selected_insect = {src, alt}

        setTimeout(createInsect, 1000)
        startGame()
    })
})

function startGame() {
    setInterval(increaseTime, 1000)
}

function increaseTime() {
    let m = Math.floor(seconds / 60)
    let s = seconds & 60
    m = m < 10 ? `0${m}` : m
    s = s < 10 ? `0${s}` : seconds
timeEl.innerHTML = `Time: ${m}:${s}`
    seconds++
}

function createInsect() {
    const insect = document.createElement('div')
    insect.classList.add('insect')
    const {x,y} = getRandomLocation()
}