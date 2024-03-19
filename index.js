let counter = 0;

document.addEventListener("DOMContentLoaded", function () {
  const developerLink = document.getElementById("developer-dropdown");
  const developerModal = document.getElementById("developer-modal");
  const companyInfoLink = document.getElementById("company-info-link");
  const companyInfoModal = document.getElementById("company-info-modal");
  let donutCount = document.getElementById("donut-count");
  let donutButton = document.getElementById("donut-button");

  developerLink.addEventListener("click", function () {
    developerModal.style.display = "block";
  });

  companyInfoLink.addEventListener("click", function () {
    companyInfoModal.style.display = "block";
  });
  donutButton.addEventListener("click", function () {
    counter++;
    donutCount.innerHTML = counter;
  });

  // Close modals when clicking outside of them
  window.addEventListener("click", function (event) {
    if (event.target === developerModal) {
      developerModal.style.display = "none";
    }
    if (event.target === companyInfoModal) {
      companyInfoModal.style.display = "none";
    }
  });
});

function countUp() {
  const bigHeader = document.getElementById("donut-count");

  console.log(bigHeader, typeof bigHeader, "bigHeader");

  bigHeader.innerText = counter;
}

setInterval(countUp, 100);

// let button = document.getElementById("donut-button");
// let countDisplay = document.getElementById("donut-count");
// button.addEventListener("click", function () {
//   counter++;
//   countDisplay.innerHTML = counter;
// });

for (let i = 0; i < 1000; i++) {
  document.querySelector("cookie-header").click();
}
