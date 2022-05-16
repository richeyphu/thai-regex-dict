export function clicked() {
  var xhr = new XMLHttpRequest();
  xhr.open(
    "GET",
    "https://api.countapi.xyz/hit/thai-regex-dict-web/searchclicks"
  );
//   xhr.responseType = "json";
//   xhr.onload = function () {
//     alert(`This button has been clicked ${this.response.value} times!`);
//   };
  xhr.send();
}
