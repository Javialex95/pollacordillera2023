export const toggleModal = () => {
  const form = document.querySelector(".form");
  const body = document.querySelector("body");

  form.classList.toggle("show");
  body.classList.toggle("overflow-hide");
};
