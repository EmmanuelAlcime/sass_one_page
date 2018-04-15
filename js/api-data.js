/*
* AUTHOR: Emmanuel Alcime
* DATE: 04/14/2018
* URI: emmanuelalcime.github.io/personal_page
*/



var dataContainer = document.getElementsByClassName("boxes");
var dataDiv = document.getElementsByClassName("info-data");
var apiExample = {};
apiExample._createBindings = function(dataContainer, dataDiv){
   var details =  dataContainer.getElementsByClassName("view-details")[0];
   var dataInfo = dataContainer.getElementsByClassName("info-data")[0];
   var closeButton = dataDiv.getElementsByClassName("closeButton")[0];
   details.addEventListener("click",(e)=>{
   	   openCode(e, dataInfo);
   });
   closeButton.addEventListener("click",(e)=>{
   	    closeBox(e, dataInfo);
   });
};

apiExample._init = function(){
  for(var i = 0; i < dataContainer.length; i++ ){
	  this._createBindings(dataContainer[i],dataDiv[i]);
  }
}; 
apiExample._init();

function openCode(e, dataInfo){
  // check to see if any other div is open 
  dataInfo.style.display = "block"; // code example into view 
}

function closeBox(e, dataInfo){
   dataInfo.style.display = "none"; // code example into view 
}// close a certain box when called


