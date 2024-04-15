document.querySelector('.groups-container').classList.add('custom-scrollbar');

function toggleGrupos() {
    var grupos = document.querySelectorAll('.groups');
    for (var i = 0; i < grupos.length; i++) {

        var estiloDisplay = window.getComputedStyle(grupos[i]).getPropertyValue('display');

        if (estiloDisplay === "none") {
            grupos[i].style.display = "flex";
        } else {
            grupos[i].style.display = "none";
        }
    }

    var btn = document.querySelector('.btn-terciario');

    var btnText = btn.textContent.trim();

    if (btnText === "Mostrar Grupos") {
        btn.textContent = "Esconder Grupos";
    } else {
        btn.textContent = "Mostrar Grupos";
    }
}
function filtrarGrupos(pesquisa) {
    const grupos = document.querySelectorAll('.groups');
    pesquisa = pesquisa.toLowerCase().trim();

    grupos.forEach(grupo => {
        const nome = grupo.querySelector('.textGroups').textContent.toLowerCase();
        const participantes = grupo.querySelector('.participantes').textContent.toLowerCase();
        const valor = grupo.querySelector('.valor').textContent.toLowerCase();


        if (nome.includes(pesquisa) || participantes.includes(pesquisa) || contemValor(valor, pesquisa)) {
            grupo.style.display = 'flex';
        } else {
            grupo.style.display = 'none';
        }
    });
}


function contemValor(valor, pesquisa) {
    const valorNumerico = parseFloat(valor.replace(',', '.'));
    const pesquisaNumerica = parseFloat(pesquisa.replace(',', '.'));


    if (!isNaN(valorNumerico) && (valorNumerico === pesquisaNumerica || parseInt(valor) === pesquisaNumerica)) {
        return true;
    }

    return false;
}
function filtrarGrupos(pesquisa) {
    const grupos = document.querySelectorAll('.groups');
    pesquisa = pesquisa.toLowerCase().trim();

    grupos.forEach(grupo => {
        const nome = grupo.querySelector('.textGroups').textContent.toLowerCase();
        const participantes = grupo.querySelector('.participantesClass').textContent.toLowerCase();
        const valor = grupo.querySelector('.valor').textContent.toLowerCase();

        if (nome.includes(pesquisa) || participantes.includes(pesquisa) || contemValor(valor, pesquisa)) {
            grupo.style.display = 'flex';
        } else {
            grupo.style.display = 'none';
        }
    });
}

function buscarConselho() {
    const apiUrl = 'https://api.adviceslip.com/advice';

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const conselho = data.slip.advice;
            const headerDiv = document.querySelector('header div');
            headerDiv.textContent = conselho;
        })
        .catch(error => {
            console.error('Erro ao buscar o conselho:', error);
        });
}


buscarConselho();


setInterval(buscarConselho, 30000);