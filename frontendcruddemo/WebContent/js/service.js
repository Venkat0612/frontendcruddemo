/**
 * 
 */
app.factory('PersonService',function($http){
var personService={};

personService.getAllPersons=function(){
return $http.get("http://localhost:8686/backendcruddemo/getallpersons")
}	
return personService;
})
personService.savePerson=function(person){
return $http.post("http://localhost:8686/backendcruddemo/saveperson",person)
}