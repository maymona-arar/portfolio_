

document.getElementById('contact-form').addEventListener('submit', function(event){
    event.preventDefault();
    var formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };

    console.log(formData); 
    alert('Thank you for your message, ' + formData.name + '!');
});

