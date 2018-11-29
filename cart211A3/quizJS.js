// JavaScript Document
var index = 1;
function yes(){
	document.getElementById("s2").style.transform = "translate(0%)"; 
}
function no(){
	document.getElementById("s3").style.transform = "translate(0%)";
}
function next(){
	document.getElementById("s2").style.transform = "translate(-100%)";
	document.getElementById("s3").style.transform = "translate(100%)";
}
function yes1(){
	document.getElementById("s6").style.transform = "translateY(-100%)"; 
	document.getElementById("s6").style.zIndex = index;
	index = index +1;
}
function no1(){
	document.getElementById("s7").style.transform = "translateY(-100%)";
	document.getElementById("s7").style.zIndex = index;
	index = index +1;
}
function next1(){
	document.getElementById("s6").style.transform = "translateY(100%)"; 
	document.getElementById("s7").style.transform = "translateY(100%)"; 	
}