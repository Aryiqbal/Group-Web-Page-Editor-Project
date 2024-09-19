// Bigger size of the picture once hovering
function bigImg(x) {
  x.style.height = "100px";
  x.style.width = "100px";
}

// Original size of the picture 
function normalImg(x) {
  x.style.height = "32px";
  x.style.width = "32px";
}

// To change background colour with onchange function

function background_color(value){
	document.body.style.backgroundColor=value;
}

// Had to put script at the end for this to finally work
document.getElementById('FontColorChoice').addEventListener('change', changeColor);
function changeColor() {
	 var color = document.getElementById('FontColorChoice').value;
	 var list = document.getElementsByTagName('p');
	  for (var i=0; i<list.length; i++) {
        list[i].style.color = color;
    }
}

// SVG
document.getElementById("groupId4").
    addEventListener("click", function(){
        document.location.href="ThumbnailImages.html";
});
document.getElementById("groupdId").
    addEventListener("click", function(){
        document.location.href="";
        
});