const app = document.getElementById('app');

const lyrics = [
  { time: 17, text: 'Mula pagbasa at pagsulat' },
  { time: 21, text: 'Hanggang matuto nang magbilang' },
  { time: 25, text: 'Palagi niyong ginagabayan' },
  { time: 28, text: 'Aming kamusmusan' },
  { time: 33, text: 'Munti naming kaisipan' },
  { time: 37, text: 'Unti-unting dinidiligan' },
  { time: 41, text: 'Karunungang inyong binuksan' },
  { time: 45, text: 'Hindi mapapantayan' },
  { time: 50, text: 'Kaya naman ngayong araw na ito' },
  { time: 53, text: 'Pasalamatan ang ating guro' },
  { time: 57, text: 'Hindi matatawaran ang mga aral at sakripisyo nyo' },
  { time: 67, text: 'Salamat sa inyo aming guro' },
  { time: 71, text: 'Aming guro' },
  { time: 73, text: 'Aming guro' },
  { time: 85, text: 'Palagi niyong tinutugunan' },
  { time: 89, text: 'Propesyon na sinumpaan' },
  { time: 93, text: 'Ang bayan ay paglilingkuran' },
  { time: 96, text: 'Kahit pa mahirapan' },
  { time: 101, text: 'Tumatayong mga magulang' },
  { time: 105, text: 'Habang kami\'y nasa paaralan' },
  { time: 109, text: 'Itinuwid ang kamalian' },
  { time: 112, text: 'Hindi kami sinukuan' },
  { time: 117, text: 'Kaya naman ngayong araw na ito' },
  { time: 122, text: 'Pasalamatan ang ating guro' },
  { time: 125, text: 'Hindi matatawaran ang mga aral at sakripisyo nyo' },
  { time: 135, text: 'Kaya naman ngayong araw na ito' },
  { time: 139, text: 'Pasalamatan ang ating guro' },
  { time: 143, text: 'Hindi matatawaran ang mga aral at sakripisyo nyo' },
  { time: 153, text: 'Salamat sa inyo aming guro' },
  { time: 155, text: 'Aming guro' },
  { time: 157, text: 'Aming guro' }
];

const home = () => `
  <section class="hero">
    <div class="hero-in">
      <div class="hero-txt">
        <small>HAPPY</small>
        <h1>Teacher's Day!</h1>
        <p>Thank you for every lesson, every encouragement, and every moment you spent helping us grow. Your guidance will always be remembered.</p>
      </div>

      <div class="stack">
        <div class="mug">♥</div>
        <span class="sun">☀</span>
        <span class="book b1">Teach</span>
        <span class="book b2">Inspire</span>
        <span class="book b3">Change Lives</span>
      </div>
    </div>
  </section>

  <main>
    <div class="cards">
      <div class="card c1">
        <div class="ic">💌</div>
        <h2>Message</h2>
        <p>Send a heartfelt message<br>for your teacher.</p>
        <a class="btn" href="#/message">View</a>
      </div>

      <div class="card c2">
        <div class="ic">🖼️</div>
        <h2>Image</h2>
        <p>Share a special image<br>for Teacher's Day.</p>
        <a class="btn" href="#/image">View</a>
      </div>

      <div class="card c3">
        <div class="ic">🎵</div>
        <h2>Audio</h2>
        <p>Play a voice message<br>or an audio greeting.</p>
        <a class="btn" href="#/audio">View</a>
      </div>
    </div>

    <div class="foot"><i></i><b>♥</b><i></i></div>
  </main>
`;

