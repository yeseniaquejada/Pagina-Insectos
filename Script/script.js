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