(function(global){
  
  'use strict';
 
 var ajax = {
 
    createRequestObject: function(){
   var ajaxRequest; // The variable that makes Ajax possible!
  try{
       // Opera 8.0+, Firefox, Safari
      ajaxRequest = new XMLHttpRequest(); // Create the object
   }catch (e){
      // Internet Explorer Browsers
   try{
       ajaxRequest = new ActiveXObject("Msxml2.XMLHTTP");
  }
  catch(e){
     try{
       ajaxRequest = new ActiveXObject("Microsoft.XMLHTTP");
    }
catch (e){
    return false;
      } 
     }
    }
   return ajaxRequest;
  },

 getData: function(methodType,url,callback){
    var response;
    var request = this.createRequestObject();
    request.open(methodType, url, true);
    request.responseType = 'json';
    request.onreadystatechange = function(){
      if(request.readyState === 4 && request.status === 200){
         callback(request.response);
      }else{
        return false;
      }
    };
    request.send();
    console.log("request sent to server for processing....");
     }
  }; // ajax Object
     global.connection = ajax;

})(window);

