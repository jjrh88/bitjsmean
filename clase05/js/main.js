
$(document).ready(()=>{
   showHide() 
   showHidefocus()
   showHideIconBack()
})

function showHidefocus(){
  $(".search").click(()=>{
    $(".list-content-friends").show("slow");
  })
}

function showHideIconBack(){
  $(".icon-back").click(function(){
    $(".list-content-friends").hide("slow");
  })
}

function showHide(){
 $(".show").click(()=>{
   $(".list-content").slideToggle( "fadeIn" ).slow();
 })
}

