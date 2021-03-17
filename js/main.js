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
      location.href = "archive/casestudy.html";
    });
    $("#g2").click(function(){
      location.href = "archive/casestudy.html";
    });
    $("#g3").click(function(){
      location.href = "archive/casestudy.html";
    });
    $("#g4").click(function(){
      location.href = "archive/casestudy.html";
    });
    $("#g5").click(function(){
      location.href = "archive/casestudy.html";
    });
    $("#g6").click(function(){
      location.href = "archive/casestudy.html";
    });
    $("#g7").click(function(){
      location.href = "archive/casestudy.html";
    });
    $("#g8").click(function(){
      location.href = "archive/casestudy.html";
    });

   })
