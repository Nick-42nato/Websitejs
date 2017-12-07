function makeOpaque(e){
	e.classList.toggle("opaque");
	document.getElementById("neonText").classList.toggle("txt-hide");
}

function makeOpaque1(e){
	e.classList.toggle("opaque1");
	document.getElementById("neonText").classList.toggle("txt-hide");
}

function makeOpaque2(e){
	e.classList.toggle("opaque2");
	document.getElementById("neonText").classList.toggle("txt-hide");
}

function makeOpaque3(e){
	e.classList.toggle("opaque3");
	document.getElementById("neonText").classList.toggle("txt-hide");
}

function makeOpaque4(e){
	e.classList.toggle("opaque4");
	document.getElementById("neonText").classList.toggle("txt-hide");
}

function makeOpaque5(e){
	e.classList.toggle("opaque5");
	document.getElementById("neonText").classList.toggle("txt-hide");
}
//jscript code allows the boxes to show an image when clicked on//

function makeHover(e){
	e.classList.toggle("hover");
}


function makeNormal(e){
	e.classList.toggle("hover");
}
//enables the hover feature//


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
