import './style.css'

const BASE_URL = import.meta.env.BASE_URL;

const guides = {
  barra: {
    title: "Atención en Barra",
    steps: [
      {
        num: 1,
        title: "Puesta en Escena",
        desc: "El primer paso es la Mise en Place. Asegúrate de que la barra esté impecable, sin restos de servicios anteriores. Limpia el mostrador inmediatamente tras cada cliente.",
        image: `${BASE_URL}assets/barra_escena_1_2_3_v4_1768983099787.png`,
        panelClass: "panel-row-1"
      },
      {
        num: 2,
        title: "Bienvenida Instantánea",
        desc: "Contacto visual y saludo inmediato. Un '¡Hola, buenas!' marca la diferencia. Si estás ocupado, reconoce al cliente con un gesto para reducir su ansiedad de espera.",
        image: `${BASE_URL}assets/barra_escena_1_2_3_v4_1768983099787.png`,
        panelClass: "panel-row-2"
      },
      {
        num: 3,
        title: "Elaboración Visual",
        desc: "El cliente 'come con los ojos'. Cuida el tiraje de cerveza o el arte en el café. No toques nunca los bordes superiores de los vasos.",
        image: `${BASE_URL}assets/barra_escena_1_2_3_v4_1768983099787.png`,
        panelClass: "panel-row-3"
      },
      {
        num: 4,
        title: "Servicio de Cortesía",
        desc: "Sirve siempre con posavasos y un pequeño aperitivo de cortesía. Este detalle de valor percibido incentiva la estancia y el consumo.",
        image: `${BASE_URL}assets/barra_escena_4_5_6_v4ops_1768983142616.png`,
        panelClass: "panel-custom-4"
      },
      {
        num: 5,
        title: "Venta Sugestiva",
        desc: "¿Acompañamos ese vino con una ración de jamón? Ofrece productos estrella de forma amable y natural.",
        image: `${BASE_URL}assets/barra_escena_4_5_6_v4ops_1768983142616.png`,
        panelClass: "panel-custom-5"
      },
      {
        num: 6,
        title: "Cobro y Despedida",
        desc: "El cobro en barra debe ser el más rápido del local. Agradece la visita, invita a volver y limpia el espacio instantáneamente.",
        image: `${BASE_URL}assets/barra_escena_4_5_6_v4ops_1768983142616.png`,
        panelClass: "panel-custom-6"
      }
    ]
  },
  mesa: {
    title: "Servicio en Mesa y Terraza",
    steps: [
      {
        num: 1,
        title: "Montaje de Mesa",
        desc: "La escena debe ser perfecta: mantelería impecable, copas brillantes y cero ruidos innecesarios antes de abrir sala.",
        image: `${BASE_URL}assets/mesa_escena_1_2_3_4_v4ops_1768983200740.png`,
        panelClass: "panel-grid-1"
      },
      {
        num: 2,
        title: "Recepción y Acomodo",
        desc: "Bienvenida cálida mencionando 'Ñam'. Acompaña a los clientes a su mesa y presenta la carta abierta.",
        image: `${BASE_URL}assets/mesa_escena_1_2_3_4_v4ops_1768983200740.png`,
        panelClass: "panel-grid-2"
      },
      {
        num: 3,
        title: "Bebida en 2 Minutos",
        desc: "Toma de comanda de bebidas rápida. Ritual del vino: muestra la etiqueta y da a probar antes de servir por la derecha.",
        image: `${BASE_URL}assets/mesa_escena_1_2_3_4_v4ops_1768983200740.png`,
        panelClass: "panel-grid-3"
      },
      {
        num: 4,
        title: "Toma de Comanda",
        desc: "Postura erguida y profesional. Pregunta siempre por alérgenos y sugiere platos usando adjetivos sensoriales.",
        image: `${BASE_URL}assets/mesa_escena_1_2_3_4_v4ops_1768983200740.png`,
        panelClass: "panel-grid-4"
      },
      {
        num: 5,
        title: "Servicio de Platos",
        desc: "Comida por la izquierda, retirada por la derecha. Coordinación perfecta: nadie come solo, todos empiezan a la vez.",
        image: `${BASE_URL}assets/mesa_escena_5_6_7_v4ops_1768983254415.png`,
        panelClass: "panel-row-1"
      },
      {
        num: 6,
        title: "Cierre Dulce",
        desc: "Desbarase total y limpieza de migas. Ofrece postres y cafés para redondear la experiencia del cliente.",
        image: `${BASE_URL}assets/mesa_escena_5_6_7_v4ops_1768983254415.png`,
        panelClass: "panel-row-2"
      },
      {
        num: 7,
        title: "Cuenta y Despedida",
        desc: "Entrega la cuenta solo al pedirla. Despídete con una sonrisa genuina e invita a repetir la experiencia.",
        image: `${BASE_URL}assets/mesa_escena_5_6_7_v4ops_1768983254415.png`,
        panelClass: "panel-row-3"
      }
    ]
  }
};

