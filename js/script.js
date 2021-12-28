
// $(document).ready(function(){
//  alert ("helloo ssb")
// });

// $(document).ready(function(){
//   $('.btn').click(function(){
//     alert("wellcome to ssb");
//   });

// });
// wow js start

// $(document).ready(function(){
//   wow = new WOW(
//     {
//     boxClass:     'wow',      
//     animateClass: 'animated', 
//     offset:       0,          
//     mobile:       true,      
//     live:         true      
//   }
//   )
//   wow.init();
// });

$(document).ready(function(){
 

  $('.center').slick({
    centerMode: true,
    centerPadding: '100px',
    slidesToShow: 3,

    isFinite:true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },

      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }

    ]
  });
    


});

