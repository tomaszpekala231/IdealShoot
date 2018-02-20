//menu
function openSlideMenu(){
      document.getElementById('side-menu').style.width = '100%';
       document.getElementById('side-menu').style.height = 'auto';
    }

    function closeSlideMenu(){
      document.getElementById('side-menu').style.width = '0';
}
//navbar 
$(document).ready(function(){

    $(window).scroll(function(){
      var scrollPos = $(window).scrollTop();

      if(scrollPos > 200){
        $('.main-nav').addClass('bg-nav');
        console.log('asdads');
      }else{
        $('.main-nav').removeClass('bg-nav');
      }

      });
    
    });


//smooth scrolling
$(document).ready(function(){
	$('a[href^="#"]').on('click', function(el){
		el.preventDefault();

		var target = this.hash;
		var $target = $(target);

		// Scroll and show hash
		$('html, body').animate({
			'scrollTop': $target.offset().top
				}, 700, 'swing', function(){
					window.location.hash = target;
		});
	});
});


// Animations
window.sr = ScrollReveal();
      sr.reveal('.block-1', {
        duration: 1200,
        reset: false,
        origin: 'left',
        opacity: 0,
      });

      sr.reveal('.block-2', {
        duration: 1200,
        reset: false,
        opacity: 0,
        distance: '100px',
        origin: 'right'
      });
     
      sr.reveal('.btn-submit', {
        duration: 1200,
        reset: false,
        origin: 'bottom',
        scale: 0.5
      });
      
       sr.reveal('.boxes-testimonials', {
        duration: 1200,
        reset: false,
        origin: 'right',
        distance: '300px',
        scale: 1
      });