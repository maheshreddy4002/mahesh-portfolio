// Array of roles to display
const roles = ["WEB DEVELOPER", "AI SPECIALIST"];
let index = 0;
const typingElement = document.getElementById("typing");

// Function to cycle through the roles
function showRole() {
  typingElement.textContent = roles[index];
  index = (index + 1) % roles.length;
}
// Initial role display
showRole();
// Update the role every 2 seconds
setInterval(showRole, 2000);

