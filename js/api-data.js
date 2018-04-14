
var i,
    dataContainer = document.getElementsByClassName("boxes");
var apiExample = {};
apiExample._createBindings = function(dataContainer){
   var details =  dataContainer.getElementsByClassName("view-details")[0];
   var dataInfo = dataContainer.getElementsByClassName("info-data")[0];
   details.addEventListener("click",(e)=>{
   	 var evt = e.target || window.event;
   	 //var tar = e.target || e.srcElement;
     
   });
};
apiExample._init = function(){
  for(i = 0; i < dataContainer.length; i++ ){
	  this._createBindings(dataContainer[i]);
  }
}; 


