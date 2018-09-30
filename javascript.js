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
     $('.main-menu').slideToggle('slow');
   });
});


