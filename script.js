$(document).ready(function() {
    $("#hiddenPic").hide();
    $(".hooray").hide();
    });
$("button").click(function(){
    $("#secretMessage").append("Now double click here...");
    });
$("#secretMessage").dblclick(function(){
    $("#hiddenPic").show();
    $("#secretMessage").text("Touch the bird's eyes");
    });
$("#hiddenPic").hover(function(){
    $("#secretMessage").text("Perfect. You'll find your next clue by clicking on the treasure");
    });
$("#treasure").click(function(){
    $("body").css("background", "salmon");
    });
$("h1").click(function(){
    $("p").hide();
    $("img").hide();
    $("button").hide();
    $(".hooray").show();
    });
    
