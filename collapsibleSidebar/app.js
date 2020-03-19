const socialShare = document.querySelector('.social_share')
const icons = document.querySelector('.icons')
socialShare.addEventListener('mouseover',function(){
  icons.classList.add('active')
})
socialShare.addEventListener('mouseout',function(){
  icons.classList.remove('active')
})
icons.addEventListener('mouseover',function(){
  icons.classList.add('active')
})
icons.addEventListener('mouseout',function(){
  icons.classList.remove('active')
})