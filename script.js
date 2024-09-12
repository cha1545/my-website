const users = [];

document.getElementById("registerForm").addEventListener("submit", (e) => {
  e.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const message = document.getElementById("message");

  const existingUser = users.find((u) => u.username === username);
  if (existingUser) {
    message.textContent = "Username already exists. Please choose another.";
    message.style.color = "red";
    return;
  }

  const newUser = { username, password };
  users.push(newUser);

  message.textContent = "Registration successful! Redirecting to homepage...";
  message.style.color = "green";

  setTimeout(() => {
    displayPersonalInfo(newUser);
  }, 2000);
});

function displayPersonalInfo(user) {
  document.body.innerHTML = `
    <div class="personal-info-container">
        <h1>Welcome, ${user.username}!</h1>
        <p>Your personal information:</p>
        <ul>
            <li><strong>Username:</strong> ${user.username}</li>
        </ul>
    </div>`;
}
