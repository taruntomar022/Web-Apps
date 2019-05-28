app.factory("myFactory",function($http)
           {
   
    var object={};
     var config = {headers:  {
         'Accept': 'application/json',
        'app_id': '30a82387',
         'app_key' : '73c3cac9baae525b3b34752b169a234b'
    }
                  };
    
    object.getData=function(keyword,scope)
    {
        var url="https://cors-anywhere.herokuapp.com/https://od-api.oxforddictionaries.com:443/api/v1/entries/en/"+keyword;
     //  var url="https://glosbe.com/gapi/translate?from=eng&dest=eng&format=json&phrase="+keyword+"&pretty=true";

       // var url="http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=4ecc125d12df178b6d85b368ebecf2fd";
                      $http.get(url,config).then(success,fail);
        
        
        
                   
                   
                   function success(data)
                   {
                       scope.word=data.data.results[0].id;
                       scope.def=data.data.results[0].lexicalEntries[0].entries[0].senses[0].definitions[0];
                       scope.example=data.data.results[0].lexicalEntries[0].entries[0].senses[0].examples[0].text;
                       scope.pronun=data.data.results[0].lexicalEntries[0].pronunciations[0].audioFile;
                       
                       
                   scope.etm=data.data.results[0].lexicalEntries[0].entries[0].etymologies[0];
                       console.log(JSON.stringify(data));
                       scope.shownow=true;
                  }
     
     function fail(er)
    {
        console.log("error is "+er);
    }
                   
                   
        
                     }
       
    
    
    
    return object;
});