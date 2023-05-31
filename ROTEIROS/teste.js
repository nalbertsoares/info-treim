let i = 0
setInterval(() => {
    const arrayImagem = ["lupa.jpeg","Logo.jpg"];
    const imagem = document.getElementById("img1");
    imagem.src = arrayImagem [i++% arrayImagem.length];
},1000);