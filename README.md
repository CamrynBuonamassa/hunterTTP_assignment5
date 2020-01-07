# hunterTTP_assignment5
## by: Xing Tao Shi & Camryn Buonamassa

## As a user I can...
### add rows to the grid
```
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
```
### add columns to the grid
```
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
```
### remove rows from the grid
```
var removeRow = function(){
	var table = document.getElementById("table");
	table.deleteRow(0);
	numRows--;
};
document.getElementById("button3").addEventListener("click", removeRow);
```
### remove columns from the grid
```
var removeCol = function(){
	var table = document.getElementById("table");
	for(let i = 0; i < numRows; i++){
		var row = table.rows[i];
		row.deleteCell(0);
	}
	numCols--;
};
document.getElementById("button4").addEventListener("click", removeCol);
```
### select a color from a dropdown menu of colors
```
var SelectNewColor = function(){
	newColor = document.getElementById("select").value	
};
document.getElementById("select").addEventListener("change", SelectNewColor);
```
### click on a single cell, changing its color to the currently selected color
```
let newColor = "pink";

var changeColor = function() {
    this.style.backgroundColor = newColor;
};
document.getElementsByTagName("td")[0].addEventListener("click", changeColor);
```
### fill all uncolored cells with the currently selected color
```
var fillUncolored = function() {
    var elements = document.getElementsByTagName("td");
    for (var i = 0; i < elements.length; i++) {
	if (elements[i].style.backgroundColor == "") {
	    elements[i].style.backgroundColor = newColor;
	}
    }
};
document.getElementById("filluncoloredbutton").addEventListener("click", fillUncolored);
```
### fill all cells with the currently selected color
```
var fillAll = function() {
    var elements = document.getElementsByTagName("td");
    for (var i = 0; i < elements.length; i++) {
	elements[i].style.backgroundColor = newColor;
    }
};
document.getElementById("fillbutton").addEventListener("click", fillAll);
```
### clear all cells/restore all cells to their original/initial color
```
var clearAll = function() {
    var elements = document.getElementsByTagName("td");
    for (var i = 0; i < elements.length; i++) {
	elements[i].style.backgroundColor = "";
    }
};
document.getElementById("clearbutton").addEventListener("click", clearAll);
```
### click and hold (mouseover) from a single cell (start) to a different cell (end) such that all affected/hovered-over cells from start to end change to the currently selected color
```
let clicked = false;

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
```
