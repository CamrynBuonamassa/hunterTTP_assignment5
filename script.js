let numRows = 1;
let numCols = 1;
let newColor = "pink";

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

var addCol = function(){
	var table = document.getElementById("table");
	for(let i = 0; i < numRows; i++){
		var row = table.rows[i];
		var cell = document.createElement("td");
		row.appendChild(cell);
	}
	numCols++;
}
document.getElementById("button2").addEventListener("click", addCol);

var removeRow = function(){
	var table = document.getElementById("table");
	table.deleteRow(0);
	numRows--;
}
document.getElementById("button3").addEventListener("click", removeRow);




