$(document).ready(function(){
  function rolldice(){
  //Place your code here 

  }
  
  $("#roll-dice").click(function(){
    
    
    var dice = Math.random();
    var dice1 = Math.floor(dice * 6);
    
    console.log(dice1);
    
    
  });
});
