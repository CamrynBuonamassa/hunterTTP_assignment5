let numRows = 1;
let numCols = 1;
let newColor = "pink";
let clicked = false;

var changeColor = function() {
    this.style.backgroundColor = newColor;
};
document.getElementsByTagName("td")[0].addEventListener("click", changeColor);

var mouseUp = function() {
    clicked = false;
};

var mouseDown = function() {
    clicked = true;
    this.style.backgroundColor = newColor;
};

var hovering = function() {
    if (clicked) {
	this.style.backgroundColor = newColor;
    }
};

document.getElementsByTagName("td")[0].addEventListener("mouseup", mouseUp);
document.getElementsByTagName("td")[0].addEventListener("mousedown", mouseDown);
document.getElementsByTagName("td")[0].addEventListener("mouseover", hovering);

var addRow = function(){
	var table = document.getElementById("table");
	var row = document.createElement("tr");
	for(let i = 0; i < numCols; i++){
		var cell = document.createElement("td");
		cell.addEventListener("click", changeColor);
		cell.addEventListener("mouseup", mouseUp);
		cell.addEventListener("mousedown", mouseDown);
		cell.addEventListener("mouseover", hovering);
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
		cell.addEventListener("mouseup", mouseUp);
		cell.addEventListener("mousedown", mouseDown);
		cell.addEventListener("mouseover", hovering);
		row.appendChild(cell);
	}
	numCols++;
};
document.getElementById("button2").addEventListener("click", addCol);

var removeRow = function(){
	var table = document.getElementById("table");
	table.deleteRow(0);
	numRows--;
};
document.getElementById("button3").addEventListener("click", removeRow);

var removeCol = function(){
	var table = document.getElementById("table");
	for(let i = 0; i < numRows; i++){
		var row = table.rows[i];
		row.deleteCell(0);
	}
	numCols--;
};
document.getElementById("button4").addEventListener("click", removeCol);

var SelectNewColor = function(){
	newColor = document.getElementById("select").value	
};
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

var clearAll = function() {
    var elements = document.getElementsByTagName("td");
    for (var i = 0; i < elements.length; i++) {
	elements[i].style.backgroundColor = "";
    }
};
document.getElementById("clearbutton").addEventListener("click", clearAll);
