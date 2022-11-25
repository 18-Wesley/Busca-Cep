const p = document.querySelector('.conteudo')
const input = document.querySelector('.cep')
let estado = document.querySelector('.estado')
let cidade = document.querySelector('.cidade')
let rua = document.querySelector('.rua')
const menssagem = document.querySelector('.menssagem')

const preencherDados = (obj) =>{
    if(obj.erro == true){
        estado.value = ""
        cidade.value = ""
        rua.value = ""
        menssagem.innerHTML = "Cep invalido, tente novamente !"

    }else{
        menssagem.innerHTML = ""
        estado.value = obj.uf
        cidade.value = obj.localidade
        rua.value = obj.logradouro
    }
}
function buscarCEP(){
    let cepRefatorado = input.value.replace("-", "")
    estado.value = ""
    cidade.value = ""
    rua.value = ""
    menssagem.innerHTML = ""
    
    if(cepRefatorado == ""){
        estado.value = ""
        cidade.value = ""
        rua.value = ""
        menssagem.innerHTML = ""

    }else{
        fetch(`https://viacep.com.br/ws/${cepRefatorado}/json/`)
        .then( (resonse) => resonse.json())
            .then( data => {
                preencherDados(data)
            })
        .catch(e => {
            menssagem.innerHTML = "Cep invalido, tente novamente !"

        })
    }
}
        
input.addEventListener("blur", buscarCEP)



