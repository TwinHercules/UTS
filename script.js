function toggleMode() {
  document.body.classList.toggle("dark-mode");
  document.getElementById("moon-icon").classList.toggle("hidden");
  document.getElementById("sun-icon").classList.toggle("hidden");
  document.getElementById("desk-dark-1").classList.toggle("text-white");
  document.getElementById("desk-dark-2").classList.toggle("text-white");
  document.getElementById("desk-dark-3").classList.toggle("text-white");
  document.getElementById("text-1").classList.toggle("text-black");
  document.getElementById("text-2").classList.toggle("text-black");
  document.getElementById("text-3").classList.toggle("text-black");
  document.getElementById("text-4").classList.toggle("text-black");
  document.getElementById("price").classList.toggle("text-black");
}

function validasi() {
  const email = document.getElementById("email").value.trim();
  const nama = document.getElementById("nama").value.trim();
  const password = document.getElementById("password").value.trim();

  if (email === "" || nama === "" || password === "") {
    alert("Semua field harus diisi.");
    return false;
  }

  if (password.length < 6) {
    alert("Password harus diisi dan minimal 6 karakter.");
    return false;
  }

  return true;
}
