$(document).ready(function() {
    $("#stream1_btn").on("click", function() {
        $(".stream1").removeClass('highlight_stream');
        $(".stream2").removeClass('highlight_stream');
        $(".stream3").removeClass('highlight_stream');
        $(".stream1").addClass('highlight_stream');
   });
   $("#stream2_btn").click(function() {
        $(".stream1").toggle();
        $(".stream1").slideDown(1000);
        $(".stream1").slideUp(1000);

        $(".stream2").show("slow");
        $(".stream3").hide();
        $(".stream3").hide("fast");
        $(".stream2").show(1000); //milisecond
   });
   $("#stream3_btn").on("click", function() {
        $(".stream1").removeClass('highlight_stream');
        $(".stream2").removeClass('highlight_stream');
        $(".stream3").removeClass('highlight_stream').addClass('highlight_stream'); //chaining
   });
}); 