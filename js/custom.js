$( document ).ready(function() {

	$('.gallery-slick').slick({
	  infinite: true,
	  dots: true,
	  arrows: false,
	  slidesToShow: 6,
	  slidesToScroll: 5,
        responsive: [
            {
              breakpoint: 1919,
              settings: {
                slidesToShow: 6
              }
            },
            {
              breakpoint: 1600,
              settings: {
                slidesToShow: 5
              }
            },
            {
              breakpoint: 1350,
              settings: {
                slidesToShow: 4
              }
            },
            {
              breakpoint: 1060,
              settings: {
                slidesToShow: 3,
                  slidesToScroll: 3
              }
            },
            {
              breakpoint: 750,
              settings: {
                slidesToShow: 2,
                  slidesToScroll: 2
              }
            },
            
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                  slidesToScroll: 1
              }
            }
          ]
	});

})
