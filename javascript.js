 /*Explore carousel*/
 $('.carousel-one').owlCarousel({
    loop:true,
    margin:30,
    nav: false,
    dots: true,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:2
        },
        1000:{
            items:2
        }
    }
});
   
  $('.carousel-two').owlCarousel({
    loop:true,
    margin:30,
    nav: true,
    dots: false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
});

/*login header*/

 var modal = document.getElementById('myModal');
 var openButton = document.getElementById('openwindow');
 var cancel = document.getElementById('cancel');

   openButton.onclick = function(){
   	  modal.style.display = 'block';
   } 

   cancel.onclick = function(){
   	  modal.style.display = 'none';
   }




/*comments show*/

$(function(){
   $('.boxcomments').slice(0 , 1).show();
     $('#loadMore').on('click', function(e){
          e.preventDefault();
          $('.boxcomments:hidden').slice(0, 1).slideDown();
            
       });

});

/*carousel three*/

 $('.carousel-three').owlCarousel({
    loop:true,
    margin:30,
    nav: true,
    dots: false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});

/*toggle's block carousel---------------------*/

/*toggle select*/
   $(function(){
   $('.selectarrow01').click(function(){
     $('.listlist01').slideToggle('slow');
   });
});
     $(function(){
   $('.selectarrow02').click(function(){
     $('.listlist02').slideToggle('slow');
   });
});
       $(function(){
   $('.selectarrow03').click(function(){
     $('.listlist03').slideToggle('slow');
   });
});
         $(function(){
   $('.selectarrow04').click(function(){
     $('.listlist04').slideToggle('slow');
   });
});
           $(function(){
   $('.selectarrow05').click(function(){
     $('.listlist05').slideToggle('slow');
   });
});
             $(function(){
   $('.selectarrow06').click(function(){
     $('.listlist06').slideToggle('slow');
   });
});
               $(function(){
   $('.selectarrow07').click(function(){
     $('.listlist07').slideToggle('slow');
   });
});
                 $(function(){
   $('.selectarrow08').click(function(){
     $('.listlist08').slideToggle('slow');
   });
});

/*toggle destination*/
 $(function(){
   $('.destination').click(function(){
     $('.listDestination').slideToggle('slow');
   });
});

 /*toggle trip*/
  $(function(){
   $('.triptype').click(function(){
     $('.listtrip').slideToggle('slow');
   });
});






/*Map toggle*/
  $(function(){
   $('#showmap').click(function(){
     $('.mapdown').slideToggle('slow');
   });
});

function initMap() {
	var add = document.getElementById('map-map');
	var options = {
		 zoom: 10,
		 center: {lat: 47.003670,lng: 28.907089}
		 	
		 	
		 };

	 var myMap = new google.maps.Map(add, options);
       
	}

        // Create a map object and specify the DOM element
        // for display.
       
        

  /*responsive-menu toggle*/
  $(function(){
   $('#slidedownmenu').click(function(){
     $('.main-menu').slideToggle('fast');
   });
});


