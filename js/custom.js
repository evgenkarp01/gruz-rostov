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


  $("#btn-no-menu, #mmenu, .mmenu li a").on('click', function(){
    $("#menuha").toggleClass("menuha-left");
    $(".over").toggleClass("zet");
  });

  $("a.ancLinks").click(function () { 
    var elementClick = $(this).attr("href");
    var destination = $(elementClick).offset().top;
    $('html,body').animate( { scrollTop: destination }, 700 );
    return false;
  });

  $('.zoom-gallery').magnificPopup({
      delegate: 'a',
      type: 'image',
      closeOnContentClick: false,
      closeBtnInside: false,
      mainClass: 'mfp-with-zoom mfp-img-mobile',
      image: {
        verticalFit: true,
        titleSrc: function(item) {
          return item.el.attr('title');
        }
      },
      gallery: {
        enabled: true
      },
      zoom: {
        enabled: true,
        duration: 300, // don't foget to change the duration also in CSS
        opener: function(element) {
          return element.find('img');
        }
      }
      
    });





  $(function(){
        $('[name="phone"]').mask("+7(999) 999-99-99");
    });

    function call(ev) {
    var msg   = $(ev).closest('form').serialize();
        $.ajax({
          type: 'POST',
          url: '../php/send.php',
          data: msg,
          success: function(data) {
            $(ev).closest('.result').html(data);
            $(ev).slideUp('fast');
          },
          error:  function(xhr, str){
      alert('Возникла ошибка: ' + xhr.responseCode);
          }
        });
    }
        
    $("#modal-button").on("click", function(event){
        event.preventDefault();
         
         if(($('[name="phone"]').val()!='')&&($('[name="phone"]').val()!='+7(___)___-__-__')){
            call(this);
         }else{
          $('[name="phone"]').addClass('error');
         }
    });

    $('.popup-with-form').magnificPopup({
      type: 'inline',
      preloader: false,
      focus: '#name',
      callbacks: {
        beforeOpen: function() {
          if($(window).width() < 700) {
            this.st.focus = false;
          } else {
            this.st.focus = '#name';
          }
        }
      }
    });

    $( window ).resize(function() {
      if($( window ).width()<992){
        $("#two-block-col").addClass("col-two");
      }else{
        $("#two-block-col").removeClass("col-two");
      }
    });

})
