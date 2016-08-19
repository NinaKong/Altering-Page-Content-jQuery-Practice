/*Nina Kong*/

$(document).ready(function() {
    $("#content2").wrap("<div style='color: #b37aa5'/>");
    $(".Content").wrapAll("<div style='border: 1px solid #b26c34'/>");
    $("#content4").empty();
    $("#content5").remove();
    $("#content6").detach();
    $('<p>Replace All jQuery</p>').replaceAll("#content1");

    $('#content3').replaceWith('<h1>H1 Replace</h1>');

    $('.Content p').replaceWith(replaceFunction);

    var windowHeight = $(window).height();
    var con = $(".Content");
    con.parentsUntil($("body")).css("height", windowHeight);
});
function replaceFunction() {
    if($(this).text().indexOf("jQuery") != -1) {
        return "<p>*** Function ***<p>";
    }
}