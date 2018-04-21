(function(){
	'use strict';
 var uRl ='/birds2.json';
 var buttonsContainer = document.getElementsByClassName("button_h");
 var btnContainer = document.getElementsByClassName("button_b");
 var selected = document.getElementById("selectedB");
 var birdUList =document.getElementById("currentBirds");
 var added = [];
 var changer = {
 	_renderBirdList: function (data){
 		console.log("_renderBirdList function called.....");
		for(var i = 0; i < data.length; i++){
		    birdUList.innerHTML += "<li class='b_List'>"+"<div class='imgH'><img src='bird_imgs/"+data[i].img+"' alt='bird watch app'></div>"+"<div class='nameH'><h3>"+data[i].name+"</h3><span class='button_h'><button class='addToApi view-detail'>Add</button></span></div>"+"</li>";
		 }
      },
    _bindingDiv: function(buttonsContainer){
      console.log(" _bindingDiv function called ....");
      var _uL =  document.getElementById("currentBirds");
      var _addToList = buttonsContainer.getElementsByClassName("addToApi")[0];
      _addToList.addEventListener('click',(e)=>{
      	   var btn = e.target.parentNode;
      	   var _d = btn.parentNode;
      	   var _li = _d.parentNode;
       	   if(_uL.removeChild(_li)){
       	      e.target.innerHTML = "remove";
       	      if(e.target.parentNode.classList.contains("button_h")){
       	      	  e.target.parentNode.classList.remove("button_h");
       	      	  e.target.parentNode.classList.add("button_b");
       	      }
       	      if(e.target.classList.contains("view-detail")){
                  e.target.classList.remove('view-detail');
                  e.target.classList.add('remove-details');
       	      }
       	      var clone = _li.cloneNode(true);
      	      selected.appendChild(clone);
      	 }
       var _removeFromList = document.getElementsByClassName("remove-details");
       var _dnf  = document.getElementById("selectedB");
       if(_dnf.childNodes.length > 0 ){
       	 document.getElementById("selectedBirds").style.display = "block";
      	for(var k=0;k< _removeFromList.length; k++){
      	 _removeFromList[k].addEventListener("click",(e)=>{
     	    var _btn = e.target.parentNode;
      	    var _dd = _btn.parentNode;
      	    var _lii = _dd.parentNode;
       	    selected.removeChild(_lii);
       	    if(_dnf.childNodes.length  === 0 ){
               console.log(_dnf.length);
               document.getElementById("selectedBirds").style.display = "none";
               }      
            });
          }
        }
    });

 	},
 	_init: function() {
 	   console.log("initializing application ....");
 	   setTimeout((e)=>{
 	   	  for(let i=0; i< buttonsContainer.length; i++){
             this._bindingDiv(buttonsContainer[i]);
 	     }
 	   },4000); // wait before calling _bindingsDiv function
 	}
 };
ajax.getData("GET", uRl, changer._renderBirdList);
changer._init();

 
})(window);