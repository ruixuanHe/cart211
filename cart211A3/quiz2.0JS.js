// JavaScript Document
function yes(){
	document.getElementById("yes").style.transform = "translate(0%)"; 
}
function no(){
	document.getElementById("no").style.transform = "translate(0%)";
}
function next(){
	document.getElementById("yes").style.transform = "translate(-100%)";
	document.getElementById("no").style.transform = "translate(100%)";
}