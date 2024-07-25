function buscaCep(){
let cep = document.querySelector("#cep");
let rua = document.querySelector("#rua");
let complemento = document.querySelector("#complemento");
let bairro = document.querySelector("#bairro");
let cidade = document.querySelector("#cidade");
let estado = document.querySelector("#estado");

cep.addEventListener('focusout', async() => {
let validacao = /^[0-9]{8}$/
    if (cep.value == ""){
        console.error("CEP vazio!!");
        rua.value = '';
        complemento.value = '';
        bairro.value = '';
        cidade.value = '';
        estado.value = '';
    } else if(!validacao.test(cep.value)){
        console.error("CEP inválido!!");
    }
    let resposta = await fetch(`https://viacep.com.br/ws/${cep.value}/json/`);
    if(!resposta.ok){
        console.error("Não foi possível buscar o endereço pelo CEP.");
    }
    let res = await resposta.json();
    console.log(res);
    rua.value = res.logradouro;

    if(!res.complemento)
        complemento.value = '...'; 
    else
        complemento.value = res.complemento;

    bairro.value = res.bairro;
    cidade.value = res.localidade;
    estado.value = res.uf;
})
}