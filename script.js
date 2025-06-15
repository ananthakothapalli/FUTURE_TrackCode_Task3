const homeSongs = [
  { title: "Neon Dreams", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" },
  { title: "AI Pulse", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3" },
  { title: "Digital Heartbeat", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3" },
  { title: "Synth Horizon", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3" },
  { title: "Cyber Groove", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3" },
  { title: "Botwave", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3" },
  { title: "Echo Synth", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3" },
  { title: "Midnight Vibe", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3" },
  { title: "Skyline Drive", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3" },
  { title: "Robo Raga", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3" }
];

const playlistSongs = [
  { title: "Orbit Tune", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-11.mp3" },
  { title: "AI Love", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-12.mp3" },
  { title: "Digital Rain", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-13.mp3" },
  { title: "Synth Storm", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-14.mp3" },
  { title: "Cloud Runner", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-15.mp3" },
  { title: "Binary Beats", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-16.mp3" },
  { title: "Quantum Drop", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-17.mp3" },
  { title: "Retro Drive", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-18.mp3" },
  { title: "Laser Lights", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-19.mp3" },
  { title: "Future Bass", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-20.mp3" },
  { title: "Echo Chamber", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-21.mp3" },
  { title: "Neural Flow", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-22.mp3" },
  { title: "Bitcrush Bloom", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-23.mp3" },
  { title: "Voltage Vibe", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-24.mp3" },
  { title: "Cyber Pulse", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-25.mp3" }
];

const audioPlayer = document.getElementById("audioPlayer");
const currentTrack = document.getElementById("currentTrack");

let favorites = JSON.parse(localStorage.getItem("favorites") || "[]");

function generateSongs(id, songs, allowFav = false) {
  const container = document.getElementById(id);
  container.innerHTML = "";
  songs.forEach((song) => {
    const isFav = favorites.includes(song.title);
    const div = document.createElement("div");
    div.className = "song-card";
    div.innerHTML = `
      <img src="https://picsum.photos/seed/${encodeURIComponent(song.title)}/300/300" />
      <h3>${song.title}</h3>
      <p>by SynthBot</p>
      <button class="${isFav ? 'favorited' : ''}" onclick="toggleFav(this, '${song.title}')">
        ${isFav ? '💚 Favorited' : '❤️ Favorite'}
      </button>
      <button onclick="playSong('${song.src}', '${song.title}')">▶️ Play</button>
    `;
    container.appendChild(div);
  });
  updateFavCount();
}

function toggleFav(btn, title) {
  if (favorites.includes(title)) {
    favorites = favorites.filter(s => s !== title);
    btn.classList.remove("favorited");
    btn.textContent = "❤️ Favorite";
  } else {
    favorites.push(title);
    btn.classList.add("favorited");
    btn.textContent = "💚 Favorited";
  }
  localStorage.setItem("favorites", JSON.stringify(favorites));
  updateFavCount();
}

function updateFavCount() {
  document.getElementById("favCount").textContent = favorites.length;
}

function playSong(src, title) {
  audioPlayer.src = src;
  audioPlayer.play();
  currentTrack.textContent = `🎵 Now Playing: ${title}`;
}

function showSection(id) {
  document.querySelectorAll(".section").forEach(sec => sec.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

generateSongs("homeSongs", homeSongs);
generateSongs("playlistSongs", playlistSongs, true);