const quizData = [
  {
    question: "¿En cuánto tiempo debe servirse la bebida en mesa?",
    answer: "En menos de 2 minutos desde el acomodo."
  },
  {
    question: "¿Por qué lado se sirven los platos y por cuál se retiran?",
    answer: "Se sirven por la izquierda y se retiran por la derecha."
  },
  {
    question: "¿Cuál es la regla de oro si estás ocupado al entrar un cliente en barra?",
    answer: "Reconocer su presencia con contacto visual o un gesto de manos inmediato."
  },
  {
    question: "¿Qué detalle 'Ñam' no puede faltar al servir una bebida?",
    answer: "El posavasos y el pequeño aperitivo de cortesía."
  },
  {
    question: "¿Qué pregunta es obligatoria antes de anotar la comanda de comida?",
    answer: "Preguntar siempre por posibles alergias o intolerancias alimentarias."
  }
];

// DOM Elements
const menuHome = document.getElementById('menu-home');
const guideViewer = document.getElementById('guide-viewer');
const quizViewer = document.getElementById('quiz-viewer');
const guideContainer = document.getElementById('guide-container');
const quizContainer = document.getElementById('quiz-container');
const quizResults = document.getElementById('quiz-results');
const quizInstruction = document.getElementById('quiz-instruction');
const btnBack = document.getElementById('btn-back');
const btnBackQuiz = document.getElementById('btn-back-quiz');
const scrollProgress = document.getElementById('scroll-progress');
const btnThemeToggle = document.getElementById('btn-theme-toggle');
const btnInstallPwa = document.getElementById('btn-install-pwa');

// Quiz State
let currentQuizIndex = 0;
let quizScore = 0;

// Theme Controller
function initTheme() {
  const savedTheme = localStorage.getItem('theme') || 'dark';
  document.documentElement.setAttribute('data-theme', savedTheme);
  btnThemeToggle.textContent = savedTheme === 'light' ? '☀️' : '🌙';
}

btnThemeToggle.addEventListener('click', () => {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
  btnThemeToggle.textContent = newTheme === 'light' ? '☀️' : '🌙';
});

// View Navigation Utility (with View Transitions support)
function switchView(toView) {
  const performSwitch = () => {
    [menuHome, guideViewer, quizViewer].forEach(v => v.classList.remove('active'));
    toView.classList.add('active');
    window.scrollTo(0, 0);

    if (toView !== guideViewer) {
      scrollProgress.style.width = '0%';
    } else {
      updateScrollProgress();
    }
  };

  if (document.startViewTransition) {
    document.startViewTransition(performSwitch);
  } else {
    performSwitch();
  }
}

// Scroll Progress Tracker for Guides
function updateScrollProgress() {
  if (!guideViewer.classList.contains('active')) return;
  const scrollTop = window.scrollY || document.documentElement.scrollTop;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
  scrollProgress.style.width = `${progress}%`;
}

window.addEventListener('scroll', updateScrollProgress);
window.addEventListener('resize', updateScrollProgress);

