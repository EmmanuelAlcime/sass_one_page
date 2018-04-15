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
   var triangle = dataContainer.getElementsByClassName("triangle")[0];
   details.addEventListener("click",(e)=>{
   	   openCode(e, dataInfo,triangle);
   });
   closeButton.addEventListener("click",(e)=>{
   	    closeBox(e, dataInfo, triangle);
   });
};
apiExample._init = function(){
  for(var i = 0; i < dataContainer.length; i++ ){
	  this._createBindings(dataContainer[i],dataDiv[i]);
  }
}; 
apiExample._init();
function openCode(e, dataInfo, triangle){
  // check to see if any other div is open 
  var infoWin = document.getElementsByClassName("info-data");
  var tri = document.getElementsByClassName("triangle");
  for(var j = 0; j < infoWin.length; j++){
  	 if(infoWin[j].getAttribute("style")){
  	 	toggleDisplay(infoWin[j]); // close existing window
      toggleDisplay(tri[j]);
  	 	infoWin[j].removeAttribute("style"); // remove style attribute from current open window
      tri[j].removeAttribute("style");
  	 }
  }
  dataInfo.style.display = "block"; // open new window 
  triangle.style.display = "block";
}
function closeBox(e, dataInfo, triangle){
   dataInfo.style.display = "none"; // code example into view 
   triangle.style.display = "none";
   if(dataInfo.getAttribute("style")){
      dataInfo.removeAttribute("style"); // we need to clear the style attribute when we close the window.
      triangle.removeAttribute("style");
   }
}// close a certain box when called

 function toggleDisplay(elementID)
    {
        (function(style) {
            style.display = style.display === 'block' ? 'none' : 'block';
        })(elementID.style);
    }