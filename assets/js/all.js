"use strict";

console.log('Hello!');
$(document).ready(function () {
  console.log('HesSchool Hello!');
});
Array.from(document.querySelectorAll("#tabs-list li")).forEach(function (item) {
  return item.addEventListener("click", function (e) {
    console.log('test'); // e.preventDefault();

    var link = this.getAttribute("data-link");
    document.querySelector('#tabs-list .active').classList.remove("active");

    if (link === 'optical') {
      console.log('1');
      document.querySelector("[data-link='optical']").classList.add("active");
      hideAll();
      document.querySelector("[data-target='optical']").classList.remove("d-none");
    } else if (link === 'sunglasses') {
      console.log('2');
      document.querySelector("[data-link='sunglasses']").classList.add("active");
      hideAll();
      document.querySelector("[data-target='sunglasses']").classList.remove("d-none");
    } else if (link === 'functional') {
      console.log('3');
      document.querySelector("[data-link='functional']").classList.add("active");
      hideAll();
      document.querySelector("[data-target='functional']").classList.remove("d-none");
    }

    function hideAll() {
      Array.from(document.querySelectorAll("section")).forEach(function (sec) {
        return sec.classList.add("d-none");
      });
    }
  });
});
//# sourceMappingURL=all.js.map