// PWA Native Installation Prompter
let deferredPrompt;
window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;
  btnInstallPwa.style.display = 'block';
});

btnInstallPwa.addEventListener('click', async () => {
  if (!deferredPrompt) return;
  deferredPrompt.prompt();
  const { outcome } = await deferredPrompt.userChoice;
  console.log(`PWA install outcome: ${outcome}`);
  btnInstallPwa.style.display = 'none';
  deferredPrompt = null;
});

// Event Listeners for menu
document.querySelectorAll('.menu-card').forEach(card => {
  card.addEventListener('click', () => {
    const guideKey = card.getAttribute('data-guide');
    if (guideKey === 'quiz') {
      startNewQuiz();
    } else {
      showGuide(guideKey);
    }
  });
});

[btnBack, btnBackQuiz].forEach(btn => {
  btn.addEventListener('click', () => {
    switchView(menuHome);
  });
});

// Guides Renderer
function showGuide(key) {
  const guide = guides[key];
  guideContainer.innerHTML = '';

  guide.steps.forEach(step => {
    const stepEl = document.createElement('div');
    stepEl.className = 'step-container';
    stepEl.innerHTML = `
      <div class="step-header">
        <span class="step-num">Paso ${step.num}</span>
        <h2 class="step-title">${step.title}</h2>
      </div>
      <p class="step-desc">${step.desc}</p>
      <div class="comic-panel ${step.panelClass}" style="background-image: url('${step.image}')"></div>
    `;
    guideContainer.appendChild(stepEl);
  });

  switchView(guideViewer);
}

// Gamified Quiz Engine
function startNewQuiz() {
  currentQuizIndex = 0;
  quizScore = 0;
  quizResults.style.display = 'none';
  quizContainer.style.display = 'flex';
  quizInstruction.style.display = 'block';
  
  renderQuizCard();
  switchView(quizViewer);
}

function renderQuizCard() {
  quizContainer.innerHTML = '';
  const item = quizData[currentQuizIndex];

  const card = document.createElement('div');
  card.className = 'flip-card';
  card.innerHTML = `
    <div class="flip-card-inner">
      <div class="flip-card-front">
        <p>${item.question}</p>
      </div>
      <div class="flip-card-back">
        <p>${item.answer}</p>
        <div class="quiz-actions">
          <button class="btn-quiz-feedback btn-quiz-yes" id="btn-answer-yes">👍 Sí, me la sabía</button>
          <button class="btn-quiz-feedback btn-quiz-no" id="btn-answer-no">👎 No, he fallado</button>
        </div>
      </div>
    </div>
  `;

  card.addEventListener('click', (e) => {
    // Solo girar si no se pulsó en un botón
    if (e.target.closest('.btn-quiz-feedback')) return;
    card.classList.toggle('flipped');
  });

  quizContainer.appendChild(card);

  // Botones de feedback del usuario
  const btnYes = card.querySelector('#btn-answer-yes');
  const btnNo = card.querySelector('#btn-answer-no');

  btnYes.addEventListener('click', (e) => {
    e.stopPropagation();
    quizScore++;
    nextQuizStep();
  });

  btnNo.addEventListener('click', (e) => {
    e.stopPropagation();
    nextQuizStep();
  });

  // Cambiar instrucción según el estado de la tarjeta
  const innerCard = card.querySelector('.flip-card-inner');
  const observer = new MutationObserver(() => {
    if (card.classList.contains('flipped')) {
      quizInstruction.textContent = "Valora con honestidad tu nivel de conocimiento:";
    } else {
      quizInstruction.textContent = `Pregunta ${currentQuizIndex + 1} de ${quizData.length}`;
    }
  });
  observer.observe(card, { attributes: true, attributeFilter: ['class'] });

  quizInstruction.textContent = `Pregunta ${currentQuizIndex + 1} de ${quizData.length}`;
}

