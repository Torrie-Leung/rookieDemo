var checklist = document.getElementById('checklist')
var items = checklist.querySelectorAll('li')

for(var i = 0; i < items.length; i++){
  items[i].addEventListener('click',editItem)
}

function editItem(){
  this.className = 'edit'
  var input = this.querySelector('input')
  input.focus()
  input.setSelectionRange(0,input.value.length);
}