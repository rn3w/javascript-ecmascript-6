let promise =new Promise(function(resolve,reject){
	console.log("uno");
	resolve();
});
promise.then(function(){
	console.log("dos");
	console.log("tres");
});
promise.then(function(){

console.log("cuatro");	
})