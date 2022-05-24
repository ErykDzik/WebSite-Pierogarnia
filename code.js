      const bars = document.querySelector('.bars');
      const exit = document.querySelector('.exit');
      const mobileMenu = document.querySelector('.mobilemenu');

      bars.addEventListener('click', () => {
        mobileMenu.style.transform = 'translateX(0%)';
        exit.style.opacity = '1';
      });

      exit.addEventListener('click', () => {
        mobileMenu.style.transform = 'translateX(100%)';
        exit.style.opacity = '0';
      });

$(document).on('scroll', function(){
    const windowHeight = $(window).height() 
    const scrollValue = $(this).scrollTop();
    // console.log(scrollValue)


    //Pierwsza sekcja
    const $about = $('.about');
    const aboutFromTop = $about.offset().top
    // console.log(aboutFromTop);
    const aboutHeight = $about.outerHeight()
    // console.log(aboutHeight);

    const $menu_food = $('.menu_food');
    const menu_foodFromTop = $menu_food.offset().top
    const menu_foodHeight = $menu_food.outerHeight()

   

    if (scrollValue > aboutFromTop + aboutHeight - windowHeight*1.1 ) {
    // console.log("jestem about wyswietlony w całosci");
    $about.addClass('active');
    }

    if (scrollValue > menu_foodFromTop + menu_foodHeight - windowHeight*1.8 ) {
        // console.log("jestem art 3 wyswietlony w całosci");
        $menu_food.addClass('active');
        }


            //Czysciciel
    if (scrollValue < 100){
        $('article').removeClass('active');
    }
    


})


