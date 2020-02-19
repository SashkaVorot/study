var N = 10;
var data = [];
var radio_div = document.createElement("div");
var radio_but = [];

for (let i = 0; i < N; i++){
	data[i] = i;

	radio_but[i] = document.createElement("div"); 
}

window.onload = function(){
	document.body.append(radio_div);

	var fix = 0;

	for (let i = 0; i < data.length; i++){
		radio_div.append(radio_but[i]);
		radio_but[i].innerHTML += data[i];
		radio_but[i].style.cursor = "pointer";
		radio_but[i].style.display = "inline-block";
		radio_but[i].style.margin = "2px";
	}

	for(let i = 0; i < data.length; i++){
		radio_but[i].onclick = function(){
			radio_but[fix].style.textDecoration = "none";
			radio_but[i].style.textDecoration = "underline";
			fix = i;
		}
	}
}