let options = {
    startAngle: -1.55,
    size: 150,
    value: 0.25,
    fill: {gradient: ['#031569']}
  }
  $(".circle .bar").circleProgress(options).on('circle-animation-progress',
  function(event, progress, stepValue){
    $(this).parent().find("span").text(String(stepValue.toFixed(2).substr(2)) +"Mbps");
  });
  $(".js .bar").circleProgress({
    value: 0.40
  });
  $(".react .bar").circleProgress({
    value: 0.60
  });
  $(".react1 .bar").circleProgress({
    value: 0.75
  });

  let options1 = {
    startAngle: -1.55,
    size: 150,
    value: 1.10,
    fill: {gradient: ['#031569']}
  }
  $(".circle .bar1").circleProgress(options1).on('circle-animation-progress',
  function(event, progress, stepValue){
    $(this).parent().find("span").text(String(stepValue.toFixed(3).substr(2)) +"Mbps");
  });