let sortDirection = false;
let aceData = [
    {name:'Mario',level:230},
    {name:'Yoshi',level:2300},
    {name:'Toad',level:23},
    {name:'Luigi',level:23000}
];
window.onload = () => {
  loadTable(aceData);
}

function loadTable(aceData) {
  const tableBody = document.getElementById('tableData');
  let dataHtml = '';

  for(let ace of aceData){
    dataHtml += `<tr><td>${ace.name}</td><td>${ace.level}</td></tr>`;
  }
  //console.log(dataHtml)
  tableBody.innerHTML = dataHtml
}

function sortColumn(columnName) {
  const dataType = typeof aceData[0][columnName];
  
  sortDirection = !sortDirection;

  switch(dataType){
    
    case "number":
      sortNumberColumn(sortDirection,columnName);
      break
  }
  //console.log(aceData)
  loadTable(aceData)
}

function sortNumberColumn(sort,columnName) {
  aceData = aceData.sort((a1,a2) => {
    return sort ? a1[columnName] - a2[columnName]:a2[columnName] - a1[columnName]
  })
}