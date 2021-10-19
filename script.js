var running = 0;

document.querySelector('body').addEventListener('click', function(){
  if(!running){
    running = 1;

var tl = new TimelineMax();
tl
	.to(displacementFilter.scale, 1, {y:600,x: 0.1})
	.to(displacementFilter.scale, 1, {y:0.1,x:0.1})
  .call(function(){
    running = 0;

    // img7 = [img6, img6 = img7][0];
    // img6 = [img5, img5 = img6][0];
    // img5 = [img4, img4 = img5][0];
    // img4 = [img3, img3 = img4][0];
    img3 = [img2, img2 = img3][0];
    img2 = [img1, img1 = img2][0];
  });
	tl
		.to(img2, 1, {alpha: 1},1)
    .to(img1,0.9,{alpha: 0},1.1)
  tl
    .to(img3, 1, {alpha: 1},1)
    .to(img2,0.9,{alpha: 0},1.1)
  // tl
  //    .to(img4, 1, {alpha: 1},1)
  //    .to(img3,0.9,{alpha: 0},1.1)
  // tl
  //    .to(img5, 1, {alpha: 1},1)
  //    .to(img4,0.9,{alpha: 0},1.1)
  // tl
  //   .to(img6, 1, {alpha: 1},1)
  //   .to(img5,0.9,{alpha: 0},1.1)
  // tl
  //   .to(img7, 1, {alpha: 1},1)
  //   .to(img6,0.9,{alpha: 0},1.1)

	tl
		.fromTo(img3.scale, 1,
			{y:img3.scale.y*2},
			{y:img3.scale.y},1)
  }


});


// PIXI INIT STAGE
var renderer = new PIXI.Application(800, 600, {backgroundColor : 0x000000});
document.getElementById("pixi").appendChild(renderer.view);
var container = new PIXI.Container();
renderer.stage.addChild(container);
// render image
var img1 = PIXI.Sprite.fromImage('j.jpg');
	img1.width = 650;
	img1.height = 500;
	img1.position.x = 75;
	img1.position.y = 50;
	container.addChild(img1);

// render second image
var img2 = PIXI.Sprite.fromImage('i.jpg');
	img2.width = 650;
	img2.height = 500;
	img2.position.x = 75;
	img2.position.y = 50;
	img2.alpha = 0;
	container.addChild(img2);

var img3 = PIXI.Sprite.fromImage('l.jpg');
	img3.width = 650;
	img3.height = 500;
	img3.position.x = 75;
	img3.position.y = 50;
	img3.alpha = 0;
	container.addChild(img3);
// var img4 = PIXI.Sprite.fromImage('a.jpg');
//   img4.width = 650;
//   img4.height = 500;
//   img4.position.x = 75;
//   img4.position.y = 50;
//   img4.alpha = 0;
//   container.addChild(img4);
// var img5 = PIXI.Sprite.fromImage('b.jpg');
//   img5.width = 650;
//   img5.height = 500;
//   img5.position.x = 75;
//   img5.position.y = 50;
//   img5.alpha = 0;
//   container.addChild(img5);
// var img6 = PIXI.Sprite.fromImage('c.jpg');
//   img6.width = 650;
//   img6.height = 500;
//   img6.position.x = 75;
//   img6.position.y = 50;
//   img6.alpha = 0;
//   container.addChild(img6);
// var img7 = PIXI.Sprite.fromImage('d.jpg');
//   img7.width = 650;
//   img7.height = 500;
//   img7.position.x = 75;
//   img7.position.y = 50;
//   img7.alpha = 0;
//   container.addChild(img7);

// add Filters
var disSprite = PIXI.Sprite.fromImage('k.jpg');
disSprite.width = 800;
disSprite.height = 600;
var displacementFilter = new PIXI.filters.DisplacementFilter(disSprite);
displacementFilter.scale.set(0.1);
container.addChild(disSprite);
container.filters = [displacementFilter];

function draw(){
	renderer.render(renderer.stage);
	window.requestAnimationFrame(draw);
}
draw();
// enables playback as well as creates a makes it works on autoplay with a duration of 5 seconds
var pixii = document.getElementById('pixi');

setInterval(() => {
  pixii.click()
}, 5000)


