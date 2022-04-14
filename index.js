const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');

const submitBtn = document.getElementById('submitButton');

gapi.client.sheets.spreadsheets.create({
    properties: {
        title: title
    }
}).then((response) => {
    var result = response.result;
    
});

const onSubmit = () => {
    console.log(firstName.value, lastName.value)
}

console.log(firstName.value)