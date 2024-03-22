let counter = 0;
let autoClickerPrice = 100;
let autoClickerNumber = 0;

document.addEventListener("DOMContentLoaded", function () {
  const developerLink = document.getElementById("developer-dropdown");
  const developerModal = document.getElementById("developer-modal");
  const companyInfoLink = document.getElementById("company-info-link");
  const companyInfoModal = document.getElementById("company-info-modal");

  developerLink.addEventListener("click", function () {
    developerModal.style.display = "block";
  });

  companyInfoLink.addEventListener("click", function () {
    companyInfoModal.style.display = "block";
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

let donutCount = document.getElementById("donut-count");
let donutButton = document.getElementById("donut-button");
let autoCount = document.getElementById("auto-count");
let autoButton = document.getElementById("auto-button");
let resetButton = document.getElementById("reset-button");

donutButton.addEventListener("click", function () {
  counter++;
  donutCount.innerText = counter;
});

autoButton.addEventListener("click", function () {
  if (counter >= autoClickerPrice) {
    counter -= autoClickerPrice;
    donutCount.innerText = counter;
    autoClickerNumber++;
    autoCount.innerText = autoClickerNumber;
  }
});

resetButton.addEventListener("click", function () {
  counter = 0;
  autoClickerNumber = 0;
  donutCount.innerText = counter;
  autoCount.innerText = autoClickerNumber;
  callClearinterval();
});

function countUp() {
  counter += autoClickerNumber;
  donutCount.innerText = counter;
}

setInterval(countUp, 1000);
