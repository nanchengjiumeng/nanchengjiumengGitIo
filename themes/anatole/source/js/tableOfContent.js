$(function($){
   $toggleBtn =  $("button.navbar-toggle");
   let targetId = $($toggleBtn).attr("data-target")
   let $target = $(targetId);
   
   if($target.css("display")==="block"){
        $toggleBtn.addClass("opened")
   }
   $toggleBtn.on("click",function(e){
       if($toggleBtn.hasClass("opened")){
           $target.css("display","none")
           $toggleBtn.removeClass("opened")
        }else{
           $target.css("display","block")            
           $toggleBtn.addClass("opened")
        }
   })
   $target.on("click",function(e){
        $target.css("display","none")
        $toggleBtn.removeClass("opened")
   })
})