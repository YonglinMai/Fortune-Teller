
$(".submit").click(function(){
    var name = $(".name").val();
    var trial = $(".travels").val();
    var time = $(".time").val();
    $("p").text("congratulation! " + name + ", by the year 2050, you will have spent " + trial*time*365*31 + " minutes on the subway.");
});