function nextQuizStep() {
  currentQuizIndex++;
  if (currentQuizIndex < quizData.length) {
    renderQuizCard();
  } else {
    showQuizResults();
  }
}

function showQuizResults() {
  quizContainer.style.display = 'none';
  quizInstruction.style.display = 'none';
  quizResults.style.display = 'flex';

  const percentage = Math.round((quizScore / quizData.length) * 100);
  let rank = "";
  let feedback = "";

  if (percentage === 100) {
    rank = "🏆 Leyenda del Servicio";
    feedback = "¡Perfecto! Demuestras un dominio absoluto de la excelencia de Ñam. ¡Sigue inspirando al equipo!";
  } else if (percentage >= 80) {
    rank = "🥇 Experto de Sala";
    feedback = "¡Impresionante! Conoces muy bien el protocolo estándar. Solo te faltan unos pequeños detalles para la perfección.";
  } else if (percentage >= 60) {
    rank = "🥈 Ayudante Aventajado";
    feedback = "Vas por buen camino. Repasa las guías en barra o mesa para afianzar tus tiempos y mejorar la hospitalidad.";
  } else {
    rank = "🍼 Novato en Formación";
    feedback = "Te recomendamos volver a leer las guías del servicio. La atención y los tiempos son la clave del éxito en Ñam.";
  }

  quizResults.innerHTML = `
    <div class="results-score-circle">
      <span class="results-score-num">${quizScore}</span>
      <span class="results-score-total">de ${quizData.length}</span>
    </div>
    <h3 class="results-rank">${rank}</h3>
    <p class="results-feedback">${feedback}</p>
    <button class="btn-primary" id="btn-restart-quiz">Repetir Quiz</button>
  `;

  document.getElementById('btn-restart-quiz').addEventListener('click', startNewQuiz);

  if (percentage >= 80) {
    startConfetti();
  }
}

// Native Canvas Confetti Animation
function startConfetti() {
  const canvas = document.getElementById('confetti-canvas');
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  let particles = [];
  const colors = ['#ebd17c', '#be6000', '#8f9090', '#ffffff', '#ffeb3b', '#ff5722'];

  for (let i = 0; i < 100; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height - canvas.height,
      r: Math.random() * 6 + 4,
      d: Math.random() * canvas.height,
      color: colors[Math.floor(Math.random() * colors.length)],
      tilt: Math.random() * 10 - 5,
      tiltAngleIncremental: Math.random() * 0.07 + 0.02,
      tiltAngle: 0
    });
  }

  let animationId;
  let duration = 3000;
  let start = Date.now();

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    let active = false;
    particles.forEach((p, index) => {
      p.tiltAngle += p.tiltAngleIncremental;
      p.y += (Math.cos(p.d) + 3 + p.r / 2) / 2;
      p.x += Math.sin(p.tiltAngle);
      p.tilt = Math.sin(p.tiltAngle - index / 3) * 15;

      if (p.y < canvas.height) {
        active = true;
      }

      ctx.beginPath();
      ctx.lineWidth = p.r;
      ctx.strokeStyle = p.color;
      ctx.moveTo(p.x + p.tilt + p.r / 2, p.y);
      ctx.lineTo(p.x + p.tilt, p.y + p.tilt + p.r / 2);
      ctx.stroke();

      if (p.y > canvas.height && Date.now() - start < duration) {
        p.x = Math.random() * canvas.width;
        p.y = -20;
        p.tilt = Math.random() * 10 - 5;
      }
    });

    if (active || Date.now() - start < duration) {
      animationId = requestAnimationFrame(draw);
    } else {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      cancelAnimationFrame(animationId);
    }
  }

  const handleResize = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  };
  window.addEventListener('resize', handleResize);

  draw();
}

// Bootstrapping
initTheme();

// Service Worker Registration
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register(`${BASE_URL}sw.js`)
      .then((reg) => {
        console.log('Service Worker registrado con éxito en el ámbito:', reg.scope);
      })
      .catch((err) => {
        console.error('Fallo al registrar el Service Worker:', err);
      });
  });
}
