document.getElementById('checkinButton').addEventListener('click', function() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;

    if (name && email && phone) {
        document.getElementById('registrationForm').classList.add('hidden');
        document.getElementById('confirmationMessage').classList.remove('hidden');
    } else {
        alert('Por favor, preencha todos os campos.');
    }
});