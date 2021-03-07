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

$(document).ready(function(){
  $("#g1").click(function(){
    location.href = "html/archive.html";
  });
  $("#g2").click(function(){
    location.href = "html/archive.html";
  });
  $("#g3").click(function(){
    location.href = "html/archive.html";
  });
  $("#g4").click(function(){
    location.href = "html/archive.html";
  });
  $("#g5").click(function(){
    location.href = "html/archive.html";
  });
  $("#g6").click(function(){
    location.href = "html/archive.html";
  });
  $("#g7").click(function(){
    location.href = "html/archive.html";
  });
  $("#g8").click(function(){
    location.href = "html/archive.html";
  });
});
