window.onload = function(){
  // dom elements
  const tabs = document.querySelectorAll('.tab')
  const tabContents = document.querySelectorAll('.tabContent')
  const darkModeSwitch = document.querySelector('#dark-mode-switch')

  const activateTab = tabnum => {
    tabs.forEach( tab => {
      tab.classList.remove('active')
    })
    tabContents.forEach( tabContent => {
      tabContent.classList.remove('active')
    })

    document.querySelector('#tab' + tabnum).classList.add('active')
    document.querySelector('#tabContent' + tabnum).classList.add('active')
    localStorage.setItem('jstabs-opentab', JSON.stringify(tabnum))
  }

  //add event listener
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      activateTab(tab.dataset.tab)
    })
  })

  darkModeSwitch.addEventListener('change',() => {
    document.querySelector('body').classList.toggle('darkmode')
    localStorage.setItem('jstabs-darkmode',JSON.stringify(!darkmode))
  })
  // retrive & store data
  let darkmode = JSON.parse(localStorage.getItem('jstabs-darkmode'))
  const openTab = JSON.parse(localStorage.getItem('jstabs-opentab')|| '1')
  
  if (darkmode === null) {
    darkmode = window.matchMedia("(prefers-color-scheme: dark)").matches // match to OS theme
  }
  if (darkmode) {
      document.querySelector('body').classList.add('darkmode')
      document.querySelector('#dark-mode-switch').checked = 'checked'
  }
  activateTab(openTab)
  // console.log(JSON.stringify(!darkmode))
  // tabs.forEach(tab =>{
  //   console.log(tab.dataset.tab)
  // })
}