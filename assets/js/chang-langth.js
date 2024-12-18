// Select buttons
const arabicBtn = document.getElementById("arabic-btn");
const englishBtn = document.getElementById("english-btn");

// Load the selected language from localStorage (default is English)
document.addEventListener("DOMContentLoaded", () => {
  const savedLanguage = localStorage.getItem("selectedLanguage") || "ar";
  toggleLanguage(savedLanguage);
});

// Add event listeners to change language
arabicBtn.addEventListener("click", () => toggleLanguage("ar"));
englishBtn.addEventListener("click", () => toggleLanguage("en"));

// Function to toggle language
function toggleLanguage(lang) {
  if (lang === "ar") {
    // Show Arabic button, hide English button
    arabicBtn.style.display = "none";
    englishBtn.style.display = "block";

    // Set page language to Arabic
    document.documentElement.setAttribute("lang", "ar");
    document.body.dir = "rtl";
  } else if (lang === "en") {
    // Show English button, hide Arabic button
    arabicBtn.style.display = "block";
    englishBtn.style.display = "none";

    // Set page language to English
    document.documentElement.setAttribute("lang", "en");
    document.body.dir = "ltr";
  }

  // Save the selected language in localStorage
  localStorage.setItem("selectedLanguage", lang);

  // Optional: Update page content dynamically if needed
  updateContentLanguage(lang);
}
// تحديد العناصر داخل الشجرة
const branches = document.querySelectorAll('.branch');
const tooltip = document.getElementById('tooltip');

branches.forEach(branch => {
  branch.addEventListener('mouseenter', (e) => {
    const info = branch.getAttribute('data-info');
    tooltip.textContent = info;
    tooltip.style.display = 'block';
    tooltip.style.top = `${e.pageY + 10}px`;
    tooltip.style.left = `${e.pageX + 10}px`;
  });

  branch.addEventListener('mousemove', (e) => {
    tooltip.style.top = `${e.pageY + 10}px`;
    tooltip.style.left = `${e.pageX + 10}px`;
  });

  branch.addEventListener('mouseleave', () => {
    tooltip.style.display = 'none';
  });
});

