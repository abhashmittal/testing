$(document).ready(function($){
  orientationChange();
});

const viewer = new PhotoSphereViewer.Viewer({
  container: document.querySelector('#viewer'),
  panorama: 'assets/preservice6.jpg',
  defaultZoomLvl: '20',
});

var popup = document.querySelector("#pop")
var closepopup = document.querySelector("#button4")
var sitenav = document.querySelector("#sitenav")
var karte = document.querySelector(".popupbg")


async function checkImageExists(imagePath) {
  try {
    const response = await fetch(imagePath, { method: 'HEAD' });
    return response.ok; // true if the image exists
  } catch (error) {
    let toggleContentBasedOnImage = ('assets/double-trouble_23.png');
  }
}

// Function to toggle HTML based on image existence
async function toggleContentBasedOnImage(imagePath) {
  const contentDiv = document.getElementById('annonce');
  const imageExists = await checkImageExists(imagePath);

  if (imageExists) {
 
  } else {
    popup.classList.toggle('active');
    sitenav.classList.toggle('active');
    karte.classList.toggle('active');
  }
}

popup.addEventListener("click", function(){
  if ($(".popupbg:hover").length !=0){
  } else {
    popup.classList.toggle('active');
    sitenav.classList.toggle('active');
    karte.classList.toggle('active');
  }
}
)

// Call the function with the path to the image
toggleContentBasedOnImage('popup/scan.jpg');

closepopup.addEventListener("click", function() {
  popup.classList.toggle('active');
  sitenav.classList.toggle('active');
  karte.classList.toggle('active');
});

//navigation triggers when there is no Pop-Up present
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
};

