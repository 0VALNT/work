const form = document.getElementById('form');
    form.addEventListener('submit', getFormValue);
    function getFormValue(event) {
        event.preventDefault();
    const name = form.querySelector('[name="inj"]'), //получаем поле name
    terms = form.querySelector('[name="terms"]') //получаем поле terms
        
        const data = {
    name: name.value,
    terms: terms.checked
};
    }
console.log(data);