/****
* Author: Emmanuel Alcime
* 
*
*
***/
(function(){
	'use strict';
	var file = '/birds2.json';
    var handleSearch = function(query){
       
    };

	document.getElementById("search")
	.addEventListener("keyup",(e)=>{
		let searchListUL = document.getElementById("searchList");
		let birdCall = document.getElementById("currentBirds");
		if(e.target.value.length > 0){
             searchListUL.style.display = "block";
             birdCall.style.display = "none";
             ajax.getData("GET", file, handleSearch);

		}else if(e.target.value.length <= 0){
			  birdCall.style.display = "block";
             searchListUL.style.display = "none";
            
		}
	});
})()