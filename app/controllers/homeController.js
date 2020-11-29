app.controller('homeController', function ($scope, $rootScope, $translate, $filter, $location, ngDialog) {  

$rootScope.theme = 'ngdialog-theme-default';

    $scope.open = function () {
                    $rootScope.theme = 'ngdialog-theme-default dialogwidth800';
                    ngDialog.open({
                        template: '/app/views/share.html',
                        disableAnimation: false,
                        scope: $scope,
                        className: 'ngdialog-theme-default dialogwidth800',
                        overlay: true,
                        closeByDocument: true
                    });
                };
                
    $scope.close = function () {   
    var windowIDs = ngDialog.getOpenDialogs();   
    ngDialog.close();
    };

    $scope.location = window.location.href;

//translate
        var lang = $translate.proposedLanguage() || $translate.use();
        $scope.taal = lang;

        $scope.changeLanguage = function (langKey) {
        $translate.use(langKey);
  };
   
//titel en payoff      
      $scope.$watch(
        function() 
        { 
            return $filter('translate')('t1'); 
        },
        function(newval) 
        { 
            $scope.html = (newval); 
        }
    );
          $scope.$watch(
        function() 
        { 
            return $filter('translate')('payofftext'); 
        },
        function(newval) 
        { 
            $scope.htmlpayofftext = (newval); 
        }
    );
    
});


function shareit() {
    window.open("https://www.facebook.com/sharer/sharer.php?u="+window.location.href, "Share");
}
function shareit2() {
    var b = document.title;
    window.open("https://www.linkedin.com/shareArticle?mini=true&url="+window.location.href+"&title="+b+"&summary="+b, "Share");
}                        
function shareit3(a) {
    var b = document.title;
    window.open("https://twitter.com/share?text="+b+"&url="+window.location.href, "Share");
}      
function shareit4() {
    var aa = document.title;
    var a = window.location.href;
var b = encodeURIComponent(aa + ": " + a);
var c = "whatsapp://send?text="+b
window.location.href = c;
}
    //var b = document.title;
 //   window.open("whatsapp://send?text="+b, "Share");
//}                        
//https://twitter.com/share?text=w&url=http://www.synsationzorgdesign.nl/cases/case15.html
//https://www.linkedin.com/shareArticle?mini=false&url=http://developer.linkedin.com&title=LinkedIn%20Developer%20Network&summary=My%20favorite%20developer%20program&source=LinkedIn
