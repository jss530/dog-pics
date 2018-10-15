const DOG_API_URL = 'https://dog.ceo/api/breeds/image/random';
const CAT_API_URL = 'https://aws.random.cat/meow';

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
  img.setAttribute('src', url);

}


function loadMore() {

	get(DOG_API_URL)
  .then(function(dogResponse) {
  	let dogResp = JSON.parse(dogResponse);

    loadImage(dogResp.message);
    console.log("Success for dogs!");
  }, function(error) {
    console.error("Failed!", error);
  })
  .then(get(CAT_API_URL)
  .then(function(catResponse) {
		  	let catResp = JSON.parse(catResponse);
		debugger;
    loadImage(catResp.file);
    console.log("Success for cats!");
   }, function(error) {
  console.error("Failed!", error);
   })
  )

}
