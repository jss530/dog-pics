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
  li.setAttribute('class', 'dog-pic no-gutter');
  img.setAttribute('src', url);
  img.setAttribute('class', 'col-sm-3');
  img.setAttribute('onClick', 'enlarge(this)');
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
  }).then(function() {
    const petsList = new List('pets-list', {
      valueNames: ['dog-pic'],
      innerWindow: 5,
      outerWindow: 5,
      page: 10,
      pagination: true
      });
    });
}

function enlarge(img) {
  const modal = document.getElementById('imageModal');
  const modalImg = document.getElementById("img01");
  const span = document.getElementsByClassName("close")[0];

  modal.style.display = "block";
  modalImg.src = img.src;

  span.onclick = function() {
    modal.style.display = "none";
  }
}
