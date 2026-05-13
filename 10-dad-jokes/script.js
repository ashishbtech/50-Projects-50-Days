const jokeEl = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');

// Add click listener to the button
jokeBtn.addEventListener('click', generateJoke);

// Call the function immediately on page load so a joke is already there
generateJoke();

// Using async/await for cleaner asynchronous code
async function generateJoke() {
  const config = {
    headers: {
      Accept: 'application/json',
    },
  };

  try {
    // Show a loading state while fetching
    jokeEl.innerText = '// Fetching transmission...';
    jokeBtn.disabled = true;

    const res = await fetch('https://icanhazdadjoke.com', config);
    const data = await res.json(); // Parse the response into a JSON object

    jokeEl.innerText = `"${data.joke}"`;
  } catch (error) {
    jokeEl.innerText = "Error establishing connection to the humor database.";
    console.error(error);
  } finally {
    // Re-enable the button whether the fetch succeeds or fails
    jokeBtn.disabled = false;
  }
}