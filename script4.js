document.addEventListener("click", (event) => {
  const id = event.target.dataset.donateId;

  if (!id) return;

  const El = document.getElementById(id);
  El.hidden = !El.hidden;
  console.log(id);
});

const donateEl = document.querySelector("#donateId");
donateEl.addEventListener("submit", (event) => {
  event.preventDefault();
  const donateAmt = event.target.querySelector("input").value;

  alert(`ThankYou For Donating ₹${donateAmt}`);
});
