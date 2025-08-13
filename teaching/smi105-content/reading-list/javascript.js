
<script>

//const checkbox = document.getElementById("checkbox")
//checkbox.addEventListener("change", () => {
//  document.body.classList.toggle("dark")
//})

function setThemeOnLoad() {
  // Always start in light mode
  document.documentElement.classList.remove('dark');
  document.documentElement.classList.add('light');
  // Reset the checkbox to unchecked
  document.getElementById('checkbox').checked = false;
  // Overwrite localStorage so it starts fresh
  localStorage.setItem('mode', 'light');
}

// function to toggle between light and dark mode
// adapted from https://github.com/dandalpiaz/markdown-pages
function toggleLight(forceDark) {
  // get current theme (default to "light" if not found)
  let current_theme = localStorage.getItem('mode') || 'light';
  // set new theme to "dark" if current is "light"
  let new_theme = (current_theme === 'light') ? 'dark' : 'light';
  // special case: if "forceDark", set new theme to "dark"
  if (forceDark) {
    current_theme = 'light';
    new_theme = 'dark';
  }
  // HTML document element
  const htmlEl = document.documentElement;
  // add class name for new theme to HTML element
  htmlEl.classList.add(new_theme);
  // remove class name of old theme from HTML element
  htmlEl.classList.remove(current_theme);

  // set local storage to new theme
  localStorage.setItem('mode', new_theme);

  // update theme switcher toggle with id of "light-toggle"
  if (new_theme === 'dark') {
    document.getElementById('light-toggle').innerHTML = '🌗 Light';
  } else {
    document.getElementById('light-toggle').innerHTML = '🌗 Dark';
  }
}

// set theme on load, adapted from https://radek.io/posts/secret-darkmode-toggle/
// first check "prefers-color-scheme"
// const osPreference = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
// next check local storage
const preferredTheme = "light";
// if preferred theme is dark, force theme change, else leave as-is
if (preferredTheme === 'dark') {
  toggleLight(true);
}

document.addEventListener('DOMContentLoaded', setThemeOnLoad);

</script>