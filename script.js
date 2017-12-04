function makeOpaque(e){
	e.classList.toggle("opaque");
	elem.innerHTML = "Neon Tetras";
}

function makeOpaque1(e){
	e.classList.toggle("opaque1");
	elem.innerHTML = "Golden tetras";
}

function makeOpaque2(e){
	e.classList.toggle("opaque2");
	elem.innerHTML = "Diamond Blue Shrimp";
}

function makeOpaque3(e){
	e.classList.toggle("opaque3");
	elem.innerHTML = "Mandarin Shrimp";
}

function makeOpaque4(e){
	e.classList.toggle("opaque4");
	elem.innerHTML = "Cherry Shrimp";
}

function makeOpaque5(e){
	e.classList.toggle("opaque5");
	elem.innerHTML = "Crystal red Shrimp";
}

function makeHover(e){
	e.classList.toggle("hover");
}
function makeNormal(e){
	e.classList.toggle("hover");
}

function toggleBlueBackground(elem){
	document.getElementById("box1").classList.remove("tan");
	document.getElementById("box2").classList.remove("tan");
	document.getElementById("box3").classList.remove("tan");
	document.getElementById("box4").classList.remove("tan");
	document.getElementById("box1").innerHTML = " ";
	document.getElementById("box2").innerHTML = " ";
	document.getElementById("box3").innerHTML = " ";
	document.getElementById("box4").innerHTML = " ";
}
