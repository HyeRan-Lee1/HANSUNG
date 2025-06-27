 $(document).ready(function(){


  $(".ham").click(function(){
    $(this).toggleClass("active")
    $(".mgnb-wrap").fadeToggle()
    $("body").toggleClass("active")
  })

  var page = $('#fullpage').fullpage({
      menu : '.gnb',
      anchors : ['menu1', 'menu2', 'menu3', 'menu4', 'menu5'],
        navigation: true,
        navigationTooltips: ['TOP', 'History','About us', 'Business', 'Product'],
        navigationPosition: 'right',
        showActiveTooltip: true,
        autoScrolling: true,
        responsiveWidth: 1024,

        onLeave : function(origin, destination, direction, trigger){
          if(destination == 3){
            $("header, #fp-nav").addClass("active");
          }else{
            $("header, #fp-nav").removeClass("active");
          }
          if (destination == 5) {
            $("#fp-nav").fadeOut(300);
        } else {
            $("#fp-nav").fadeIn(300);
        }
    }
        
  })

    const partner_list = new Swiper(".partner-list", {
    autoplay: { 
    delay: 0, 
    disableOnInteraction: false},
    loop: true, 
    speed: 6000,
    breakpoints: {
                0: {slidesPerView: 2.5,
                     spaceBetween: 20,},
                574:{ slidesPerView: 4,
                      spaceBetween: 30, },
                1024: {slidesPerView: 6,
                     spaceBetween: 40, },
                1500: {slidesPerView: 8,
                      spaceBetween: 50, }
                }
              
                    })

    const history_list = new Swiper(".history-list", {
    autoplay: { 
    delay: 0, 
    disableOnInteraction: false},
    loop: true, 
    speed: 6000,
    breakpoints: {
                0: {slidesPerView: 3.5,
                     spaceBetween: 10,},
                574:{ slidesPerView: 4,
                      spaceBetween: 20, },
                1200: {slidesPerView: 5.5,
                     spaceBetween: 30, },
                1600: {slidesPerView: 7,
                      spaceBetween: 40, }
                }
              
                    })


    //store
   $(".business ul li").eq(0).addClass("active")
     $(".business ul li").mouseenter(function(){
     $(this).addClass("active").siblings().removeClass("active")
   })


    //탭
    $(".product-img ul li").hide()

    $(".product-name ul li").click(function(){
    $(this).addClass("active").siblings().removeClass("active")
      let aa = $(this).index()
    $(".product-img ul li").eq(aa).fadeToggle().siblings().hide()
    $(".product-img ul li").eq(aa).addClass("active").siblings().removeClass("active")
    })



    })

