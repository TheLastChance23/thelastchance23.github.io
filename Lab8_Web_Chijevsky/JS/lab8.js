window.onload = function () 
{
	alert("Enter your Name");
	var prm = prompt();
	
	var cont1 = document.createElement('div');
	cont1.id = "cont1";
	
	var cont2 = document.createElement('div');
	cont2.id = "cont2";
	
	var cont3 = document.createElement('div');
	cont3.id = "cont3";
	
	var user = document.createElement('div');
	user.id = "user";
	user.append(prm);
	
	var comp = document.createElement('div');
	comp.id = "comp";
	
	var cmp = document.createTextNode("Computer");
	comp.append(cmp);
	
	
	var div1 = document.createElement('div');
	div1.id = "div1";
	var win1 = 0;
	div1.innerHTML = win1;
	
	var div2 = document.createElement('div');
	div2.id = "div2";
	var win2 = div2.innerHTML = 0;
	
	var div3 = document.createElement('div');
	div3.id = "div3";
	var score1 = [Math.floor(Math.random() * 10)];
	div3.innerHTML = score1;
	
	var div4 = document.createElement('div');
	div4.id = "div4";
	
	var btn = document.createElement('button');
	btn.type = "button";
	btn.id = "button";
	btn.innerHTML = "Generate";
	
	div4.appendChild(btn);
	
	var div5 = document.createElement('div');
	div5.id = "div5";
	var score2 = [Math.floor(Math.random() * 10)];
	div5.innerHTML = score2;
	
	if(score1 > score2)
		{
			win1 += 1;
			div1.innerHTML = win1;
		}
		else if(score1 < score2)
		{
			win2 += 1;
			div2.innerHTML = win2;
		}
		else 
		{
			
		}
	
	btn.onclick = function()
	{
		score1 = [Math.floor(Math.random() * 10)];
		div3.innerHTML = score1;
		
		score2 = [Math.floor(Math.random() * 10)];
		div5.innerHTML = score2;
		
		if(score1 > score2)
		{
			win1 += 1;
			div1.innerHTML = win1;
		}
		else if(score1 < score2)
		{
			win2 += 1;
			div2.innerHTML = win2;
		}
		else 
		{
			
		}
			if(win1 == 3)
			{
				alert(prm + " WON");
			}
			else if(win2 == 3)
			{
				alert("Computer WON");
			}
	}
	
	document.body.appendChild(cont1);
	document.body.appendChild(cont2);
	document.body.appendChild(cont3);
	cont1.appendChild(user);
	cont1.appendChild(comp);
	cont2.appendChild(div1);
	cont2.appendChild(div2);
	cont3.appendChild(div3);
	cont3.appendChild(div4);
	cont3.appendChild(div5);
}