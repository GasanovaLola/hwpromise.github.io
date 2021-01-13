new Promise(function(resolve, reject) {
    setTimeout(() => resolve(0), 1000); 
  
  }).then(function(result) { 
  
    console.log(result);
    return result + 1;
  
  }).then(function(result) { 
  
    console.log(result);
    return result * 3;
  
  }).then(function(result) {
  
    console.log(result);
    return result * 2;
  
  }).then(function(result) {
  
    console.log(result);
    return result + 2;
  
  }).then(function(result) {
  
    console.log(result);
    return result + 1;
  
  }).then(function(result) {
  
    console.log(result);
    return result + 3;

  }).then(function(result) {
  
    console.log(result);
    return result;
});

new Promise(function(resolve, reject) {
    setTimeout(() => resolve(0), 1000); 
  
  }).then(function(result) { 
  
    console.log(result);
    return result + 2;
  
  }).then(function(result) { 
  
    console.log(result);
    return result + 1;
  
  }).then(function(result) {
  
    console.log(result);
    return result * 2;
  
  }).then(function(result) {
  
    console.log(result);
    return result + 1;
  
  }).then(function(result) {
  
    console.log(result);
    return result + 2;
  
  }).then(function(result) {
  
    console.log(result);
    return result + 3;

  }).then(function(result) {
  
    console.log(result);
    return result;
});
