




 var valInputName = $(".input-name").val();
 var valInputEmail = $(".input-email").val();
 var valInputPhone = $(".input-phone").val();
 var valInputMessage = $(".input-message").val();

$(".submit_send").on(
    if ( valInputName == "") {
      alert("");
    }


  );


                  // SLICK-SLIDER


// var downliadButton = $(".container_content-downloadbutton");

// downliadButton.on("click", function(e){
// 	alert("on");
// })

$(".slick-slider").slick({dots:true,arrows:true,autoplaySpeed:2000});

$(".slick-slider-testimonals").slick({dots:false,arrows:true});


                  // FANCY-BOX


$(document).ready(function() {
        $(".fancybox").fancybox({
        	
        'transitionIn'	:	'elastic',
		'transitionOut'	:	'elastic',
		'speedIn'		:	600, 
		'speedOut'		:	200, 
		'overlayShow'	:	false
        });
    });


                  // YANDEX-MAP



ymaps.ready(init);    
        function init(){ 
            var myMap = new ymaps.Map("map", {
                center: [54.187203529303964, 45.183880625643695],
                zoom: [15]
            }); 

            
      
   // Создание метки 
				var myGeoObject = new ymaps.GeoObject({
                    // Геометрия.
                    geometry: {
                        // Тип геометрии - точка
                        type: "Point",
                        // Координаты точки.
                        coordinates: [54.18169106629892,45.20387917605872],
                    	
                    },
                    properties: {
                // Контент метки.
               // iconContent: '<strong style="color:red">Мордовия-Арена</strong>'
            }
                });
 
			// Добавление метки на карту
			myMap.geoObjects.add(myGeoObject);

        };

      
