AOS.init();

const dataDoEvento =  new Date("Dec 12, 2024 19:00:00");
const timeStampDoEvento = dataDoEvento.getTime();

const contaAsHoras = setInterval(function() {
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const distancia = timeStampDoEvento - timeStampAtual;

    const diasEmMS = 1000 * 60 * 60 * 24;
    const horasEmMS = 1000 * 60 * 60;
    const minutosEmMS = 1000 * 60;
    const segundosEmMS = 1000;

    const diasAteOEvento = Math.floor(distancia / diasEmMS);
    const horasAteOEvento = Math.floor((distancia % diasEmMS) / horasEmMS);
    const minutosAteOEvento = Math.floor((distancia % horasEmMS) / minutosEmMS);
    const segundosAteOEvento = Math.floor((distancia % minutosEmMS) / segundosEmMS);

    document.getElementById("contador").innerHTML = `${diasAteOEvento}d ${horasAteOEvento}h ${minutosAteOEvento}m ${segundosAteOEvento}s`;

    if (distancia < 0) {
        clearInterval(contaAsHoras)
        document.getElementById("contador").innerHTML = "Evento encerrado";
    }
}, 1000);