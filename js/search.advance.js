/****
* Author: Emmanuel Alcime
* 
*
*
***/

(function(){
	'use strict';
	var file = '/birds2.json';
	let searchListUL = document.getElementById("searchList");
	let birdCall = document.getElementById("currentBirds");
	var searchField = "name";
	var results = [];
	document.getElementById("search")
	.addEventListener("keyup",(e)=>{
		var handleSearch = function(query){
        for(var i = 0; i < query.length; i++){
        	 if(query[i].name == e.target.value){
               // searchListUL.innerHTML += "<li class='b_List'>"+"<div class='imgH'><img src='bird_imgs/"+query[i].img+"' alt='bird watch app'></div>"+"<div class='nameH'><h3>"+query[i].name+"</h3><span class='button_h'><button class='addToApi view-detail'>Add</button></span></div>"+"</li>";     
                results.push(query[i]);
                console.log(results);	    
        	 }

          }   
        };

		if(e.target.value.length > 0){
             searchListUL.style.display = "block";
             birdCall.style.display = "none";
             connection.getData("GET", file, handleSearch);

		}else if(e.target.value.length <= 0){
			  birdCall.style.display = "block";
             searchListUL.style.display = "none";
            
		}
	});
})()