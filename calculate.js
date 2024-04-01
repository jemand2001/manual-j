/** @param {MouseEvent} event  */
function calculateManualJ(event) {
  event.preventDefault();
  event.stopPropagation();
  /** @type {HTMLFormElement} */
  const formElement = document.getElementById("numbers");
  /** @type {HTMLOutputElement} */
  const output = document.getElementById("result");

  const cubicFeet =
    Number(formElement["sqft"].value) * Number(formElement["ceiling"].value);
  const occupants = Number(formElement["people"].value);
  const doors = Number(formElement["doors"].value);
  const windows = Number(formElement["windows"].value);

  const result = cubicFeet + occupants * 100 + windows * 1000 + doors * 1000;

  output.innerText = `HVAC load: ${result.toLocaleString()} BTU`;
}
