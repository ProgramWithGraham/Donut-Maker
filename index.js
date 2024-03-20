let counter = 0;
let speed = 0;
let autoClickerPrice = 2;
let autoClickerNumber = 0;

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
    if (donutCount <= autoClickerPrice) {
      donutCount -= autoClickerPrice;
      autoClickerNumber++;
      autoCount.innerText = autoClickerNumber;
      autoClickerPrice * 1.1;
    }

    // for (autoCount = 0; donutCount >= autoClickerPrice; autoCount++) {
    //   donutCount -= autoClickerPrice;
    //   autoClickerPrice * 1.1;
    // }

    // autoCount.buyAutoClicker();
    // for (let i = 0; i < 10; i++) {
    //   autoCount.innerHTML = i;
    // }
  });

  resetButton.addEventListener("click", function () {
    donutCount.innerText = "0";
    autoCount.innerText = "0";
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

// function buyAutoClicker() {
//   for (autoCount = 0; donutCount >= autoCount; autoCount++) {
//     donutCount -= autoClickerPrice;
//     autoCount.innerText = autoCount;
//     autoClickerPrice *= 1.1;
//   }
// }
// function countUp() {
//   speed++;
//   autoCount.innerText = speed;
// }
// setInterval(countUp, 100);
