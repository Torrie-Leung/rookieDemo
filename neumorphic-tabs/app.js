window.onload = function(){
  // dom elements
  const tabs = document.querySelectorAll('.tab')
  tabs.forEach(tab =>{
    console.log(tab.dataset)
  })
}