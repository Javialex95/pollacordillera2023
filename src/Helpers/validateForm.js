export const validate = (formItems, bogota) => {
  const error_items = document.querySelector(".error-items");
  let error;
  const {
    nombre,
    apellido,
    email,
    nacimiento,
    genero,
    headliner_1,
    headliner_2,
    latinoamericano_1,
    latinoamericano_2,
    latinoamericano_3,
    latinoamericano_4,
    nacional_1,
    nacional_2,
    nacional_3,
    nacional_4,
  } = formItems;

  if (
    nombre === "" ||
    apellido === "" ||
    email === "" ||
    nacimiento === "" ||
    genero === "" ||
    headliner_1 === "" ||
    headliner_2 === "" ||
    latinoamericano_1 === "" ||
    latinoamericano_2 === "" ||
    latinoamericano_3 === "" ||
    latinoamericano_4 === "" ||
    nacional_1 === "" ||
    nacional_2 === "" ||
    nacional_3 === "" ||
    nacional_4 === "" ||
    bogota === ""
  ) {
    error = true;
    error_items.classList.add("d-block");
  } else {
    error = false;
    error_items.classList.remove("d-block");
  }

  setTimeout(() => {
    error_items.classList.remove("d-block");
  }, 3000);

  return error;
};
