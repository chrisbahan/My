function showSurprise1() {
  document.getElementById('surprise1').style.display = 'block';
}

function showSurprise2() {
  document.getElementById('surprise2').style.display = 'block';
}

function showSurprise3() {
  document.getElementById('surprise3').style.display = 'block';
  launchFloatingHearts();
}

// Play background music on button click
document.getElementById('playMusicBtn').addEventListener('click', () => {
  const music = document.getElementById('bg-music');
  music.play();
  document.getElementById('playMusicBtn').style.display = 'none';
});

// Floating hearts and balloons
function launchFloatingHearts() {
  const container = document.getElementById('floating-hearts-container');

  for (let i = 0; i < 40; i++) {
    const element = document.createElement('div');
    const type = Math.random() > 0.5 ? 'heart' : 'balloon';
    element.classList.add(type);
    element.style.left = Math.random() * 100 + 'vw';
    element.style.animationDuration = (Math.random() * 5 + 6) + 's';
    container.appendChild(element);

    // Remove after animation ends
    setTimeout(() => {
      element.remove();
    }, 12000);
  }
}
