const learn = document.querySelector("#learn");
learn.addEventListener("click", () => {
  const captcha = document.querySelector("#recaptcha-text");
  captcha.classList.remove("hidden");
  learn.classList.add("hidden");
});
