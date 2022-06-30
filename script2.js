const tableEl = document.querySelector("table");
let selectId;

tableEl.addEventListener("click", (event) => {
  const target = event.target;
  const closestTr = target.closest("tr");

  if (target.tagName === "TH") return;

  closestTr.classList.add("active");

  alert(`Hello ${closestTr.children[0].textContent}`);

  if (selectId != undefined) {
    selectId.classList.remove("active");
  }
  selectId = closestTr;

  console.log(selectId);
});
