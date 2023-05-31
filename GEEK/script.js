let i = 0
setInterval(() => {
  const arrayImagem = ["gin.jpg", "cos.jpg", "kpop.jpg"];
  const imagem = document.getElementById("img");
  imagem.src = arrayImagem[i++ % arrayImagem.length];
}, 1000)