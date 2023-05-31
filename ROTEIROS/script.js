function rolagem(){
    var ouroPreto= window.document.querySelector('#ouro_preto')
    var int= window.document.querySelector('#pesquisa')
    var pesquisa= int.value
    if(pesquisa === "ouro preto" || pesquisa ==="ouro"){
        ouroPreto.scrollIntoView({
            behavior: "smooth"
        });
    }else{
        alert("Ops, não encontrei nada!")
    }
    //if(pesquisa=== 'teste'){
   //     window.open('')
   // }
}