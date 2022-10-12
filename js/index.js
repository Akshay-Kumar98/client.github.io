
// new Glide('.glide').mount();


$(document).ready(function(){
    $('.banner').slick({
        dots: false,
        infinite: true,
        speed: 300,
        autoplay: true,
        slidesToShow: 1,
        focusOnSelect: true,
        adaptiveHeight: true,
        responsive: [
            {
              breakpoint: 768,
              settings: {
                arrows: false,
                centerMode: true,
                slidesToShow: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                arrows: false,
                centerMode: true,
                slidesToShow: 1
              }
            }
          ]
        
      });
});

$(document).ready(function(){
  new kursor({
    type: 1,
    removeDefaultCursor: true,
    color: 'rgb(32, 37, 181)'
});

});

const player = new Plyr('.player');

const player2 = new Plyr('.player2');

$(document).ready(function(){
  $('.sub_brand').slick({
      dots: false,
      infinite: true,
      loop:true,
      speed: 300,
      autoplay: true,
      slidesToShow: 5,
      focusOnSelect: true,
      adaptiveHeight: true,
      responsive: [
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              centerMode: true,
              slidesToShow: 3
            }
          },
          {
            breakpoint: 480,
            settings: {
              arrows: false,
              centerMode: true,
              slidesToShow: 2
            }
          }
        ]
      
    });
});

window.oncontextmenu = function () {
  return false;
}
$(document).keydown(function (event) {
  if (event.keyCode == 123) {
    return false;
  }
  else if ((event.ctrlKey && event.shiftKey && event.keyCode == 73) || (event.ctrlKey && event.shiftKey && event.keyCode == 74) || (event.ctrlKey && event.shiftKey && event.keyCode == 77)) {
    return false;
  }
});
