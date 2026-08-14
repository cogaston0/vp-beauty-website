(() => {
  const PHONE_DISPLAY = '(646) 735-1099';
  const PHONE_LINK = 'tel:6467351099';

  const text = {
    en: {
      title: 'Forever Young Assistant',
      status: 'Online',
      greeting: 'Hello! How can I help you today?',
      prompt: 'Choose a question or type your own.',
      placeholder: 'Type a message…',
      send: 'Send',
      open: 'Open chat',
      close: 'Close chat',
      questions: ['Services', 'Skin allergies', 'Products used', 'Book an appointment', 'Hours'],
      fallback: `I can help with services, appointments, hours, location, and phone information. You can also call <a href="${PHONE_LINK}">${PHONE_DISPLAY}</a>.`,
      services: 'Forever Young offers facial cleaning, facial rejuvenation, massages, and wellness treatments. Which service interests you?',
      booking: 'You can request an appointment through our booking form. <a href="contact.html">Book an appointment</a> or call <a href="' + PHONE_LINK + '">' + PHONE_DISPLAY + '</a>.',
      hours: 'We are open Monday–Friday from 10AM–8PM and Saturday–Sunday from 10AM–6PM. Services are by appointment.',
      location: 'We are located at 909 E 156 Street, Bronx, NY 10455.',
      phone: 'Call us at <a href="' + PHONE_LINK + '">' + PHONE_DISPLAY + '</a>.',
      facial: 'We offer professional facial cleaning and rejuvenation treatments. Visit the facial service pages for details, then request your appointment.',
      massage: 'We offer Swedish, deep tissue, hot stone, Thai, sports, aromatherapy, couples massage, reflexology, and body treatments.',
      allergy: 'If you have a known skin allergy, please tell us the allergen, affected products, and any previous reaction before your treatment. We recommend avoiding the suspected ingredient and having the specialist review every product before it touches your skin. A patch test may be appropriate, but it does not guarantee that a reaction will not occur. If you currently have swelling, trouble breathing, blistering, or a severe reaction, seek urgent medical care instead of receiving a cosmetic treatment.',
      products: 'Products vary by procedure and may include cleanser, exfoliant or enzyme peel, toner, serum, facial mask, moisturizer, massage cream or oil, and sunscreen. Before treatment, ask the specialist to show you the exact brand and ingredient list. Tell us about allergies, sensitive skin, ingredients you avoid, and previous reactions. We will not invent or promise a specific brand here.',
    },
    es: {
      title: 'Asistente de Forever Young',
      status: 'En línea',
      greeting: '¡Hola! ¿Cómo puedo ayudarte hoy?',
      prompt: 'Elige una pregunta o escribe la tuya.',
      placeholder: 'Escribe un mensaje…',
      send: 'Enviar',
      open: 'Abrir chat',
      close: 'Cerrar chat',
      questions: ['Servicios', 'Alergias de la piel', 'Productos utilizados', 'Reservar una cita', 'Horario'],
      fallback: `Puedo ayudarte con servicios, citas, horario, ubicación y teléfono. También puedes llamar al <a href="${PHONE_LINK}">${PHONE_DISPLAY}</a>.`,
      services: 'Forever Young ofrece limpieza facial, rejuvenecimiento facial, masajes y tratamientos de bienestar. ¿Qué servicio te interesa?',
      booking: 'Puedes solicitar una cita mediante nuestro formulario. <a href="contact.html">Reservar una cita</a> o llama al <a href="' + PHONE_LINK + '">' + PHONE_DISPLAY + '</a>.',
      hours: 'Abrimos de lunes a viernes de 10AM–8PM y sábados y domingos de 10AM–6PM. Los servicios son con cita.',
      location: 'Estamos ubicados en 909 E 156 Street, Bronx, NY 10455.',
      phone: 'Llámanos al <a href="' + PHONE_LINK + '">' + PHONE_DISPLAY + '</a>.',
      facial: 'Ofrecemos limpieza facial profesional y tratamientos de rejuvenecimiento. Visita las páginas de servicios faciales y luego solicita tu cita.',
      massage: 'Ofrecemos masaje sueco, tejido profundo, piedras calientes, tailandés, deportivo, aromaterapia, masaje para parejas, reflexología y tratamientos corporales.',
      allergy: 'Si tienes una alergia conocida en la piel, dinos el alérgeno, los productos relacionados y cualquier reacción anterior antes del tratamiento. Recomendamos evitar el ingrediente sospechoso y pedir que la especialista revise cada producto antes de aplicarlo. Una prueba de parche puede ser apropiada, pero no garantiza que no ocurrirá una reacción. Si actualmente tienes hinchazón, dificultad para respirar, ampollas o una reacción grave, busca atención médica urgente en vez de recibir un tratamiento cosmético.',
      products: 'Los productos dependen del procedimiento y pueden incluir limpiador, exfoliante o peeling enzimático, tónico, suero, mascarilla, hidratante, crema o aceite de masaje y protector solar. Antes del tratamiento, pide ver la marca exacta y la lista de ingredientes. Infórmanos sobre alergias, piel sensible, ingredientes que evitas y reacciones anteriores. Aquí no inventaremos ni prometeremos una marca específica.',
    },
  };

  const style = document.createElement('style');
  style.textContent = `
    .fy-chat-launcher{position:fixed;right:22px;bottom:22px;z-index:3000;width:62px;height:62px;border:0;border-radius:50%;background:#FE82AC;color:#fff;font-size:27px;cursor:pointer;box-shadow:0 6px 24px rgba(70,35,60,.28);transition:transform .2s}
    .fy-chat-launcher:hover{transform:scale(1.06)}
    .fy-chat-panel{position:fixed;right:22px;bottom:96px;z-index:3000;width:min(370px,calc(100vw - 28px));height:520px;max-height:calc(100vh - 125px);display:none;flex-direction:column;overflow:hidden;border-radius:20px;background:#fff;box-shadow:0 14px 45px rgba(50,25,45,.3);font-family:'Segoe UI',Tahoma,sans-serif}
    .fy-chat-panel.open{display:flex}
    .fy-chat-header{display:flex;align-items:center;padding:16px 18px;background:linear-gradient(135deg,#FE82AC,#9b6b9e);color:#fff}
    .fy-chat-header-text{flex:1}.fy-chat-title{font-size:17px;font-weight:700}.fy-chat-status{font-size:12px;opacity:.9}
    .fy-chat-close{border:0;background:rgba(255,255,255,.2);color:#fff;width:34px;height:34px;border-radius:50%;font-size:22px;cursor:pointer}
    .fy-chat-messages{flex:1;overflow-y:auto;padding:16px;background:#f8f3f6}
    .fy-message{max-width:86%;padding:11px 13px;margin:0 0 10px;border-radius:16px;line-height:1.4;font-size:14px}
    .fy-message.bot{background:#fff;color:#3a3a3a;border-bottom-left-radius:5px;box-shadow:0 1px 4px rgba(0,0,0,.06)}
    .fy-message.user{margin-left:auto;background:#9b6b9e;color:#fff;border-bottom-right-radius:5px}
    .fy-message a{color:#8b416b;font-weight:700}
    .fy-quick{display:flex;gap:7px;flex-wrap:wrap;margin:5px 0 13px}
    .fy-quick button{border:1px solid #d9afc5;background:#fff;color:#7c4568;border-radius:18px;padding:7px 10px;font-size:12px;cursor:pointer}
    .fy-chat-form{display:flex;gap:8px;padding:12px;border-top:1px solid #eadde4;background:#fff}
    .fy-chat-input{flex:1;min-width:0;border:1px solid #d9cbd3;border-radius:22px;padding:11px 14px;font:inherit;outline:none}
    .fy-chat-input:focus{border-color:#FE82AC}
    .fy-chat-send{border:0;border-radius:22px;padding:0 15px;background:#FE82AC;color:#fff;font-weight:700;cursor:pointer}
    @media(max-width:520px){.fy-chat-launcher{right:14px;bottom:14px}.fy-chat-panel{right:14px;bottom:86px;height:70vh}}
  `;
  document.head.appendChild(style);

  const launcher = document.createElement('button');
  launcher.className = 'fy-chat-launcher';
  launcher.type = 'button';
  launcher.textContent = '💬';

  const panel = document.createElement('section');
  panel.className = 'fy-chat-panel';
  panel.setAttribute('role', 'dialog');
  panel.setAttribute('aria-modal', 'false');

  document.body.append(panel, launcher);

  const getLang = () => localStorage.getItem('preferredLanguage') === 'es' ? 'es' : 'en';
  const current = () => text[getLang()];

  const detectQuestionLanguage = (input) => {
    const q = input.toLowerCase();
    const spanishWords = /[¿¡áéíóúñ]|\b(que|qué|como|cómo|tengo|tiene|piel|alergia|producto|productos|cita|horario|ubicación|telefono|teléfono|servicio|masaje|facial|puedo|usan|utilizan|recomienda|recomiendan)\b/;
    const englishWords = /\b(what|how|where|when|have|skin|allergy|product|products|appointment|hours|location|phone|service|massage|facial|can|use|recommend)\b/;
    if (spanishWords.test(q)) return 'es';
    if (englishWords.test(q)) return 'en';
    return getLang();
  };

  const answerKey = (input) => {
    const q = input.toLowerCase();
    if (/alerg|allerg|reaction|reacci|rash|sarpull|itch|picor|sensitive skin|piel sensible/.test(q)) return 'allergy';
    if (/producto|product|ingredient|ingrediente|brand|marca|cream|crema|serum|suero|mask|mascarilla|oil|aceite/.test(q)) return 'products';
    if (/cita|reserv|book|appointment|schedule/.test(q)) return 'booking';
    if (/hora|horario|open|close|hours|time/.test(q)) return 'hours';
    if (/ubic|direc|address|location|where/.test(q)) return 'location';
    if (/tel|phone|call|llam/.test(q)) return 'phone';
    if (/masaje|massage|reflex|piedra|stone/.test(q)) return 'massage';
    if (/facial|cara|rostro|limpieza|rejuven/.test(q)) return 'facial';
    if (/servicio|service|treatment|tratamiento/.test(q)) return 'services';
    return 'fallback';
  };

  const render = () => {
    const c = current();
    launcher.setAttribute('aria-label', c.open);
    panel.setAttribute('aria-label', c.title);
    panel.innerHTML = `
      <div class="fy-chat-header">
        <div class="fy-chat-header-text"><div class="fy-chat-title">${c.title}</div><div class="fy-chat-status">● ${c.status}</div></div>
        <button class="fy-chat-close" type="button" aria-label="${c.close}">×</button>
      </div>
      <div class="fy-chat-messages" aria-live="polite">
        <div class="fy-message bot">${c.greeting}<br>${c.prompt}</div>
        <div class="fy-quick">${c.questions.map(q => `<button type="button">${q}</button>`).join('')}</div>
      </div>
      <form class="fy-chat-form">
        <input class="fy-chat-input" type="text" placeholder="${c.placeholder}" maxlength="300" aria-label="${c.placeholder}">
        <button class="fy-chat-send" type="submit">${c.send}</button>
      </form>`;

    const messages = panel.querySelector('.fy-chat-messages');
    const input = panel.querySelector('.fy-chat-input');

    const addMessage = (value, role) => {
      const item = document.createElement('div');
      item.className = `fy-message ${role}`;
      if (role === 'bot') item.innerHTML = value;
      else item.textContent = value;
      messages.appendChild(item);
      messages.scrollTop = messages.scrollHeight;
    };

    const respond = (question) => {
      addMessage(question, 'user');
      const responseLanguage = detectQuestionLanguage(question);
      const langText = text[responseLanguage];
      window.setTimeout(() => addMessage(langText[answerKey(question)], 'bot'), 250);
    };

    panel.querySelectorAll('.fy-quick button').forEach(button => {
      button.addEventListener('click', () => respond(button.textContent));
    });

    panel.querySelector('.fy-chat-form').addEventListener('submit', event => {
      event.preventDefault();
      const value = input.value.trim();
      if (!value) return;
      input.value = '';
      respond(value);
    });

    panel.querySelector('.fy-chat-close').addEventListener('click', () => {
      panel.classList.remove('open');
      launcher.focus();
    });
  };

  render();
  launcher.addEventListener('click', () => {
    panel.classList.toggle('open');
    if (panel.classList.contains('open')) panel.querySelector('.fy-chat-input').focus();
  });

  document.querySelectorAll('.lang-btn').forEach(button => {
    button.addEventListener('click', () => {
      const wasOpen = panel.classList.contains('open');
      window.setTimeout(() => {
        render();
        if (wasOpen) panel.classList.add('open');
      }, 0);
    });
  });
})();
