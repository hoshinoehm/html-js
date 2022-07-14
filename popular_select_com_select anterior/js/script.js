const urlUF = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados';
const uf = document.getElementById("uf")
const cidade = document.getElementById("cidade")



window.addEventListener('load', addEventos)



async function addEventos() {

    const request = await fetch(urlUF);
    const response = await request.json();
    const options = document.createElement("optgroup")

    options.setAttribute('label', 'UFs')

    function imprimirUf(uf) {
        options.innerHTML += '<option>' + uf.sigla + '</option>'
    }

    response.forEach(imprimirUf)

    uf.append(options)
}


uf.addEventListener('change', addEventosUf)

async function addEventosUf() {

    const urlCidade = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados/' + uf.value + '/municipios';

    const request = await fetch(urlCidade)
    const response = await request.json();

    let options = '';

    function imprimirCidade(cidades) {
        options += '<option>' + cidades.nome + '</option>'
        //options += '<option>' + cidades.nome + '</option>'
    }

    response.forEach(imprimirCidade)

    
    cidade.innerHTML = options

}        
