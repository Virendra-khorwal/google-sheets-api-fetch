const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');

const submitBtn = document.getElementById('submitButton');

// gapi.client.sheets.spreadsheets.create({
//     properties: {
//         title: title
//     }
// }).then((response) => {
//     var result = response.result;
    
// });

// const onSubmit = () => {
//     console.log(firstName.value, lastName.value)
// }



const scriptURL = 'https://script.google.com/macros/s/AKfycbyxeTlGUyjjb7Apb7orm15q6Yu1CNhQWCadxKwaJECfbN4M0gL2qlBbjxAQmEy_42TtGQ/exec'
const formSubmit = document.forms['submit-form']

formSubmit.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(formSubmit) })
        .then(response => console.log('Success!', response))
        .catch(error => console.error('Error!', error.message))
})

const formFetch = document.forms['fetch-form']

formFetch.addEventListener('submit', e =>{
    e.preventDefault()

    fetch(`https://sheets.googleapis.com/v4/spreadsheets/1KracG2N6Tx4DLSnu8ZJXCXEzYFVoA4zu19SHD9HYXgA/values/Sheet1`, { method: 'GET'})
        .then(response => console.log('Success!', response))
        .catch(error => console.error('Error!', error.message))
})