app.controller("myCtrl",function($scope,myFactory)
              {
   
    
    $scope.search=function()
    {
      myFactory.getData($scope.key,$scope);  
        
        
    }
    
});


/*app.controller("myctrl",function($scope,serverfactory){
	$scope.doSearch=function(){
		serverfactory.callServer($scope.searchImg,$scope);
	}
});*/