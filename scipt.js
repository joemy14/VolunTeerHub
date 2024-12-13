
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('show-password').addEventListener('change', function() {
    const passwordInput = document.getElementById('password');
    passwordInput.type = this.checked ? 'text' : 'password';
  });
});
