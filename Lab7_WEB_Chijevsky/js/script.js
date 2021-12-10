
window.onload = function () {
var div1 = document.createElement('div');
div1.className = "div1";

var input = document.createElement('input');
input.id = "input";
input.type = "text";
input.placeholder = "Ask me!";
div1.appendChild(input);

var button1 = document.createElement('button');
button1.className = "button";
button1.type = "submit";
button1.innerHTML = "Click me!";
button1.onclick = function()
{
	if(document.getElementById('input').value.length == 0)
	{
		alert("You have to ask something");
	}
	else
	{
		var answer = answers[Math.floor(Math.random() * answers.length)];
		div2.innerHTML = answer;
	}
}
  
div1.appendChild(input);
div1.appendChild(button1);
	

  
var div2 = document.createElement('div');
div2.className = "div2";


var answers = [ "There is a small chance:(", "Never", "I think so!", "Yes!", "Maybe..", "Of course!", "Likely", "Sorry, but NO", "No!", "Dmitry ADOPTED 100%"];


document.body.append(div2);
document.body.append(div1);
}