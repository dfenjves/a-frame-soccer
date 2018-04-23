// window.addEventListener('keydown',function(){
//   let cam = document.getElementsByTagName('a-camera')
//   console.log(cam[0].getAttribute('position'));
// })

let ball = document.getElementById('ball')
ball.addEventListener('componentchanged', function(e){
  console.log(e)
})
