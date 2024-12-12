document.getElementById('show-password').addEventListener('change', function() {
    var passwordField = document.getElementById('password');
    if (this.checked) {
        passwordField.type = 'text';  // Show the password
    } else {
        passwordField.type = 'password';  // Hide the password
    }
});
