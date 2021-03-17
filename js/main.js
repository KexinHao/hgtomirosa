window.addEventListener(
  "scroll",
  () => {
    document.body.style.setProperty(
      "--scroll",
      window.pageYOffset / (document.body.offsetHeight - window.innerHeight)
    );
  },
  false
);


$(function(){


     $('.name').click(function(){
         $('#info-' + $(this).attr('id')).toggle();
        });


    $("#g1").click(function(){
      location.href = "archive/case-study.html";
    });
    $("#g2").click(function(){
      location.href = "archive/the-handshake.html";
    });
    $("#g3").click(function(){
      location.href = "about.html";
    });
    $("#g4").click(function(){
      location.href = "archive/case-study.html";
    });
    $("#g5").click(function(){
      location.href = "archive/case-study.html";
    });
    $("#g6").click(function(){
      location.href = "archive/case-study.html";
    });
    $("#g7").click(function(){
      location.href = "archive/case-study.html";
    });
    $("#g8").click(function(){
      location.href = "archive/rock-talks.html";
    });
    $("#g9").click(function(){
      location.href = "archive/wide-angle-on-happy-valley.html";
    });
    $("#g10").click(function(){
      location.href = "archive/what-do-you-think-of-my-drawings.html";
    });

   })
