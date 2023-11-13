$(()=>{
    VermaisCertificados();
    VermaisProjetos();
    menuMobile();
    MeuScroll();
    ocultarPopUp();

   

    document.addEventListener('scroll',ocultarPopUp)
    
   function ocultarPopUp(){
    const top = document.getElementById("pop-up");
    if(window.scrollY > 650){
        top.style.display = "block"
    }else{
        top.style.display = "none"
    }
   }

    function menuMobile(){

        var el = $('.menu-mobile i');
        var Show = $('nav.mobile');

        $(el).click(()=>{
            Show.slideToggle();
        })
    }
    
    function MeuScroll(){
    $('.menu-desktop a, nav.mobile a').click(function(){
        var href = $(this).attr('href');
        var offSetTop = $(href).offset().top;

        $('html,body').animate({'scrollTop':offSetTop});

        return false;
    });

    $('.pop-up a').click(function(){
        var href = $(this).attr('href');
        var offSetTop = $(href).offset().top;

        $('html,body').animate({'scrollTop':offSetTop});

        return false;
    });

    };

    /*
    
    $('.menu-desktop li a').hover(function(){
        $('.menu-desktop li a').css('text-decoration','none');
        $(this).css('text-decoration','underline');
    })*/
        
    function VermaisProjetos(){
        var VerMais = $('.verMais');
        var outros3 = $('.outros-3');
        var fechar = $('.fechar');

        $(VerMais).click(()=>{
            VerMais.fadeOut();
            outros3.css('display','flex');
            outros3.fadeIn();
            fechar.fadeIn();
            
            return false
        });

        $(fechar).click(()=>{
            VerMais.fadeIn();
            outros3.fadeOut();
            fechar.fadeOut();
            
            return false
        });
    }

    function VermaisCertificados(){
        var VerMais = $('.verMais-C');
        var outros3 = $('.outros-3-C');
        var fechar = $('.fechar-C');

        $(VerMais).click(()=>{
            VerMais.fadeOut();
            outros3.css('display','flex');
            outros3.fadeIn();
            fechar.fadeIn();
            
            return false
        });

        $(fechar).click(()=>{
            VerMais.fadeIn();
            outros3.fadeOut();
            fechar.fadeOut();
            
            return false
        });
    }

});
    
