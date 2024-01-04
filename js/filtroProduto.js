function chamaFiltro() {
    const opsFiltro = document.querySelector('.opsFiltro');
    opsFiltro.classList.toggle('show');
  }


function FiltraElementos(categoria){
    const elemento = document.querySelectorAll(".produto")
    const preco = document.querySelectorAll(".preco")
    let posicao=0
    let maiorV=preco[0]

    if(categoria==="menor preço"){
        for(let i=0;i<preco.length;i++){
            console.log(preco[i])
           
                       
        }
    }



}