// Typewriter text content
const text = "It is time to find your zen.";

// Element where text will be displayed
const textElement = document.getElementById('typewriter-text');

// Function to simulate typewriter effect
function typeWriterEffect(txt, i = 0) {
    if (i < txt.length) {
        textElement.innerHTML += txt.charAt(i);
        i++;
        setTimeout(() => typeWriterEffect(txt, i), 100); // Adjust typing speed (in ms)
    }
}

// Start the typewriter effect
typeWriterEffect(text);