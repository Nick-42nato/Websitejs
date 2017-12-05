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
//jscript code allows the boxes to show an image when clicked on//

function makeHover(e){
	e.classList.toggle("hover");
}


function makeNormal(e){
	e.classList.toggle("hover");
}
//enables the hover feature//

function showText1(elem){
	document.getElementById("box1").classList.toggle("tan");
	elem.innerHTML = "Neon Tetras";
}

function showText2(elem){
	document.getElementById("box2").classList.toggle("tan");
	elem.innerHTML = "Golden Tetras";
}

function showText3(elem){
	document.getElementById("box3").classList.toggle("tan");
	elem.innerHTML = "Blue Diamond Shrimp";
}

function showText4(elem){
	document.getElementById("box4").classList.toggle("tan");
	elem.innerHTML = "Mandarin Shrimp";
}

function showText5(elem){
	document.getElementById("box4").classList.toggle("tan");
	elem.innerHTML = "Cherry Shrimp";
}

function showText6(elem){
	document.getElementById("box4").classList.toggle("tan");
	elem.innerHTML = "Crystal Shrimp";
}
//my try at showing text when you click on each box// 
//same as below//
function toggleBlueBackground(elem){
	document.getElementById("box1").classList.remove("opaque");
	document.getElementById("box2").classList.remove("opaque1");
	document.getElementById("box3").classList.remove("opaque2");
	document.getElementById("box4").classList.remove("opaque3");
	document.getElementById("box5").classList.remove("opaque4");
	document.getElementById("box6").classList.remove("opaque5");
	document.getElementById("box1").innerHTML = " ";
	document.getElementById("box2").innerHTML = " ";
	document.getElementById("box3").innerHTML = " ";
	document.getElementById("box4").innerHTML = " ";
	document.getElementById("box5").innerHTML = " ";
	document.getElementById("box6").innerHTML = " ";
}
