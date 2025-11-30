
const body = document.body;
const toggleBtn = document.getElementById("toggle-theme");

// Leer tema guardado (si existe)
const savedTheme = localStorage.getItem("theme");

function setIcon(isDark) {
  if (!toggleBtn) return;
  toggleBtn.textContent = isDark ? "☀️" : "🌙";
}

// Aplicar tema guardado al cargar
if (savedTheme === "dark") {
  body.classList.add("dark");
  setIcon(true);
} else {
  setIcon(false);
}

if (toggleBtn) {
  toggleBtn.addEventListener("click", () => {
    const isDarkNow = body.classList.toggle("dark");
    setIcon(isDarkNow);
    localStorage.setItem("theme", isDarkNow ? "dark" : "light");
  });
}