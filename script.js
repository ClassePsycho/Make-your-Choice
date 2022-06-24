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
    $(".page2a").delay(500).fadeIn(3500);
    $(".page2a").fadeOut(2000);
    $(".page2b").delay(500).fadeIn(3500);
    $(".page2b").fadeOut(2000);
    $(".page2c").delay(5500).fadeIn(3500);


});