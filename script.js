/*Start Screen*/
$(".startingbuttons1").click(function() {
    $(".start").fadeOut(1000);

});
$("startingbuttons2").click(function() {
    $("about:blank").window.top.close();
});

/*End Start Screen*/

/*page 2*/
$(".startingbuttons1").click(function() {
    $(".page2a").fadeIn(5000);
    $(".page2a").fadeOut(2000);
    $(".page2b").fadeIn(15000);


});