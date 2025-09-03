document.getElementById('contactForm').addEventListener('submit', async function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    document.getElementById("errorMessage").textContent = "Please fill in all fields.";
    return;
  }

  try {
    const response = await fetch('/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json' 
      },
      body: JSON.stringify({ name, email, message })
    });

    const result = await response.text();
    document.getElementById("responseMessage").innerText = result;
    document.getElementById("errorMessage").innerText = '';
    this.reset();
  } catch (err) {
    document.getElementById("errorMessage").textContent = "Failed to send message.";
  }
});