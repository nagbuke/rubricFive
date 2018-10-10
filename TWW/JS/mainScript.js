//JavaScript Document

var tabButtons = document.querySelectorAll(".tabContainer .btnContainer button");
var tabPanels = document.querySelectorAll(".tabContainer .tabPanel");

function showPanel(panelIndex,colorCode) {
	"use strict";
	tabButtons.forEach(function(node){
		node.style.backgroundColor = "";
		node.style.color = "";
	});
	tabButtons[panelIndex].style.backgroundColor = colorCode;
	tabButtons[panelIndex].style.color = "white";
	
	tabButtons.forEach(function(node){
		node.style.display ="none";
		
	});
	tabPanels[panelIndex].style.display = "block";
	tabPanels[panelIndex].style.backgroundColor = colorCode;
}

showPanel(0, '#f44336');
