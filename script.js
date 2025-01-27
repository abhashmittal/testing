$(document).ready(function($){
  orientationChange();
});

const viewer = new PhotoSphereViewer.Viewer({
  container: document.querySelector('#viewer'),
  panorama: 'assets/preservice6.jpg',
  defaultZoomLvl: '20',
});


var mybtn = document.querySelector("#button")
var slide = document.querySelector("#slide")
var info = document.querySelector("#info")
var nav = document.querySelector("#nav")
var view = document.querySelector("#viewer")
var overlay = document.querySelector("#overlay")

mybtn.addEventListener("click", function() {

  slide.classList.toggle("show");
  mybtn.classList.toggle('active');
  info.classList.toggle('active');
  nav.classList.toggle('active');
  overlay.classList.toggle('active')
});

slide.addEventListener("click", function(){

  if ($(".konzept:hover").length != 0){

  } else {
  slide.classList.toggle("show");
  mybtn.classList.toggle('active');
  info.classList.toggle('active');
  nav.classList.toggle('active');
  overlay.classList.toggle('active')
}

});



function orientationChange() {
  if(window.addEventListener) {
      window.addEventListener("orientationchange", function() {
          location.reload();
      });
  }
}
