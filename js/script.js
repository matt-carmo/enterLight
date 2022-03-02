$('.carrosel').slick({
      arrows: true,
      autoplay: true,
      autoplaySpeed
: 2000,
arrows: false
});

const url = document.querySelector('.url')
const buttonSend = document.querySelector('.button-send')
const imgWeb = document.querySelector('.img-web')
const name = document.querySelector('.name')
buttonSend.addEventListener('click', () => {
      imgWeb.innerHTML = ` 

      <div class="img-web">
      <h3>${name.value}</h3>
      <img src ="${url.value}">

</div>`
})