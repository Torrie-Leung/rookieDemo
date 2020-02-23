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

  const openTab = JSON.parse(localStorage.getItem('jstabs-opentab')|| '1')
  activateTab(openTab)
  // tabs.forEach(tab =>{
  //   console.log(tab.dataset.tab)
  // })
}