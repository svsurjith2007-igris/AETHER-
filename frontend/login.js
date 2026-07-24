const loginForm = document.querySelector('#loginForm');
const emailInput = document.querySelector('#emailInput');
const passwordInput = document.querySelector('#passwordInput');
const loginError = document.querySelector('#loginError');

function handleLogin(event) {
  event.preventDefault();
  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();

  if (!email || !password) {
    loginError.textContent = 'Please enter both email and password to continue.';
    return;
  }

  localStorage.setItem('isLoggedIn', 'true');
  window.location.href = 'index.html';
}

if (localStorage.getItem('isLoggedIn')) {
  window.location.href = 'dashboard.html';
}

loginForm.addEventListener('submit', handleLogin);
