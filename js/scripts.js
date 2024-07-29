const container = document.querySelector(".container");
const qrCodeBtn = document.querySelector("#qr-form button");
const qrCodeInput = document.querySelector("#qr-form input");
const qrCodeImg = document.querySelector("#qr-code img");

// gerar qr Code
function generateQrCode() {
  const qrCodeValue = qrCodeInput.value;

  // validando se existe algum valor no input
  if (!qrCodeValue) return;

  // texto do button alterado
  qrCodeBtn.innerHTML = "Gerando Código...";

  // api do gerador de qrCode
  qrCodeImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrCodeValue}`;

  // ativa a classe --ativos-- no container
  qrCodeImg.addEventListener("load", () => {
    container.classList.add("ativos");
    qrCodeBtn.innerHTML = "Código Criado!";
  });
}

// evento de click chamando a função
qrCodeBtn.addEventListener("click", (e) => {
  e.preventDefault();
  generateQrCode();
});

// adicionando evento no input para ser ativada atraves do Enter
qrCodeInput.addEventListener("keydown", (e) => {
  if (e.code === "Enter") {
    generateQrCode();
  }
});

// limpar area do QR Code - se o input estiver sem valor (vazio) retirar a classe ativos e voltar o nome do button

qrCodeInput.addEventListener("keyup", () => {
  if (!qrCodeInput.value) {
    container.classList.remove("ativos");
    qrCodeBtn.innerHTML = "Gerar QR Code";
  }
});
