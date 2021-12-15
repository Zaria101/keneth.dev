AOS.init();


$(document).ready(function(){
  formatSvgTitles ()
  $('.fa-bars').click(function(){
    $(this).toggleClass('fa-times');
    $('.navbar').toggleClass('nav-toggle');
  });

  $(window).on('scroll load',function(){

    $('.fa-bars').removeClass('fa-times');
    $('.navbar').removeClass('nav-toggle');

    if($(window).scrollTop() > 30){
      $('header').addClass('header-active');
    }else{
      $('header').removeClass('header-active');
    }

    $('section').each(function(){
      var id = $(this).attr('id');
      var height = $(this).height();
      var offset = $(this).offset().top - 200;
      var top = $(window).scrollTop();
      if(top >= offset && top < offset + height){
        $('.navbar ul li a').removeClass('active');
        $('.navbar').find('[href="#' + id + '"]').addClass('active');
      }
    });

  });

});


// Loader


window.addEventListener("load",function () {
document.getElementById("loader").classList.toggle("loader2");
});


// Scroll-top-button


const scrollBtn = document.querySelector('.fa-sort-up') ;


window.addEventListener('scroll', () => {
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 520) {
        scrollBtn.style.display = 'block';
        scrollBtn.style.transition = '0.3s ease-in-out';
    }
    else {
        
        scrollBtn.style.display = 'none' ;
    }
})
scrollBtn.addEventListener('click' , () => {
    window.scroll({
        top: 0 ,
        behavior: "smooth"
    })
})



// Swiper JS



    var swiper = new Swiper('.swiper', {
      spaceBetween: 30,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
       // Autoplay
  autoplay: {
    delay: 6500,
  },
    });


    // Svg

   

    function formatSvgTitles () {
     
let profileText = document.querySelectorAll("svg text");
for(var i = 0; i < profileText.length; i++){
  profileText[i].setAttribute("x","50%");
}


}