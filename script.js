// =========================
// ARQUIVO: script.js
// =========================

const form = document.getElementById("briefingForm");

const success = document.getElementById("successMessage");

form.addEventListener("submit", function(e){

  e.preventDefault();

  // CAMPOS

  const nome = document.getElementById("nome").value;
  const idade = document.getElementById("idade").value;
  const data = document.getElementById("data").value;
  const inicio = document.getElementById("inicio").value;
  const parabens = document.getElementById("parabens").value;
  const encerramento = document.getElementById("encerramento").value;
  const local = document.getElementById("local").value;
  const espaco = document.getElementById("espaco").value;
  const convidados = document.getElementById("convidados").value;

  const referencias = document.getElementById("referencias").value;
  const tema = document.getElementById("tema").value;

  const importantes = document.getElementById("importantes").value;
  const momentos = document.getElementById("momentos").value;
  const convidadosFora = document.getElementById("convidadosFora").value;

  const album = document.getElementById("album").value;
  const albumEstilo = document.getElementById("albumEstilo").value;
  const fotosObrigatorias = document.getElementById("fotosObrigatorias").value;

  const entrega = document.getElementById("entrega").value;
  const prazo = document.getElementById("prazo").value;

  const observacoes = document.getElementById("observacoes").value;

  // CHECKBOX

  const espontaneas =
  document.getElementById("espontaneas").checked ? "Sim" : "Não";

  const posadas =
  document.getElementById("posadas").checked ? "Sim" : "Não";

  const misto =
  document.getElementById("misto").checked ? "Sim" : "Não";

  const instagram =
  document.getElementById("instagram").checked ? "Sim" : "Não";

  const recepcao =
  document.getElementById("recepcao").checked ? "Sim" : "Não";

  const atracoes =
  document.getElementById("atracoes").checked ? "Sim" : "Não";

  const kids =
  document.getElementById("kids").checked ? "Sim" : "Não";

  const mesa =
  document.getElementById("mesa").checked ? "Sim" : "Não";

  const lembrancas =
  document.getElementById("lembrancas").checked ? "Sim" : "Não";

  const dj =
  document.getElementById("dj").checked ? "Sim" : "Não";

  // MENSAGEM

  const mensagem = `🎉 *NOVO BRIEFING DE ANIVERSÁRIO* 🎉

👤 *Aniversariante:* ${nome}
🎂 *Idade:* ${idade}

📅 *Data:* ${data}

⏰ *Início:* ${inicio}
🎂 *Parabéns:* ${parabens}
🏁 *Encerramento:* ${encerramento}

📍 *Local:* ${local}
🏢 *Espaço:* ${espaco}

👥 *Convidados:* ${convidados}

━━━━━━━━━━━━━━

📸 *ESTILO*

• Espontâneas: ${espontaneas}
• Posadas: ${posadas}
• Misto: ${misto}
• Instagram: ${instagram}

🎨 *Tema:* ${tema}

🖼️ *Referências:*
${referencias}

━━━━━━━━━━━━━━

👨‍👩‍👧 *PESSOAS IMPORTANTES*

${importantes}

✨ *Momentos especiais:*

${momentos}

🌍 *Convidados de fora:*

${convidadosFora}

━━━━━━━━━━━━━━

🎪 *ORGANIZAÇÃO*

• Recepção: ${recepcao}
• Atrações: ${atracoes}
• Espaço Kids: ${kids}
• Mesa especial: ${mesa}
• Lembrancinhas: ${lembrancas}
• DJ/Música: ${dj}

━━━━━━━━━━━━━━

📖 *ÁLBUM*

• Deseja álbum: ${album}
• Estilo: ${albumEstilo}

📸 *Fotos obrigatórias:*

${fotosObrigatorias}

━━━━━━━━━━━━━━

🚀 *ENTREGA*

• Forma: ${entrega}
• Prazo: ${prazo}

━━━━━━━━━━━━━━

📝 *OBSERVAÇÕES*

${observacoes}
`;

  // NUMERO DESTINO

  const numero = "5581991629356";

  // LINK WHATSAPP

  const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;

  // ALERTA

  success.classList.add("show");

  // REDIRECIONA

  setTimeout(() => {

    window.open(url, "_blank");

    success.classList.remove("show");

    form.reset();

  }, 1200);

});


// =========================
// ANIMAÇÃO DOS CARDS
// =========================

const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver((entries) => {

  entries.forEach((entry) => {

    if(entry.isIntersecting){

      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";

    }

  });

}, {
  threshold:0.1
});


cards.forEach((card) => {

  card.style.opacity = "0";
  card.style.transform = "translateY(40px)";
  card.style.transition = "0.7s";

  observer.observe(card);

});