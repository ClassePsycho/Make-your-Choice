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
    $(".page2b").delay(550).fadeIn(3500);
    $(".page2b").fadeOut(2000);
    $(".page2c").delay(5550).fadeIn(3500).delay(7000);
    $(".page2c").fadeOut(2000);
    $(".page2dchoice").delay(17500).fadeIn(3500).delay(4500);
    $(".page2buttons").fadeIn(3500);
});
/*page 3-1*/

$(".checkyourpockets").click(function() {
  $(".page2dchoice").delay(600).fadeOut(2000);
  $(".page3a-1").delay(5000).fadeIn(3500).delay(3500).fadeOut(2000);
  $(".page3b-1choices").delay(14000).fadeIn(3500);
});
/*A Nightmares are the hell that wait*/

/*lighmatchs*/
$(".lightmatches").click(function() {
  $(".page3b-1choices").delay(600).fadeOut(2000);
  $(".page4a-lightmatches").delay(5000).fadeIn(3500).delay(4500).fadeOut(2000);
  $(".walldeath").delay(15000).fadeIn(3500).delay(3500).fadeOut(2000);
  $(".death").delay(28000).fadeIn(3500);
 });
/*Looks like someone else wanted a snack too.*/
$(".eattrailmix").click(function() {
  $(".page3b-1choices").delay(600).fadeOut(2000);
  $(".eattrailmixend").delay(5000).fadeIn(3500).delay(4500).fadeOut(2000);
  $(".caretoshare").delay(15000).fadeIn(3500).delay(4500).fadeOut(2000);
  $(".death").delay(28500).fadeIn(3500);
});
/* Time is always ticking*/
$(".checkknife").click(function() {
  $(".page3b-1choices").delay(600).fadeOut(2000);
  $(".youtooktolong").delay(5000).fadeIn(3500).delay(4500).fadeOut(2000);
  $(".gottolovebeinglate").delay(15000).fadeIn(3500).delay(4500).fadeOut(2000);
  $(".latemuch").delay(25000).fadeIn(3500).delay(4500).fadeOut(2000);
  $(".wake").delay(36000).fadeIn(3500);
});
/*hell is great*/
$(".gobacktosleep").click(function() {
  $(".page2dchoice").delay(600).fadeOut(2000);
  $(".youdied3yearsago").delay(5000).fadeIn(3500).delay(3500).fadeOut(2000);
  $(".wake").delay(14000).fadeIn(3500);
});
$(".sleepagain").click(function() {
  $(".wake").delay(600).fadeOut(2000);
  $(".start").delay(5000).fadeIn(3500);
});
$(".tryagain").click(function() {
  $(".death").delay(600).fadeOut(2000);
  $(".start").delay(5000).fadeIn(3500);
});



