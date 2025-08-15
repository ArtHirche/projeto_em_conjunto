  const playArtBtn = document.getElementById('play-art-sound');
  let audioArt = null;
  if (playArtBtn) {
    playArtBtn.addEventListener('click', function () {
      if (!audioArt) {
        audioArt = document.createElement('audio');
        audioArt.id = 'audio-art';
        audioArt.src = './assets/sounds/HINO DO PALMEIRAS.mp3';
        document.body.appendChild(audioArt);
      }
      if (audioArt.paused) {
        audioArt.currentTime = 0;
        audioArt.play();
        playArtBtn.innerHTML = '⏹️ Parar<br><span style="font-size:0.8em; color:#fff; opacity:0.7;"></span>';
      } else {
        audioArt.pause();
        playArtBtn.innerHTML = '▶️ Tocar Hino<br><span style="font-size:0.8em; color:#fff; opacity:0.7;"></span>';
      }
    });
    if (!audioArt) {
      audioArt = document.createElement('audio');
      audioArt.id = 'audio-art';
      audioArt.src = './assets/sounds/HINO DO PALMEIRAS.mp3';
      document.body.appendChild(audioArt);
    }
    audioArt.addEventListener('ended', function () {
      playArtBtn.innerHTML = '▶️ Tocar Hino<br><span style="font-size:0.8em; color:#fff; opacity:0.7;">assets/sounds/HINO DO PALMEIRAS.mp3</span>';
    });
  }
// filepath: simple-web-project/assets/js/script.js
document.addEventListener("DOMContentLoaded", function () {
  // Sidebar toggle logic
  const sidebar = document.getElementById("sidebar");
  const sidebarToggle = document.getElementById("sidebarToggle");
  sidebarToggle.addEventListener("click", function () {
    sidebar.classList.toggle("collapsed");
  });

  // Smooth scroll for sidebar links
  const links = document.querySelectorAll(".sidebar a");
  links.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      const targetSection = document.querySelector(targetId);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // Dark mode toggle logic
  const darkmodeToggle = document.getElementById("darkmodeToggle");
  const darkmodeIcon = document.getElementById("darkmodeIcon");
  darkmodeToggle.addEventListener("click", function () {
    document.body.classList.toggle("darkmode");
    if (document.body.classList.contains("darkmode")) {
      darkmodeIcon.textContent = "☀️";
    } else {
      darkmodeIcon.textContent = "🌙";
    }
  });

  // Amigos folder logic
  const amigoBtns = document.querySelectorAll(".amigo-btn");
  const amigoContents = document.querySelectorAll(".amigo-content");
  amigoBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      // Remove active from all buttons and hide all contents
      amigoBtns.forEach((b) => b.classList.remove("active"));
      amigoContents.forEach((c) => c.classList.remove("active"));
      // Add active to clicked button and show corresponding content
      this.classList.add("active");
      const amigo = this.getAttribute("data-amigo");
      const content = document.getElementById("amigo-" + amigo);
      if (content) content.classList.add("active");
    });
  });

  // Fechar mini seção do amigo
  const amigoCloseBtns = document.querySelectorAll(".amigo-close");
  amigoCloseBtns.forEach((closeBtn) => {
    closeBtn.addEventListener("click", function (e) {
      const content = this.closest(".amigo-content");
      if (content) content.classList.remove("active");
      // Remove active do botão correspondente
      const id = content.id.replace("amigo-", "");
      amigoBtns.forEach((btn) => {
        if (btn.getAttribute("data-amigo") === id)
          btn.classList.remove("active");
      });
    });
  });
});
