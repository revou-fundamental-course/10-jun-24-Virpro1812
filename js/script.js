const form = document.getElementsByClassName(`celcius`)[0];

form.addEventListener("submit", (event) => {
  const input = document.getElementById("celcius");
  event.preventDefault();
  input.value = "";
});