const message = () => `
  <div class="page">
    <a class="back" href="#/">Back home</a>
    <h2>Message</h2>
    <p>Teacher's Day message for a very special mentor.</p>

    <div class="panel c1">
      <button class="note message-toggle" type="button" data-message-title="Ma'am Vanessa Lyn P. Ernacio" data-message-body="Maraming salamat po sa inyong walang sawang pagtuturo, pag-unawa, at paggabay sa amin. Hindi lang po kayo nagtuturo ng mga aralin, kundi tinutulungan din ninyo kaming maging mas mabuting tao. Salamat po sa bawat oras, pagod, at pasensya na ibinibigay ninyo para sa amin. Hinding-hindi po namin makakalimutan ang mga aral at inspirasyong iniwan ninyo sa amin. Maligayang Araw ng mga Guro, Ma'am Vanessa! Maraming salamat po sa lahat. ❤️🌷" aria-label="Open message in full size">
        <p><strong>Ma'am Vanessa Lyn P. Ernacio,</strong></p>

        <p>Maraming salamat po sa inyong walang sawang pagtuturo, pag-unawa, at paggabay sa amin. Hindi lang po kayo nagtuturo ng mga aralin, kundi tinutulungan din ninyo kaming maging mas mabuting tao.</p>

        <p>Salamat po sa bawat oras, pagod, at pasensya na ibinibigay ninyo para sa amin. Hinding-hindi po namin makakalimutan ang mga aral at inspirasyong iniwan ninyo sa amin.</p>

        <p><strong>Maligayang Araw ng mga Guro, Ma'am Vanessa! Maraming salamat po sa lahat.</strong> ❤️🌷</p>
      </button>
      <div class="view-hint">Click to view</div>
    </div>
  </div>

  <div class="image-modal" id="messageModal" aria-hidden="true">
    <div class="image-modal-backdrop" data-close="true"></div>
    <div class="image-modal-content message-modal-content" role="dialog" aria-modal="true" aria-label="Expanded message view">
      <button class="image-modal-close" type="button" aria-label="Close expanded message">✕</button>
      <div class="message-expanded-title" id="messageExpandedTitle"></div>
      <div class="message-expanded-body" id="messageExpandedBody"></div>
    </div>
  </div>
`;

const image = () => `
  <div class="page">
    <a class="back" href="#/">Back home</a>
    <h2>Image</h2>
    <p>Teacher's Day posters for Ma'am Vanessa.</p>

    <div class="panel c2">
      <div id="show" class="gallery">
        <button class="frame image-toggle" type="button" data-image="Screenshot 2026-10-05 055552.png" data-caption="Happy Teacher's Day!" aria-label="View Teacher's Day poster 1 in full size">
          <img src="Screenshot 2026-10-05 055552.png" alt="Teacher's Day poster 1">
          <span>Happy Teacher's Day!</span>
        </button>
        <button class="frame image-toggle" type="button" data-image="Screenshot 2026-10-05 055608.png" data-caption="Thank you, Ma'am Vanessa!" aria-label="View Teacher's Day poster 2 in full size">
          <img src="Screenshot 2026-10-05 055608.png" alt="Teacher's Day poster 2">
          <span>Thank you, Ma'am Vanessa!</span>
        </button>
      </div>
    </div>
  </div>

  <div class="image-modal" id="imageModal" aria-hidden="true">
    <div class="image-modal-backdrop" data-close="true"></div>
    <div class="image-modal-content" role="dialog" aria-modal="true" aria-label="Expanded image view">
      <button class="image-modal-close" type="button" aria-label="Close expanded image">✕</button>
      <img id="modalImage" src="" alt="Expanded image view">
      <div id="modalCaption" class="image-modal-caption"></div>
    </div>
  </div>
`;

const audio = () => `
  <div class="page">
    <a class="back" href="#/">Back home</a>

    <div class="audio-card">
      <div class="audio-hero">
        <img src="Screenshot 2026-10-05 055608.png" alt="Teacher's Day greeting">
      </div>

      <div class="audio-content">
        <span class="audio-badge">🎉 Teacher's Day</span>
        <h2>For Ma'am Vanessa</h2>
        <p class="audio-note">
          Thank you for your patience, guidance, and love. We are grateful for every lesson you've taught us.
        </p>

        <div class="audio-box">
          <div class="audio-icon">🎵</div>
          <audio id="teacher-audio" controls preload="metadata">
            <source src="Guro.mp3" type="audio/mpeg">
            Your browser does not support the audio element.
          </audio>
        </div>

        <div class="lyrics-panel">
          <div class="lyrics-title">Lyrics</div>
          <div class="lyrics-list">
            ${lyrics.map((line, index) => `<p class="lyric-line" data-index="${index}">${line.text}</p>`).join('')}
          </div>
        </div>

        <p class="audio-caption">A special thank you from your students.</p>
      </div>
    </div>
  </div>
`;

