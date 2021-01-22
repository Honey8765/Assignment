const scriptURL = 'https://script.google.com/macros/s/AKfycbw5ME01x52rGixGuRUXLPx6O9pVQaxck1nNk3X2RSrfR38QshShM3tv/exec'
const form = document.forms['google-sheet']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => 
        alert("Thanks for Contacting us..! We Will Contact You Soon..."))
    .catch(error => console.error('Error!', error.message))
    
    form.querySelector('input[type="email"]').value=""

})