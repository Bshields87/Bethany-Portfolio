var triangle1 = [
    { transform: 'rotate(0) translate3D(-50%, -50%, 0', color: '#000' }, 
    { color: '#431236', offset: 0.3},
    { transform: 'rotate(360deg) translate3D(-50%, -50%, 0)', color: '#000' }
  ];
  
  var triangle1Timing = {
    duration: 10000,
    iterations: Infinity
  }
  
  document.getElementById("triangle1").animate(
    triangle1, 
   triangle1Timing
  )

  var triangle2 = [
    { transform: 'rotate(0) translate3D(50%, 50%, 0', color: '#000' }, 
    { color: '#431236', offset: 0.3},
    { transform: 'rotate(360deg) translate3D(50%, 50%, 0)', color: '#000' }
  ];
  
  var triangle2Timing = {
    duration: 36000,
    iterations: Infinity
  }
  
  document.getElementById("triangle2").animate(
    triangle2, 
   triangle2Timing
  )

  var triangle3 = [
    { transform: 'rotate(0) translate3D(-30%, -30%, 0', color: '#000' }, 
    { color: '#431236', offset: 0.6},
    { transform: 'rotate(360deg) translate3D(-30%, -30%, 0)', color: '#000' }
  ];
  
  var triangle3Timing = {
    duration: 16000,
    iterations: Infinity
  }
  
  document.getElementById("triangle3").animate(
    triangle3, 
   triangle3Timing
  )