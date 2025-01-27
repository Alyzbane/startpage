const links = document.querySelectorAll("li > a");
const image = document.getElementById("default-image");

for(let i = 0; i < links.length; i++) {
  links[i].addEventListener("mouseover", function() {
    image.src = 'src/' + this.dataset.image;
  });

/*  links[i].addEventListener("mouseout", function() {
    image.src = "src/2.png";
  }); */
}
document.getElementById("default-image").addEventListener("click", function() {
  image.src = 'src/default.png';
});
