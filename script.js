const formOpenBtn = document.querySelector("#form-open"),
  home = document.querySelector(".home"),
  formContainer = document.querySelector(".form_container"),
  formCloseBtn = document.querySelector(".form_close"),
  signupBtn = document.querySelector("#signup"),
  loginBtn = document.querySelector("#login"),
  pwShowHide = document.querySelectorAll(".pw_hide");

formOpenBtn.addEventListener("click", () => home.classList.add("show"));
formCloseBtn.addEventListener("click", () => home.classList.remove("show"));

pwShowHide.forEach((icon) => {
  icon.addEventListener("click", () => {
    let getPwInput = icon.parentElement.querySelector("input");
    if (getPwInput.type === "password") {
      getPwInput.type = "text";
      icon.classList.replace("uil-eye-slash", "uil-eye");
    } else {
      getPwInput.type = "password";
      icon.classList.replace("uil-eye", "uil-eye-slash");
    }
  });
});

signupBtn.addEventListener("click", (e) => {
  e.preventDefault();
  formContainer.classList.add("active");
});
loginBtn.addEventListener("click", (e) => {
  e.preventDefault();
  formContainer.classList.remove("active");
});
// animation loader
// Hide loader after page load
window.addEventListener('load', () => {
  const loader = document.getElementById('loader');
  loader.classList.add('hidden');
});



// landing page

// Function to start the workbook (show the workbook sections)
function startWorkbook() {
  // Hide the landing page and show the workbook
  document.getElementById('landing_pg').style.display = 'none';
  document.getElementById('workbook').style.display = 'block';
  showSection(1); // Show the first section when starting
}

// Function to show a specific section of the workbook
function showSection(sectionNumber) {
  // Hide all sections first
  var sections = document.querySelectorAll('.section');
  sections.forEach(function(section) {
    section.style.display = 'none';
  });

  // Show the selected section
  document.getElementById('section' + sectionNumber).style.display = 'block';
}

// Function to go to a specific section
function nextSection(sectionNumber) {
  showSection(sectionNumber);
}

// Function to go back to a previous section
function prevSection(sectionNumber) {
  showSection(sectionNumber);
}

// Function to go back to the home page
function goHomePage() {
  // Hide the workbook and show the landing page
  document.getElementById('workbook').style.display = 'none';
  document.getElementById('landing_pg').style.display = 'block';
}

// Function to handle the form submission
function submitForm() {
  // Get values from all the sections (textarea fields)
  const clientGoal = document.getElementById('client-goal').value;
  const clientProblem = document.getElementById('client-problem').value;
  const mentorUnderstanding = document.getElementById('mentor-understanding').value;
  const cta = document.getElementById('cta').value;

  // Check if all fields have been filled out (basic validation)
  if (!clientGoal || !clientProblem || !mentorUnderstanding || !cta) {
    alert('Please fill out all sections before submitting.');
    return; // Prevent submission if fields are empty
  }
  alert('form submission successful')
  // Optional: You can save the form data here (e.g., send it to a server)
  // For now, just log it to the console
  console.log('Client Goal:', clientGoal);
  console.log('Client Problem:', clientProblem);
  console.log('Mentor Understanding:', mentorUnderstanding);
  console.log('CTA:', cta);

  // Hide the workbook and show the completion message
  document.getElementById("section4").style.display="none"
  document.getElementById('workbook').style.display = 'block';
  document.getElementById('completionMessage').style.display = 'block';
}

