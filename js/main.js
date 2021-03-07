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

// var $mainDiv    = $('#logo-svg');
// var $sideChild  = $mainDiv.children('.cls-1');
// var leftOffset  = $mainDiv.position().left;
//
// $mainDiv.scroll(
//     function(){
//         $sideChild.css('left', '-' + leftOffset + 'px');
//     },
//     function(){
//          $sideChild.css('left', '0px');
//     }
//
//  );
