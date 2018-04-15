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
  var infoWin = document.getElementsByClassName("info-data");
  for(var j = 0; j < infoWin.length; j++){
  	 if(infoWin[j].getAttribute("style")){
  	 	toggleDisplay(infoWin[j]); // close existing window
  	 	infoWin[j].removeAttribute("style"); // remove style attribute from current open window
  	 }
  }
  dataInfo.style.display = "block"; // open new window 
}
function closeBox(e, dataInfo){
   dataInfo.style.display = "none"; // code example into view 
   if(dataInfo.getAttribute("style")){
      dataInfo.removeAttribute("style"); // we need to clear the style attribute when we close the window.
   }
}// close a certain box when called

 function toggleDisplay(elementID)
    {
        (function(style) {
            style.display = style.display === 'block' ? 'none' : 'block';
        })(elementID.style);
    }