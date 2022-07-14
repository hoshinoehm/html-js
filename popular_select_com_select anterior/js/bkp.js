const urlUF = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados';
const uf = document.getElementById("uf")
const cidade = document.getElementById("cidade")



window.addEventListener('load', async () => {
    const request = await fetch(urlUF);
    const response = await request.json();

    const options = document.createElement("optgroup")
    options.setAttribute('label', 'UFs')
    response.forEach(function (uf) {
        options.innerHTML += '<option>' + uf.sigla + '</option>'
    })

    uf.append(options)

})

uf.addEventListener('change', async function () {

    const urlCidade = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados/' + uf.value + '/municipios';

    const request = await fetch(urlCidade)
    const response = await request.json();

    let options = '';

    response.forEach(function (cidades) {
        options += '<option>' + cidades.nome + '</option>'
    })

    cidade.innerHTML = options
})