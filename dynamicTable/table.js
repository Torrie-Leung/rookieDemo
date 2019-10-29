let sortDirection = false;
let aceData = [
    {name:'Mario',level:230},
    {name:'Yoshi',level:2300},
    {name:'Toad',level:23},
    {name:'Luigi',level:23000}
];
loadTable(aceData);
function loadTable(aceData) {
  const tableBody = document.getElementById('tableData');
  let dataHtml = '';

  for(let ace of aceData){
    dataHtml += `<tr><td>${ace.name}</td><td>${ace.level}</td></tr>`;
  }
  console.log(dataHtml)
  tableBody.innerHTML = dataHtml
}