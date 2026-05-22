// começa do zero
let numero = 0
let display = document.getElementById("display");
atualizarCor();

// ===== VALIDA A COR DO NÚMERO =====
function atualizarCor() {
    if (numero > 0) {
        display.style.color = "#2ecc71"; // Verde se for positivo
    } else if (numero < 0) {
        display.style.color = "#e74c3c"; // Vermelho se for negativo
    } else {
        display.style.color = "#1565c0"; // O  azul padrão se for zero
    }
}
// função de somar
function somar() {
    numero++;
    display.innerText = numero;   // atualiza o número grande na tela
    atualizarCor();
}
// função diminuir
function diminuir() {
    numero--;
    display.innerText = numero;   // atualiza o número grande na tela
    atualizarCor();
}
// função zerar
function zerar() {
    numero = 0;
    display.innerText = numero;   // atualiza o número grande na tela
    atualizarCor();
}
function toggleDarkMode() {
   // lida e desliga o modo noturno
   document.body.classList.toggle("dark-mode");
   // 2. Pega o botão lá no HTML pelo ID dele
    let botao = document.getElementById("btn-noturno");   
    // 3. Verifica se o body ESTÁ com o modo noturno ativado
    if (document.body.classList.contains("dark-mode")) {
        botao.innerText = "☀️"; //  o botão vira Sol
    } else {
        botao.innerText = "🌙"; // o botão vira Lua
    }
}