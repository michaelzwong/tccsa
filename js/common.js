function loadFullImage(fullImageSrc) {
  var image = document.getElementById('bg-image')
  var fullImage = document.createElement("img")

  fullImage.onload = function() {
    image.src = this.src
    image.className = "";
  }

  setTimeout(function() {
    fullImage.src = fullImageSrc
  }, 100)
}
