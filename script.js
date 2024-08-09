function welcomeMessage() {
    alert('Seja bem-vindo ao nosso Projeto Agrinho de Programação. Somos do Colégio Estadual Abraham Lincoln de Kaloré, NRE de Apucarana.');
}

function showInfo(topic) {
    const infoSection = document.getElementById('infoSection');
    let content = '';

    if (topic === 'alimentacao') {
        content = '<h3>Alimentação</h3><p>O milho é uma fonte fundamental de alimentação tanto para humanos quanto para animais. Nas grandes cidades, ele é consumido diretamente na forma de alimentos como pipoca, milho cozido, e também como ingrediente em inúmeros produtos industrializados.</p>';
    } else if (topic === 'industria') {
        content = '<h3>Indústria</h3><p>A indústria utiliza o milho em diversas formas, desde a produção de biocombustíveis até a fabricação de produtos como amido, óleos, e adoçantes. Isso é essencial para o funcionamento de várias indústrias nas cidades.</p>';
    } else if (topic === 'economia') {
        content = '<h3>Economia</h3><p>A produção de milho movimenta bilhões na economia global. Nas grandes cidades, ele gera empregos em setores como agricultura, transporte, processamento de alimentos e varejo.</p>';
    }

    infoSection.innerHTML = content;
    infoSection.style.display = 'block';
}

