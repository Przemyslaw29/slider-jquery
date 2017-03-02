'use strict';

$(function(){
    
   //zmienne::::::::::::::::::::::::::::::::::::
    
    var slider = $('#slider');
    var slideshow=$('.slide-show');
    var slideCount=slideshow.children().length;
    var slideWidth=100/slideCount+"%";
    var slideIndex=0;
    
    
    // ::::::::::pkt 2:::::::::::::::::::::::::::
    
    $('.slide-show').css("width", 100*slideCount+"%");
    
    
    //:::::::::::::pkt 3:::::::::::::::::::::::::
    
    $('.slide-show').find('.single-slide').each(function(i){
        $(this).css( { marginLeft :parseInt(slideWidth)*i+"%", width: slideWidth} );
    });
    
    //::::::::::::::pkt 4::::::::::::::::::::::::::
    
     $( ".prev-slide" ).click(function(event){
        event.preventDefault();
        slide(-1);
    });
    
    $( ".next-slide" ).click(function(event){
        event.preventDefault();
        slide(1);
    });
    
    //::::::::::::::pkt 5::::::::::::::::::::::::
    
    var sliderBox=0;
    
    function slide(newSlideIndex){
        sliderBox+=newSlideIndex;
        if(sliderBox==0 || sliderBox<0){
            sliderBox=0;
            console.log(sliderBox);
        }else if(sliderBox==slideshow.children().length-1||sliderBox>slideshow.children().length-1){
            sliderBox=slideshow.children().length-1;
            console.log(sliderBox);
        }else{
            console.log(sliderBox);
        }
        
        var slideCaption= $('.single-slide:nth-child('+(sliderBox+1)+')>p');
        slideCaption.hide();
        
        var marginLeft= sliderBox*-100+"%";
        $('.slide-show').animate({'margin-left': marginLeft},2000, function(){
          slideCaption.fadeIn(1000);
        })   
    }
})

