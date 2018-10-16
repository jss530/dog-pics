const DOG_API_URL = 'https://dog.ceo/api/breeds/image/random/50';

function get(url) {
  return new Promise(function(resolve, reject) {
    var req = new XMLHttpRequest();
    req.open('GET', url);

    req.onload = function() {
      if (req.status == 200) {
        resolve(req.response);
      }
      else {
        reject(Error(req.statusText));
      }
    };
    req.onerror = function() {
      reject(Error("Network Error"));
    };
    req.send();
  });
}

function loadImage(url) {
	const list = document.getElementById("pets");
  const li = document.createElement("li");
  const img = document.createElement("img");

  list.appendChild(li);
  li.appendChild(img);
  li.setAttribute('class', 'dog-pic');
  img.setAttribute('src', url);
  img.setAttribute('class', 'img-thumbnail img-responsive');
}

function loadMore() {

	get(DOG_API_URL)
  .then(function(dogResponse) {
  	let dogResp = JSON.parse(dogResponse);

    for (let img of dogResp.message) {
      loadImage(img);
    }

    console.log("Success for dogs!");
  }, function(error) {
    console.error("Failed!", error);
  })
}

var modal = document.getElementById('imageModal');
var img = document.getElementsByClassName('img-thumbnail');
var modalImg = document.getElementById("img01");

img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
  modal.style.display = "none";
}
