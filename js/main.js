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

    $("#project1").click(function(){
      location.href = "archive/moving-in.html";
    });
    $("#project2").click(function(){
      location.href = "archive/the-handshake.html";
    });
    $("#project3").click(function(){
      location.href = "archive/what-do-you-think-of-my-drawings.html";
    });
    $("#project4").click(function(){
      location.href = "archive/rock-talks.html";
    });
    $("#project5").click(function(){
      location.href = "archive/case-study.html";
    });
    $("#project7").click(function(){
      location.href = "archive/wide-angle-on-happy-valley.html";
    });
    $("#footer-logo-backhome").click(function(){
      location.href = "../index.html";
    });

    $("#footer-logo").click(function(){
      location.href = "index.html";
    });
    $("#address").click(function(){
      location.href = "https://www.google.nl/maps/place/Hgtomi+Rosa/@52.0661852,4.3434077,17z/data=!3m1!4b1!4m5!3m4!1s0x47c5b77a8be9ceb5:0x8fac427fef4719d7!8m2!3d52.0661852!4d4.3455964";
    });
    $("#email").click(function(){
      location.href = "mailto:info@hgtomirosa.com";
    });
    $("#newsletter").click(function(){
      location.href = "https://mailchi.mp/eefd1ce474b1/subscribe-to-our-newsletter";
    });
    $("#instagram").click(function(){
      location.href = "https://www.instagram.com/hgtomi_rosa/";
    });
    $("#facebook").click(function(){
      location.href = "https://www.facebook.com/hgtomirosa";
    });

   })
