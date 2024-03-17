const container = (document.querySelector(".container").innerText =
  "mmmmmmmmm doughnuts.... ahhhhhhh!");

document.getElementsByTagName("button")[0].onclick = function () {
  confirm(
    "Welcome to Fred: the Baker Company. We make nothing, but donuts. " +
      "Yummy delicious donuts with a click of a button. The more you click, the more donuts that are made. " +
      "Once you have reached a required amount of donuts, you can spend those donuts to buy a AutoClicker. " +
      "Watch as the AutoClicker auto mates your donut making by 1 donut per second, the more AutoClicker you buy the more donuts per second you will make. " +
      "Happy Donut making!!"
  );
};

for (let i = 0; i < 1000; i++) {
  document.querySelector("#donuts").click();
}
