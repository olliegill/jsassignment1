document.getElementById("update-button").onclick = function() {
var thimbles =document.getElementById("thimbles").value;
var swords = document.getElementById("swords").value;
var x = Number(thimbles);
var y = Number(swords)*37;
var totalSum = (x + y);

document.getElementById("the-total").textContent = totalSum;


};
