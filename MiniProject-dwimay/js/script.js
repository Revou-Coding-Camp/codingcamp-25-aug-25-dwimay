//WELCOME TEXT  
window.addEventListener("DOMContentLoaded", () => {
  let name = prompt("Masukkan Nama Anda:");
  if (name && name.trim() !== "") {
    document.getElementById("welcome-text").textContent = `Hi ${name}, Welcome To Website`;
  }
});

//Tahun otomatis
document.getElementById("year").textContent = new Date().getFullYear();

//Form handler 
document.getElementById("message-form").addEventListener("submit", function(e) {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const dob = document.getElementById("dob").value;
  const gender = document.querySelector('input[name="gender"]:checked')?.value || "";
  const message = document.getElementById("message-text").value;

  document.getElementById("output").innerHTML = `
    <h3>Hasil Input</h3>
    <p><strong>Nama:</strong> ${name}</p>
    <p><strong>Tanggal Lahir:</strong> ${dob}</p>
    <p><strong>Jenis Kelamin:</strong> ${gender}</p>
    <p><strong>Pesan:</strong> ${message}</p>
  `;
});
