function calcularIntervaloDatas(dataAntiga, dataNova) {
    if (dataAntiga > dataNova) {
        let temp = dataAntiga;
        dataAntiga = dataNova;
        dataNova = temp;
    }

    let milissegundosPorDia = 1000 * 60 * 60 * 24;
    let diferencaMs = dataNova - dataAntiga;
    let diferencaDias = Math.floor(diferencaMs / milissegundosPorDia);

    return diferencaDias;
}

function imprimirResultado(id, result) {
    let output = document.getElementById(id);
    output.innerText = result;
}

function dataMaior(data1, data2) {
    if(data1 > data2)
        return data1;
    else
        return data2;
}

function formatarData() {
    const dataAtual = new Date();
    let hora = String(dataAtual.getHours()).padStart(2, '0');
    let minuto = String(dataAtual.getMinutes()).padStart(2, '0');
    let dia = String(dataAtual.getDate()).padStart(2, '0');
    let mes = String(dataAtual.getMonth() + 1).padStart(2, '0');
    let ano = dataAtual.getFullYear();
    
    return `${hora}:${minuto} - ${dia}/${mes}/${ano}`;
}

const data1 = new Date('2025-04-10');
const data2 = new Date('2025-05-10');
imprimirResultado("result1", "Maior data: " + dataMaior(data1, data2));

const dataAntiga = new Date('2022-04-05');
const dataNova = new Date('2022-05-05');
imprimirResultado("result2", "Intervalo: " + calcularIntervaloDatas(dataAntiga, dataNova) + " dias");

imprimirResultado("result3", "Data atual formatada: " + formatarData());