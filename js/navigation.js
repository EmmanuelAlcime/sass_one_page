 var navbar = $("#header");
 var pos = navbar.offset().top; 
 var height = navbar.height();
    $(document).scroll(function(){
       var scrollTop = $(this).scrollTop();
       if(scrollTop > pos + height){
          navbar.addClass("fixed").animate({ top:0});
          console.log("fixed");  
          }else if(scrollTop <= pos){
              navbar.removeClass("fixed").clearQueue().animate({top:"-48px"},0);
              console.log("unfixed");
          } 
    });