function imageInit() {
  const modal = document.getElementById('imageModal');
  const modalImage = document.getElementById('modalImage');
  const modalCaption = document.getElementById('modalCaption');
  const closeButtons = document.querySelectorAll('.image-modal-close');

  if (!modal || !modalImage || !modalCaption) return;

  const openModal = (src, caption) => {
    modalImage.src = src;
    modalCaption.textContent = caption;
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');
  };

  const closeModal = () => {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('modal-open');
  };

  document.querySelectorAll('.image-toggle').forEach((button) => {
    button.addEventListener('click', () => {
      openModal(button.dataset.image, button.dataset.caption);
    });
  });

  closeButtons.forEach((button) => {
    button.addEventListener('click', closeModal);
  });

  modal.addEventListener('click', (event) => {
    if (event.target.matches('[data-close="true"]')) {
      closeModal();
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && modal.classList.contains('open')) {
      closeModal();
    }
  });
}

function messageInit() {
  const modal = document.getElementById('messageModal');
  const messageTitle = document.getElementById('messageExpandedTitle');
  const messageBody = document.getElementById('messageExpandedBody');
  const closeButtons = document.querySelectorAll('.image-modal-close');

  if (!modal || !messageTitle || !messageBody) return;

  const openModal = (title, body) => {
    messageTitle.textContent = title;
    messageBody.innerHTML = body
      .split('\n')
      .map((paragraph) => `<p>${paragraph}</p>`)
      .join('');
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');
  };

  const closeModal = () => {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('modal-open');
  };

  document.querySelectorAll('.message-toggle').forEach((button) => {
    button.addEventListener('click', () => {
      openModal(button.dataset.messageTitle, button.dataset.messageBody);
    });
  });

  closeButtons.forEach((button) => {
    button.addEventListener('click', closeModal);
  });

  modal.addEventListener('click', (event) => {
    if (event.target.matches('[data-close="true"]')) {
      closeModal();
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && modal.classList.contains('open')) {
      closeModal();
    }
  });
}

function audioInit() {
  const audio = document.getElementById('teacher-audio');
  if (!audio) return;

  const lyricLines = [...document.querySelectorAll('.lyric-line')];

  const syncLyrics = () => {
    const currentTime = Number(audio.currentTime || 0);
    let activeIndex = -1;

    if (currentTime >= lyrics[0].time) {
      for (let i = 0; i < lyrics.length; i += 1) {
        if (currentTime >= lyrics[i].time) {
          activeIndex = i;
        }
      }
    }

    lyricLines.forEach((line, index) => {
      const isActive = index === activeIndex;
      const isPast = index < activeIndex;
      line.classList.toggle('active', isActive);
      line.classList.toggle('past', isPast);
      line.classList.toggle('upcoming', !isActive && !isPast);
    });
  };

  audio.addEventListener('timeupdate', syncLyrics);
  audio.addEventListener('loadedmetadata', syncLyrics);
  syncLyrics();
}

const routes = {
  '': [home, null],
  message: [message, messageInit],
  image: [image, imageInit],
  audio: [audio, audioInit]
};

function render() {
  const key = location.hash.replace(/^#\/?/, '');
  const [view, initializer] = routes[key] || routes[''];

  app.innerHTML = view();
  if (initializer) initializer();

  document.querySelectorAll('nav a.t').forEach((link) => {
    link.classList.toggle('on', link.dataset.r === key);
  });

  window.scrollTo(0, 0);
}

addEventListener('hashchange', render);
render();
