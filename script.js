let numRows = 1;
let numCols = 1;
let newColor = "pink";

var changeColor = function() {
    //console.log(this.style.backgroundColor);
    this.style.backgroundColor = newColor;
    console.log("changing color");
};
    
document.getElementsByTagName("td")[0].addEventListener("click", changeColor);

var addRow = function(){
	var table = document.getElementById("table");
	var row = document.createElement("tr");
	for(let i = 0; i < numCols; i++){
		var cell = document.createElement("td");
		cell.addEventListener("click", changeColor);
		row.appendChild(cell);
	}
	table.appendChild(row);
	numRows++;
};
document.getElementById("button1").addEventListener("click", addRow);

var addCol = function(){
	var table = document.getElementById("table");
	for(let i = 0; i < numRows; i++){
		var row = table.rows[i];
		var cell = document.createElement("td");
		cell.addEventListener("click", changeColor);
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

var removeCol = function(){
	var table = document.getElementById("table");
	for(let i = 0; i < numRows; i++){
		var row = table.rows[i];
		row.deleteCell(0);
	}
	numCols--;
}
document.getElementById("button4").addEventListener("click", removeCol);

var SelectNewColor = function(){
	newColor = document.getElementById("select").value	
}
document.getElementById("select").addEventListener("change", SelectNewColor);

var fillAll = function() {
    var elements = document.getElementsByTagName("td");
    for (var i = 0; i < elements.length; i++) {
	elements[i].style.backgroundColor = newColor;
    }
};
document.getElementById("fillbutton").addEventListener("click", fillAll);

var fillUncolored = function() {
    var elements = document.getElementsByTagName("td");
    for (var i = 0; i < elements.length; i++) {
	if (elements[i].style.backgroundColor == "") {
	    elements[i].style.backgroundColor = newColor;
	}
    }
};
document.getElementById("filluncoloredbutton").addEventListener("click", fillUncolored);