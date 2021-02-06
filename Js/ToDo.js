var typed = new Typed('.blink', {
  strings: ["Eter your Todo", "Enter your TODO"],
  typeSpeed: 30
});

var add = document.getElementById("add");
var removeAll = document.getElementById("removeall");
var list = document.getElementById("list");

//remove all button

removeAll.onclick = function(){
	list.innerHTML = "";
}

//adding a new list element

add.onclick = function(){
	addlis(list);
	document.getElementById("userinput").value = "";
	document.getElementById("userinput").focus();
}

function addlis(targetUl){
	var inputText = document.getElementById("userinput").value;
	var li = document.createElement("li");
	var textNode = document.createTextNode(inputText + " ");
	var removeButton = document.createElement("button");
	
	
	if(inputText != ""){
		removeButton.className = "btn btn-xs btn-danger";
		removeButton.innerHTML = " &times; ";
		removeButton.setAttribute("onclick","removeMe(this)");
		
		li.appendChild(textNode);
		li.appendChild(removeButton);
		targetUl.appendChild(li);
	
	} else{
		alert("Please Enter a TODO");
	}
	

	
}

function removeMe(item){
	var p = item.parentElement;
	p.parentElement.removeChild(p);
}