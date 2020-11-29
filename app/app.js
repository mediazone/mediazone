//Define an angular module for our app
var app = angular.module('app', [
    'ngRoute',
    'ngSanitize',
    'pascalprecht.translate',
    'ngCookies',
    'ngDialog'
    ]);
   
app.config(['$translateProvider',
  function($translateProvider) {
    $translateProvider.useStaticFilesLoader
    ({
        prefix: '/js/locale-',
        suffix: '.json'
    }); 
      $translateProvider.registerAvailableLanguageKeys(['nl', 'en'], {
              'nl_*': 'nl',
    'en_*': 'en',
    });
    $translateProvider.useSanitizeValueStrategy(null);
    $translateProvider.fallbackLanguage('nl');    
    $translateProvider.use('nl');
    //$translateProvider.determinePreferredLanguage();
    $translateProvider.useCookieStorage();
    $translateProvider.useLocalStorage();
 }]);


 $('.variable-2').slick({
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnFocus: false,
    pauseOnHover: false,
    dots: false,
    mobileFirst: false,
    infinite: true,
    speed: 300,
    slidesToShow: 6,
    slidesToScroll: 1,
//    centerMode: true,
    //variableWidth: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
  $('.variable-3').slick({
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnFocus: true,
    pauseOnHover: false,
    dots: false,
    mobileFirst: false,
    infinite: true,
    speed: 300,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

$(document).ready(function() {
//yourquestions
    $("#text-carousel").carousel({
                interval: 15000
            });
//facebook            
    $("#text-carousel-2").carousel({
                interval: 10000
            });

      $("#hide").click(function(){
        $("#hide").hide();
});

$("#text-carousel").swiperight(function() {  
        $(this).carousel('prev');  
        });  
$("#text-carousel").swipeleft(function() {  
        $(this).carousel('next');  
});  

    $("#demo").on("hide.bs.collapse", function(){
    $("h5 .underline").html('MEER');
  });

  $("#demo").on("show.bs.collapse", function(){
  $("h5 .underline").html('MINDER');
  });


  //Scroll up general
    $('.scrollup').click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });

// scroll function
function scrollToID(id, speed){
	var offSet = 50;
	var targetOffset = $(id).offset().top - offSet;
	var mainNav = $('#main-nav');
	$('html,body').animate({scrollTop:targetOffset}, speed);
	if (mainNav.hasClass("open")) {
		mainNav.css("height", "1px").removeClass("in").addClass("collapse");
		mainNav.removeClass("open");
	}
}
  // navigation click actions	
	$('.scroll-link').on('click', function(event){
		event.preventDefault();
    var sectionID = $(this).attr("data-id");
    console.log(sectionID);
		scrollToID('#' + sectionID, 750);
  });

});

app.directive('imgPreload', ['$rootScope', function($rootScope) {
  return {
    restrict: 'A',
    scope: {
      ngSrc: '@'
    },
    link: function(scope, element, attrs) {
      element.on('load', function() {
        element.addClass('in');
        //element.after('<i class="fa fa-spinner fa-lg fa-spin" style="color:black"></i>');
      }).on('error', function() {
        //
      });

      scope.$watch('ngSrc', function(newVal) {
        element.removeClass('in');
        
      });
    }
  };
}]);

app.directive('imgPreload2', ['$rootScope', function($rootScope) {
  return {
    restrict: 'A',
    scope: {
      ngSrc: '@'
    },
    link: function(scope, element, attrs) {
      element.on('load', function() {
        console.log(element);
        element.addClass('in');
        //element.after('<i class="fa fa-spinner fa-lg fa-spin" style="color:black"></i>');
      }).on('error', function() {
        //
      });

      scope.$watch('ngSrc', function(newVal) {
        element.removeClass('in');
        
      });
    }
  };
}]);

// app.directive('spinnerLoad', [function spinnerLoad() {
//   return {
//       restrict: 'A',
//       link: function spinnerLoadLink(scope, elem, attrs) {
//           scope.$watch('ngSrc', function watchNgSrc() {
//               elem.hide();
//               elem.after('<i class="fa fa-spinner fa-lg fa-spin"></i>');  // add spinner
//           });
//           elem.on('load', function onLoad() {
//               elem.show();
//               elem.next('i.fa-spinner').remove(); // remove spinner
//           });
//       }
//   };
// }]);