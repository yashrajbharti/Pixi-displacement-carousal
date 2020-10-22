var running = 0;
var clicked = 0;

window.addEventListener('click', function(){
  animate();
});

const animate = () => {
  console.log("clicked");
  clicked++;

  var pixi = document.getElementById('pixi');
  var img = clicked%8;
  pixi.style.backgroundImage = `url(${img}.jpg)`;
}

setInterval("animate()", 15000);

window.addEventListener('onload', function(){
  console.log("loaded");
});
