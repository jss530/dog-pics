(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const DOG_API_URL = 'https://random.dog/woof.json';
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

    loadImage(dogResp.url);
    console.log("Success for dogs!");
  }, function(error) {
    console.error("Failed!", error);
  })
  .then(get(CAT_API_URL)
  .then(function(catResponse) {
		  	let catResp = JSON.parse(catResponse);
		debugger;
    loadImage(catResp.url);
    console.log("Success for cats!");
   }, function(error) {
  console.error("Failed!", error);
   })
  )

}

},{}]},{},[1]);
