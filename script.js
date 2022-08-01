let container = document.querySelector('.container')
let card = document.querySelector('.card')
let cardImg = document.querySelector('.card img')
let cardTitle = document.querySelector('.card .card-title')
let cardInfo = document.querySelector('.card p')
let cardBtn = document.querySelector('.card .cta-btn')


container.addEventListener('mousemove', (e) => {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 17
  let yAxis = (window.innerHeight / 2 - e.pageY) / 17


  card.style.transform = `rotateX(${yAxis}deg) rotateY(${xAxis}deg)`
  card.style.transition = "all ease .6s"

})

container.addEventListener('mouseenter', (e) => {
    cardImg.style.transform = " scale(1.07)  rotateZ(-2deg"
    cardTitle.style.transform = " scale(1.09))"
    cardInfo.style.transform = " scale(1.09) "
    cardBtn.style.transform = " scale(1.09) "


cardImg.style.transform = " scale(1.09)  rotateZ(-5deg)"

})
container.addEventListener('mouseleave', (e) => {
  card.style.transition = "all ease .6s"
  card.style.transform = " rotateX(0deg) "
  cardImg.style.transform = "  scale(.9) rotateZ(0deg)"
    cardTitle.style.transform = " scale(1) "
    cardInfo.style.transform = " scale(1) "
    cardBtn.style.transform = " scale(1) "
})
