menu.onclick = function func() {
	var m = document.getElementById("mytopnav");
	
	if (m.className == "topnav") {
		m.className += " responsive";
		
	} else {
		m.className = "topnav";
	} 
}