const dataInicio = new Date('2016-09-09');
const dataAtual = new Date();

const diferencaTempo = dataAtual - dataInicio;
const diasDesdeInicio = Math.floor(diferencaTempo / (1000 * 60 * 60 * 24));

document.addEventListener('DOMContentLoaded', () => {
    const contadorElement = document.getElementById('contador');
    contadorElement.textContent = `Dias desde 09/09/2016: ${diasDesdeInicio}`;
});

function atualizarContador() {
    const inicio = new Date(2016, 8, 9, 0, 0, 0); // 09/09/2016
    const agora = new Date();

    let anos = agora.getFullYear() - inicio.getFullYear();
    let meses = agora.getMonth() - inicio.getMonth();
    let dias = agora.getDate() - inicio.getDate();
    let horas = agora.getHours() - inicio.getHours();
    let minutos = agora.getMinutes() - inicio.getMinutes();
    let segundos = agora.getSeconds() - inicio.getSeconds();

    if (segundos < 0) {
        segundos += 60;
        minutos -= 1;
    }
    if (minutos < 0) {
        minutos += 60;
        horas -= 1;
    }
    if (horas < 0) {
        horas += 24;
        dias -= 1;
    }
    if (dias < 0) {
        meses -= 1;
        const ultimoDiaMesAnterior = new Date(agora.getFullYear(), agora.getMonth(), 0).getDate();
        dias += ultimoDiaMesAnterior;
    }
    if (meses < 0) {
        anos -= 1;
        meses += 12;
    }

    document.getElementById('contador').textContent =
        `${anos} anos, ${meses} meses, ${dias} dias, ${horas} horas, ${minutos} minutos e ${segundos} segundos de amor`;
}
atualizarContador();
setInterval(atualizarContador, 1000);

// Animação de corações
function criarCoracao() {
    const hearts = document.querySelector('.hearts');
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = (4 + Math.random() * 2) + 's';
    hearts.appendChild(heart);
    setTimeout(() => heart.remove(), 6000);
}
setInterval(criarCoracao, 400);