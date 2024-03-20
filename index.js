let counter = 0;
let autoClickerPrice = 2;
let autoClickerNumber = 0;
let speed = 0;
let interval;

document.addEventListener("DOMContentLoaded", function () {
  const developerLink = document.getElementById("developer-dropdown");
  const developerModal = document.getElementById("developer-modal");
  const companyInfoLink = document.getElementById("company-info-link");
  const companyInfoModal = document.getElementById("company-info-modal");
  let donutCount = document.getElementById("donut-count");
  let donutButton = document.getElementById("donut-button");
  let autoCount = document.getElementById("auto-count");
  let autoButton = document.getElementById("auto-button");
  let resetButton = document.getElementById("reset-button");

  developerLink.addEventListener("click", function () {
    developerModal.style.display = "block";
  });

  companyInfoLink.addEventListener("click", function () {
    companyInfoModal.style.display = "block";
  });
  donutButton.addEventListener("click", function () {
    counter++;
    donutCount.innerText = counter;
  });
  autoButton.addEventListener("click", function () {
    if (counter >= autoClickerPrice) {
      counter = counter -= autoClickerPrice;
      donutCount.innerText = counter;
      counter = autoClickerNumber * 2;
      autoClickerNumber++;
      autoCount.innerText = autoClickerNumber;
      if (autoClickerNumber > 0) {
        interval = setInterval(countUp, 1000);
        function countUp() {
          donutCount.innerText = counter;
          counter++;
        }
      }
    }
  });

  resetButton.addEventListener("click", function () {
    counter = 0;
    autoClickerNumber = 0;
    donutCount.innerText = "0";
    autoCount.innerText = "0";
    callClearinterval();
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

function callClearinterval() {
  clearInterval(interval);
}
