let numRows = 1;
let numCols = 1;

var addRow = function(){
	var table = document.getElementById("table");
	var row = document.createElement("tr");
	for(let i = 0; i < numCols; i++){
		var cell = document.createElement("td");
		row.appendChild(cell);
	}
	table.appendChild(row);
	numRows++;
}
document.getElementById("button1").addEventListener("click", addRow);
