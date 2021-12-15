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
	
	var div4 = document.createElement('div');
	div4.id = "div4";
	
	var btn = document.createElement('button');
	btn.type = "button";
	btn.id = "button";
	btn.innerHTML = "Generate";
	btn.onclick = function()
	{
		var random1 = [Math.floor(Math.random() * 9)];
		var random2 = [Math.floor(Math.random() * 9)];
		
		div3.innerHTML = random1;
		div5.innerHTML = random2;
		
		///////
		if(random1 == 0)
		{
			div3.append(c6);
			win1 += 6;
			div1.innerHTML = win1;
		}
		
		else if(random1 == 1)
		{
			div3.append(c7);
			win1 += 7;
			div1.innerHTML = win1;
		}
		else if(random1 == 2)
		{
			div3.append(c8);
			win1 += 8;
			div1.innerHTML = win1;
		}
		else if(random1 == 3)
		{
			div3.append(c9);
			win1 += 9;
			div1.innerHTML = win1;
		}
		else if(random1 == 4)
		{
			div3.append(c10);
			win1 += 10;
			div1.innerHTML = win1;
		}
		else if(random1 == 5)
		{
			div3.append(c11);
			win1 += 2;
			div1.innerHTML = win1;
		}
		else if(random1 == 6)
		{
			div3.append(c12);
			win1 += 3;
			div1.innerHTML = win1;
		}
		else if(random1 == 7)
		{
			div3.append(c13);
			win1 += 4;
			div1.innerHTML = win1;
		}
		else if(random1 == 8)
		{
			div3.append(c14);
			win1 += 11;
			div1.innerHTML = win1;
		}
		
		////
		
		if (random2 == 0)
		{
			div5.append(cc6);
			win2 += 6;
			div2.innerHTML = win2;
			
		}
		else if(random2 == 1)
		{
			div5.append(cc7);
			win2 += 7;
			div2.innerHTML = win2;
		}
		else if(random2 == 2)
		{
			div5.append(cc8);
			win2 += 8;
			div2.innerHTML = win2;
		}
		else if(random2 == 3)
		{
			div5.append(cc9);
			win2 += 9;
			div2.innerHTML = win2;
		}
		else if(random2 == 4)
		{
			div5.append(cc10);
			win2 += 10;
			div2.innerHTML = win2;
		}
		else if(random2 == 5)
		{
			div5.append(cc11);
			win2 += 2;
			div2.innerHTML = win2;
		}
		else if(random2 == 6)
		{
			div5.append(cc12);
			win2 += 3;
			div2.innerHTML = win2;
		}
		else if(random2 == 7)
		{
			div5.append(cc13);
			win2 += 4;
			div2.innerHTML = win2;
		}
		else if(random2 == 8)
		{
			div5.append(cc14);
			win2 += 11;
			div2.innerHTML = win2;
		}
		
		////////
		
		if(win1 > 21 && win2 <= 21)
		{
			alert("Computer WON");
		}
		else if(win1 <= 21 && win2 > 21)
		{
			alert(prm + "WON");
		}
		
		else if(win1 == 21 && win2 != 21)
		{
			alert(prm + "WON");
		}
		else if(win1 != 21 && win2 == 21)
		{
			alert("Computer WON");
		}
		else if(win1 > 21 && win2 >  21)
		{
			alert("You both LOST");
		}
	}
	
	div4.appendChild(btn);
	
	var div5 = document.createElement('div');
	div5.id = "div5";
	
	var c6 = document.createElement('img');
	c6.src = "https://tvkoh.com/wp-content/uploads/2017/01/45.gif";
	
	var c7 = document.createElement('img');
	c7.src = "https://tvkoh.com/wp-content/uploads/2017/01/46.gif";
	
	var c8 = document.createElement('img');
	c8.src = "https://tvkoh.com/wp-content/uploads/2017/01/47.gif";
	
	var c9 = document.createElement('img');
	c9.src = "https://tvkoh.com/wp-content/uploads/2017/01/48.gif";
	
	var c10 = document.createElement('img');
	c10.src = "https://tvkoh.com/wp-content/uploads/2017/01/49.gif";
	
	var c11 = document.createElement('img');
	c11.src = "https://tvkoh.com/wp-content/uploads/2017/01/50.gif";
	
	var c12 = document.createElement('img');
	c12.src = "https://tvkoh.com/wp-content/uploads/2017/01/51.gif";
	
	var c13 = document.createElement('img');
	c13.src = "https://tvkoh.com/wp-content/uploads/2017/01/52.gif";
	
	var c14 = document.createElement('img');
	c14.src = "https://tvkoh.com/wp-content/uploads/2017/01/40.gif";
	
	////////////////
	
	var cc6 = document.createElement('img');
	cc6.src = "https://tvkoh.com/wp-content/uploads/2017/01/45.gif";
	
	var cc7 = document.createElement('img');
	cc7.src = "https://tvkoh.com/wp-content/uploads/2017/01/46.gif";
	
	var cc8 = document.createElement('img');
	cc8.src = "https://tvkoh.com/wp-content/uploads/2017/01/47.gif";
	
	var cc9 = document.createElement('img');
	cc9.src = "https://tvkoh.com/wp-content/uploads/2017/01/48.gif";
	
	var cc10 = document.createElement('img');
	cc10.src = "https://tvkoh.com/wp-content/uploads/2017/01/49.gif";
	
	var cc11 = document.createElement('img');
	cc11.src = "https://tvkoh.com/wp-content/uploads/2017/01/50.gif";
	
	var cc12 = document.createElement('img');
	cc12.src = "https://tvkoh.com/wp-content/uploads/2017/01/51.gif";
	
	var cc13 = document.createElement('img');
	cc13.src = "https://tvkoh.com/wp-content/uploads/2017/01/52.gif";
	
	var cc14 = document.createElement('img');
	cc14.src = "https://tvkoh.com/wp-content/uploads/2017/01/40.gif";
	
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
