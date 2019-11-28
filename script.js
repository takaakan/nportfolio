
$(function() {
 //スクロール

   $("#home-btn").click(function(){
     $("html,body").animate({"scrollTop":0}, 800);
   });

   $("#work-btn").click(function(){
     $("html,body").animate({scrollTop:$("#work").offset().top},800);
   });
  
   
   $("#contact-btn").click(function(){
     $("html,body").animate({scrollTop:$("#contact").offset().top},800);
   });
   

});
