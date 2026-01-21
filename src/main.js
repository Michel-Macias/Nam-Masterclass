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
}

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
const btnBack = document.getElementById('btn-back');
const btnBackQuiz = document.getElementById('btn-back-quiz');

// Event Listeners
document.querySelectorAll('.menu-card').forEach(card => {
  card.addEventListener('click', () => {
    const guideKey = card.getAttribute('data-guide');
    if (guideKey === 'quiz') {
      showQuiz();
    } else {
      showGuide(guideKey);
    }
  });
});

[btnBack, btnBackQuiz].forEach(btn => {
  btn.addEventListener('click', () => {
    guideViewer.classList.remove('active');
    quizViewer.classList.remove('active');
    menuHome.classList.add('active');
    window.scrollTo(0, 0);
  });
});

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

  menuHome.classList.remove('active');
  guideViewer.classList.add('active');
  window.scrollTo(0, 0);
}

function showQuiz() {
  quizContainer.innerHTML = '';
  quizData.forEach(item => {
    const card = document.createElement('div');
    card.className = 'flip-card';
    card.innerHTML = `
      <div class="flip-card-inner">
        <div class="flip-card-front">
          <p>${item.question}</p>
        </div>
        <div class="flip-card-back">
          <p>${item.answer}</p>
        </div>
      </div>
    `;
    card.addEventListener('click', () => {
      card.classList.toggle('flipped');
    });
    quizContainer.appendChild(card);
  });

  menuHome.classList.remove('active');
  quizViewer.classList.add('active');
  window.scrollTo(0, 0);
}
