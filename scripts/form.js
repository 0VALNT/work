document.getElementById("form");
form.addEventListener('submit', getFormValue);
function getFormValue(event) {
    event.preventDefault();
    const name = form.querySelector('[inj="name"]'), //получаем поле name
    terms = form.querySelector('[monster="terms"]') //получаем поле terms
    const data = {
        name: name.value,
        terms: terms.value
    };
}
console.log(data);