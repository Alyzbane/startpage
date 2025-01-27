const IMAGE_PATH = 'static/images/'
const links = document.querySelectorAll("li > a");
const image = document.getElementById("default-image");

for(let i = 0; i < links.length; i++) {
  links[i].addEventListener("mouseover", function() {
    image.src = IMAGE_PATH + this.dataset.image;
  });
}
document.getElementById("default-image").addEventListener("click", function() {
  image.src = IMAGE_PATH + 'default.png';
});
