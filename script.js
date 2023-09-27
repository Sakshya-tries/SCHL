document.getElementById('myForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const formData = {
        name: document.getElementById('name').value,
        age: document.getElementById('age').value,
        gender: document.querySelector('input[name="gender"]:checked').value,
        mobile: document.getElementById('mobile').value,
        locality: document.getElementById('locality').value,
        help_needed: document.getElementById('help').value,
    };

    fetch('/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        alert('Form submission successful!');
        document.getElementById('myForm').reset();
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Form submission failed.');
    });
});